import { Injectable } from '@angular/core';
import { Firestore, DocumentReference } from '@angular/fire/firestore';
import {
  collection,
  doc,
  setDoc,
  getDoc,
  where,
  getDocs,
  query,
} from 'firebase/firestore';
@Injectable({
  providedIn: 'root',
})
export class DatosService {
  citiesRef = collection(this.db, 'cities');
  constructor(private db: Firestore) {
    this.iniciar();
  }
  async iniciar() {
    await setDoc(doc(this.citiesRef, 'SF'), {
      name: 'San Francisco',
      state: 'CA',
      country: 'USA',
      capital: false,
      population: 860000,
      regions: ['west_coast', 'norcal'],
    });
    await setDoc(doc(this.citiesRef, 'LA'), {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
      capital: false,
      population: 3900000,
      regions: ['west_coast', 'socal'],
    });
    await setDoc(doc(this.citiesRef, 'DC'), {
      name: 'Washington, D.C.',
      state: null,
      country: 'USA',
      capital: true,
      population: 680000,
      regions: ['east_coast'],
    });
    await setDoc(doc(this.citiesRef, 'TOK'), {
      name: 'Tokyo',
      state: null,
      country: 'Japan',
      capital: true,
      population: 9000000,
      regions: ['kanto', 'honshu'],
    });
    await setDoc(doc(this.citiesRef, 'BJ'), {
      name: 'Beijing',
      state: null,
      country: 'China',
      capital: true,
      population: 21500000,
      regions: ['jingjinji', 'hebei'],
    });
  }
  async getDato() {
    let docRef = doc(this.db, 'cities', 'SF');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  }
  async getDatosCondicion() {
    const q = query(
      collection(this.db, 'cities'),
      where('capital', '==', true)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  }
  async getDatosTodos() {
    const querySnapshot = await getDocs(collection(this.db, 'cities'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  }
}
