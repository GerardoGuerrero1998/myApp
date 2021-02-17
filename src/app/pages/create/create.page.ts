import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/firebase/login.service';
import { AlertasService } from 'src/app/servicios/alertas.service';
import { CreateService } from '../../servicios/firebase/create.service';
import { ReadService } from '../../servicios/firebase/read.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  user = {
    name: '',
    patern: '',
    matern: '',
    email:'',
    password:'',
    userId:  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }


  enter:any=[];

  colectionData:any;
  documentData:any;
  filteredData:any;

  constructor(private auth: LoginService, public alertas:AlertasService,
              private create: CreateService, private read: ReadService) { }

  ngOnInit() {
    //Obtiene toda la coleccion de usuarios de nuestra base de datos
    this.read.getCollection().subscribe((res)=>{
      this.colectionData = res;
      console.log(this.colectionData);
    });

    //Obtiene solamente el documento solicitado de la base de datos
    this.read.getDocument(this.user.userId).subscribe((res)=>{
      this.documentData = res;
      console.log(this.documentData);
      
    });

    //Obtiene todos los documentos con el mismo id
    this.read.getDocumentWithFilter(this.user.userId).subscribe((res)=>{
      this.filteredData = res;
      console.log(this.filteredData);
      
    });
  }

  signUp(){
    if(this.user.password != '' && this.user.email != ''){
      this.auth.signUp(this.user.email,this.user.password);
      // this.user.password = '';
      //console.log(this.user.name,this.user.patern,this.user.matern,this.user.email);
    } else {
      this.alertas.faltanDatos();
      console.log('Ingresa datos');      
    } 
  }

  //Añade nuevos datos a firebase
  createData(){
    this.create.createDocument(this.user.userId,this.user.name,this.user.patern,this.user.matern,this.user.email);
  }
}
