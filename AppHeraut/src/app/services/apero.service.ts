import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Apero {
  _id?: string
  _id_host:  string
  _user_name_host: string,
  _lon:             number,
  _lat:             number,
  _address:          string,
  _nb_slots:         number,
  _guests:          string[]
}

@Injectable({
  providedIn: 'root'
})
export class AperoService {
  private aperos:  Observable<Apero[]>;
  private aperoCollection: AngularFirestoreCollection<Apero>;

  constructor(private afs: AngularFirestore) {
    this.aperoCollection = this.afs.collection<Apero>('aperos');
    this.aperos = this.aperoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }

   getAperos(): Observable<Apero[]> {
    return this.aperos;
  }

  getApero(id: string): Observable<Apero> {
    return this.aperoCollection.doc<Apero>(id).valueChanges().pipe(
      take(1),
      map(apero => {
        apero._id = id;
        return apero
      })
    );
  }

  addApero(apero: Apero): Promise<DocumentReference> {
    return this.aperoCollection.add(apero);
  }

  updateApero(apero: Apero): Promise<void> {
    return this.aperoCollection.doc(apero._id).update({ 
      _id_host: apero._id_host, 
      _user_name_host: apero._user_name_host,
      _lon: apero._lon,
      _lat: apero._lat,
      _nb_slots: apero._nb_slots,
      _guests: apero._guests

    });     
  }

  joinApero(apero: Apero, user_name: string): Promise<void> {
    if (apero._nb_slots < apero._guests.length) {
        return this.aperoCollection.doc(apero._id).update({ 
        _id_host: apero._id_host, 
        _user_name_host: apero._user_name_host,
        _lon: apero._lon,
        _lat: apero._lat,
        _nb_slots: apero._nb_slots + 1,
        _guests: apero._guests.push(user_name)
  
      });    
    }
    else {
      return null;
    }
  }
 
  deleteApero(id: string): Promise<void> {
    return this.aperoCollection.doc(id).delete();
  }

  updateLonLat(apero: Apero, lon : number, lat: number) {
    return this.aperoCollection.doc(apero._id).update({ 
      _id_host: apero._id_host, 
      _user_name_host: apero._user_name_host,
      _lon: lon,
      _lat: lat,
      _nb_slots: apero._nb_slots,
      _guests: apero._guests
    }); 

  }
}
