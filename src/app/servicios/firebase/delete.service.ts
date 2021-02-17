import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private afs:AngularFirestore) { }

  deleteDocument(userId:string){ // Pueden colocar tantos parámetros como deseen
    // FUNCION QUE ELIMINA LA INFO DE UN USUARIO EN LA BASE DE DATOS
     this.afs.doc(`sesion/${userId}`).delete().then(() => {
       console.log('Datos de usuario Eliminados');
      }).catch(err =>{
       console.log('hubo un error al eliminar los datos',err);
      });  
    }
    
}
