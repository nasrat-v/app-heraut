import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Apero, AperoService } from 'src/app/services/apero.service';
import { GoogleMapsService } from 'src/app/services/google-maps.service';
import { Plugins } from '@capacitor/core';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-apero-details',
  templateUrl: './apero-details.page.html',
  styleUrls: ['./apero-details.page.scss'],
})
export class AperoDetailsPage implements OnInit {
  lat: number;
  lng: number;
  address: string;

  apero: Apero = {
    _id_host:         '',
    _user_name_host:  '',
    _lon:             null,
    _lat:             null,
    _address:         '',
    _nb_slots:        null,
    _nb_guests:       null,
    _guests:          [],
    _date:            null
  };

  constructor(public authFirebaseService: AuthFirebaseService,
              private googleMapsService: GoogleMapsService,
              private activatedRoute: ActivatedRoute, 
              private aperoService: AperoService,
              private toastCtrl: ToastController, 
              private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.aperoService.getApero(id).subscribe(apero => {
        this.apero = apero;
      });
    }
  }
 
  addApero() {
    Plugins.Geolocation.getCurrentPosition().then(result => {
       
      this.apero._lat = result.coords.latitude;
      this.apero._lon = result.coords.longitude;
      this.apero._user_name_host = this.authFirebaseService.getFirebaseAuth().auth.currentUser.email;
      this.apero._id_host = this.authFirebaseService.getFirebaseAuth().auth.currentUser.uid;
      this.apero._nb_guests = 0;


      // calling getAddress service function to decode the address
      this.googleMapsService.getAddress(this.apero._lat, this.apero._lon).subscribe(decodedAddress => {
        this.apero._address = decodedAddress;
        //console.log(this.address);
          
        this.aperoService.addApero(this.apero).then(() => {
          this.router.navigateByUrl('tabs/apero-list');
          this.showToast('Apero added');
        }, err => {
          this.showToast('There was a problem adding your idea :(');
        });
      });
    });
      
  }
 
  deleteApero() {
    this.aperoService.deleteApero(this.apero._id).then(() => {
      this.router.navigateByUrl('tabs//apero-list');
      this.showToast('Apero deleted');
    }, err => {
      this.showToast('There was a problem deleting your Apero :(');
    });
  }
 
  updateApero() {
    this.aperoService.updateApero(this.apero).then(() => {
      this.showToast('Apero updated');
    }, err => {
      this.showToast('There was a problem updating your apero :(');
    });
  }
 
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
