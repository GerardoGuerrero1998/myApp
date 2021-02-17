import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertasService } from '../servicios/alertas.service';
import { LoginService } from '../servicios/firebase/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public folder: string;
  mensaje ="Desliza para descubrir las diferentes secciones que tenemos aqui para ti →→→";


  constructor(private activatedRoute: ActivatedRoute, public alertas:AlertasService,
              private auth:LoginService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.alertas.alert(this.mensaje);
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  signOut(){
    this.alertas.salir();
    this.auth.signOut();
  }
}
