import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { first, tap, switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { GoogleMapsService } from './google-maps.service';
import { Plugins } from '@capacitor/core';

export interface User {
  _uid: string;
  _email: string;
  _lat: number,
  _lon: number
}

@Injectable()
export class AuthFirebaseService {
  _user: Observable<User>;

  constructor(private firebaseAuth: AngularFireAuth,
    private googleMapsService: GoogleMapsService,
    private afs: AngularFirestore,
    private router: Router
    ) {
          this._user = this.firebaseAuth.authState.pipe(
            switchMap(user => {
              if (user) {
                return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
              } else {
                return of(null)
              }
            })
          )
  }

  private updateUserData(uid, email, latitude, longitude) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
      const data: User = {
        _uid: uid,
        _email: email,
        _lat: latitude,
        _lon: longitude
      }
      return userRef.set(data, { merge: true })

  }

  signup(email: string, password: string) {
      this.firebaseAuth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Success!', value);
          Plugins.Geolocation.getCurrentPosition().then(result => {
            this.updateUserData(value.user.uid, value.user.email, result.coords.latitude, result.coords.longitude);

          });
        })
        .catch(err => {
          console.log('Something went wrong:',err.message);
       });
  }

  login(email: string, password: string) {
          this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        Plugins.Geolocation.getCurrentPosition().then(result => { 
          this.updateUserData(value.user.uid, value.user.email, result.coords.latitude, result.coords.longitude);
        });
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  isAuthenticated() {
    
    return this.firebaseAuth.authState.pipe(first());
  }



  getAuthState() {
    return this.firebaseAuth.authState
  }

  getFirebaseAuth() {
    return this.firebaseAuth;
  }

}
