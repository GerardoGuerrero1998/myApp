import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { AlertasService } from '../alertas.service';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private afs: AngularFirestore,public alertas:AlertasService) { }

  createDocument(userId:string,parameter1:string,parameter2:string,parameter3:string,
                 parameter4:string){
    this.afs.doc(`sesion/${userId}`).set({ // FUNCION QUE CREA UN USUARIO EN LA BASE DE DATOS
      nombre: parameter1,
      patern: parameter2,
      matern: parameter3,
      email: parameter4
      }).then(() => {
        this.alertas.alertCreatUser();
        console.log('Usuario creado');
      }).catch(err =>{
        console.log('OOPS hubo un error al crear el usuario',err);
      });
      //SI EL USUARIO ES CREADO DOS VECES, LO QUE SUCEDERÁ ES QUE SE
      //SOBREESCRIBIRÁN TODOS LOS DATOS ACTUALES QUE EXISTAN EN
      //LA LIGA `registro/${userId}` & LOS DATOS ACTUALES SE PERDERÁN
  }
}
