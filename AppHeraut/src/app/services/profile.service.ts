import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

export interface Profile {
  _id?:         string,
  _email:       string,
  _user_name:   string,
  _lon:         number,
  _lat:         number
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //private profiles:  Observable<Profile[]>;
  //private profileCollection: AngularFirestoreCollection<Profile>;
  private profile: Profile;

  constructor(private afs: AngularFirestore) { 
    /*this.profileCollection = this.afs.collection<Profile>('profiles');
    this.profiles = this.profileCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );*/
  }
  
  createProfile(email: string) {
    this.profile._email = email;
  }

  setProfile(newProfile: Profile)  {
    this.profile = newProfile;
  }

  getProfile () {
    return this.profile;
  }

  getEmail() {
    return this.profile._email;
  }

  /*getProfile(id: string): Observable<Profile> {
    return this.profileCollection.doc<Profile>(id).valueChanges().pipe(
      take(1),
      map(apero => {
        apero._id = id;
        return apero
      })
    );
  }*/

  /*addProfile(profile: Profile): Promise<DocumentReference> {
    return this.profileCollection.add(profile);
  }*/

  /*updateProfile(profile: Profile): Promise<void> {
    return this.profileCollection.doc(profile._id).update({ 
      _email: profile._email, 
      _user_name: profile._user_name,
      _lon: profile._lon,
      _lat: profile._lat,

    });     
  }*/
 
  /*deleteProfile(id: string): Promise<void> {
    return this.profileCollection.doc(id).delete();
  }*/

}
