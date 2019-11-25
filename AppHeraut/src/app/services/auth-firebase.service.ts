import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';

@Injectable()
export class AuthFirebaseService {
  user: Observable<firebase.User>;
  //user_id = null;
  user_token = null

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
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

      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
      this.user = null;
  }

  isAuthenticated() {
    
    return this.firebaseAuth.authState.pipe(first());
  }

  getUSer() {
    //this.firebaseAuth.
    return this.firebaseAuth.user;
  }

  getAuthState() {
    return this.firebaseAuth.authState
  }

}
