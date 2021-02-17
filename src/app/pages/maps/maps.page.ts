import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  constructor(public iab:InAppBrowser) { }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  map(){
    const browser = this.iab.create('https://www.cursosgis.com/mapas-del-coronavirus-covid-19/','_self');
  }

  open(){
    const browser = this.iab.create('https://covid19.who.int/region/amro/country/mx','_self'); // 'system, seria para abrirlo desde el navegador'
  }

  open1(){
    const browser = this.iab.create('https://www.bbc.com/mundo/amp/noticias-51705060','_self');
  }

  open2(){
    const browser = this.iab.create('https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6','_self'); 
  }

}
