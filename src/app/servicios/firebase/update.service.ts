import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private afs: AngularFirestore) { }

    updateDocument(userId:string,username:string){ // Pueden colocar tantos parámetros como deseen
      this.afs.doc(`sesion/${userId}`).update({ // FUNCION QUE ACTUALIZA LA INFO DE UN USUARIO EN LA BASE DE DATOS
        username: username,
        id: userId,
      }).then(() => {
        console.log('Datos de usuario Actualizados');
      }).catch(err =>{
        console.log('hubo un error al actualizar el usuario',err);
      });  
   }
}
