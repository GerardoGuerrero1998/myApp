import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-higiene',
  templateUrl: './higiene.page.html',
  styleUrls: ['./higiene.page.scss'],
})
export class HigienePage implements OnInit {
  public recomendaciones: any = [
    {
      name: "Quedarse en casa",
      icon: "home-outline",
      info: "La mejor manera de prevenir todas estas enfermedades es quedandose en casa.",
      button: "Medidas de prevencion"
    }, 
    {
      name: "Distanciamiento social",
      icon: "thumbs-down-outline",
      info: "El distanciamiento social es necesario ya que el virus puede contraerse estando en un perimetro de 1.5 mts, asi que a tomar su sana distancia.",
      button: "¿Como lograrlo?"
    },
    {
      name: "Lavarse las manos", 
      icon: "hand-left-outline",
      info: "Lavarse las manos elimina el 99.9% de cualquier virus que nosotros podamos tocar con nuestras manos, el lavado en cada salida se recomienda.",
      button: "¿Como lavarse las manos?"
    },
    {                                  
      name: "Maneras de toser", 
      icon: "thumbs-up-outline",
      info: "El no afectar a las personas que queremos o cualquier persona en particular es importante, aqui te contamos como no contagiar a terceros.",
      button: "Aprende a proteger a los demas"
    },
    {
      name: "No automedicarse", 
      icon: "skull-outline",
      info: "Si no eres medico, deja de automedicarte, podrias contraer alguna enfermedad por falta de conocimientos o prolongar el virus.",
      button: "¿Que puedo tomar?"
    },
    {
      name: "No entrar en panico",
      icon: "sad-outline",
      info: "Si eres de las personas que le tiene miedo al coronavirus, la mejor manera es calmarnos, lo mejor es hacernos la idea de estar calmados y saber en un futuro todo esto pasara.",
      button: "¿Que hacer si tengo los sintomas?"
    }];
  
    public recomendacionesFiltradas: any = this.recomendaciones; 
  
  constructor(public iab:InAppBrowser) { 
  }

  ngOnInit() {
  }
  
  quedarse(name){
    if(name==="Quedarse en casa"){
      const browser = this.iab.create('https://www.youtube.com/watch?v=WzxG6Imp3Cg','_self');
    }else if(name == "Distanciamiento social"){
      const browser = this.iab.create('https://www.youtube.com/watch?v=cssA4naoOHo','_self');
    }else if(name == "Lavarse las manos"){
      const browser = this.iab.create('https://www.youtube.com/watch?v=9dc2P9sCqfs','_self');
    }else if(name == "Maneras de toser"){
      const browser = this.iab.create('https://www.youtube.com/watch?v=gWIhCFo0IvU','_self');
    }else if(name == "No automedicarse"){
      const browser = this.iab.create('https://www.youtube.com/watch?v=pXKD-dxmJEU','_self');
    }else if(name == "No entrar en panico"){
      const browser = this.iab.create('https://www.youtube.com/watch?v=9_QZ2vYX9Fw','_self');
    }
  }
}
