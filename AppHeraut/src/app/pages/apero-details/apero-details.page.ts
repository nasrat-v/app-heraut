import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Apero, AperoService } from 'src/app/services/apero.service';

@Component({
  selector: 'app-apero-details',
  templateUrl: './apero-details.page.html',
  styleUrls: ['./apero-details.page.scss'],
})
export class AperoDetailsPage implements OnInit {

  apero: Apero = {
    _id_host:         '',
    _user_name_host:  '',
    _lon:             null,
    _lat:             null,
    _nb_slots:        null,
    _guests:          null
  };

  constructor(private activatedRoute: ActivatedRoute, private aperoService: AperoService,
    private toastCtrl: ToastController, private router: Router) { }

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
    this.aperoService.addApero(this.apero).then(() => {
      this.router.navigateByUrl('/apero-list');
      this.showToast('Apero added');
    }, err => {
      this.showToast('There was a problem adding your idea :(');
    });
  }
 
  deleteApero() {
    this.aperoService.deleteApero(this.apero._id).then(() => {
      this.router.navigateByUrl('/apero-list');
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
