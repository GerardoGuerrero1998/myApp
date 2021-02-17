import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/firebase/login.service';
import { AlertasService } from '../../servicios/alertas.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit {
  access = {
    username: '',
    email:'',
    password:''
  }
  constructor(private auth: LoginService, private alertas: AlertasService) { }

  ngOnInit() {
  }

  signIn(){
    if(this.access.password != '' && this.access.email != ''){
        this.auth.signIn(this.access.email,this.access.password);
        // this.access.password = '';
        //console.log(this.access.username,this.access.email);
    } else {
      this.alertas.revisarDatos();
      console.log('favor de ingresar datos');
    }
  }

  /*Actualiza los datos creados en firebase, agregando el username
  updateData(){
    this.update.updateDocument('userId',this.access.username);
  }*/
}
