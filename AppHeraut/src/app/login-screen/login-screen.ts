import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AuthFirebaseService } from '../services/auth-firebase.service'
import { ProfileService, Profile } from '../services/profile.service';
import {Router} from "@angular/router"

export interface Profile {
  _id?:         '',
  _email:       '',
  _user_name:   '',
  _lon:         null,
  _lat:         null
}

@Component({
  selector: 'login-screen',
  templateUrl: 'login-screen.html',
  styleUrls: ['login-screen.scss']
})

export class LoginScreen {

  username: string
  email: string;
  password: string;
  data: Observable<any>;
  dataCollection: AngularFirestoreCollection<any>;

  constructor(
    private authFirebaseService: AuthFirebaseService,
    private profileService: ProfileService,
    private afAuth: AngularFireAuth, 
    private afs: AngularFirestore,
    private router: Router) {

    

      /*this.authFirebaseService.isAuthenticated().pipe(
        tap(user => {
          if (user) {
            console.log("connecté");
          }
          else {
            console.log("deconnecté");
          }
        })
      ).subscribe()*/
  }

  

  signup() {
    this.authFirebaseService.signup(this.email, this.password);
    
    
        /*this.profile._email = this.email;
        this.profile._lat = 100;
        this.profile._lon = 500;
        this.profile._user_name = this.username;
        this.profileService.addProfile(this.profile);*/
        //this.profileService.
        //this.profileService.createProfile(this.email);
        //this.authFirebaseService.user.

        this.username = this.email = this.password = '';
        this.router.navigate(['tabs'])
  }

  login() {
    this.authFirebaseService.login(this.email, this.password);
    this.email = this.password = '';

    this.router.navigate(['/tabs']);

  }

  logout() {
      this.authFirebaseService.logout();
  }

  setUserName(userName: string) {

  }

  /*anonLogin() {
    this.afAuth.auth.signInAnonymously().then(res => {
      this.user = res.user;
      //console.log(this.user);

      this.dataCollection = this.afs.collection(
        `data/${this.user.uid}/profile`,
        ref => ref.orderBy('date')
      );

    console.log(this.dataCollection);

    this.data = this.dataCollection.valueChanges();
   
  });
}


  sendToDatabase() {
    var date = new Date();
    var first = "42"
    var second = "24"
    this.user = new Date();
    console.log("push before  " + this.dataCollection)
    this.dataCollection.add({
      first,
      second,
      date
    });

    console.log("push ok  " + this.dataCollection)
  }*/

}
 