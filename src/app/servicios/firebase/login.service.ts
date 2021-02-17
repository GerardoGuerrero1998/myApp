import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../../../environments/environment';
import { NavController } from '@ionic/angular';
import { AlertasService } from '../alertas.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private navCtrl:NavController,public alertas:AlertasService) { 
    firebase.initializeApp(environment.firebase);
   }


  signUp(email:string,password:string){
    console.log('entre');
    firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
      this.navCtrl.navigateForward('home');
    }).catch(
      (error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      //Print errors here
      this.alertas.alertFail();
      console.log(error.code);
      console.log(error.message);      
    });
  }

  signIn(email:string,password:string){
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      this.navCtrl.navigateForward('home');
    }).catch(
      (error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      //print errors here
      console.log(error.code);
      console.log(error.message);
    });
  }

  signOut(){
  firebase.auth().signOut().then(()=> {
    // Sign-out successful.
    console.log('cerre la sesion correctamente');
    this.navCtrl.navigateForward('login');
    }).catch(function(error) {
    // An error happened.
    console.log(error,'ooops hubo un error');
    });
  }
}