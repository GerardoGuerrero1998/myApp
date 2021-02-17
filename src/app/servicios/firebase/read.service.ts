import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  constructor(private afs:AngularFirestore) { }

    //Obtiene de firebase una colección de documentos
    getCollection(){ // Pueden colocar tantos parámetros como deseen
      return this.afs.collection(`sesion`).valueChanges();
    }
 
    //Obtiene de firebase solo un documento
    getDocument(userId:string){ 
      return this.afs.doc(`sesion/${userId}`).valueChanges();
    }
 
    getDocumentWithFilter(userId:string){
      return this.afs.collection('sesion', ref => ref.where('id','==',userId)).valueChanges();
    //OBTIENE DE FIREBASE SOLAMENTE AL USUARIO QUE CUMPLA LA CONDICIÓN
    }
}
