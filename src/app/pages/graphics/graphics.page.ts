import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LoadingController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.page.html',
  styleUrls: ['./graphics.page.scss'],
})
export class GraphicsPage implements OnInit {

  constructor(public iab:InAppBrowser,private loadingCtrl : LoadingController, private popOverController:PopoverController) { }

  ngOnInit() {
    this.presentLoad();
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  documento(){
    const browser = this.iab.create('https://docs.google.com/spreadsheets/d/1M0SH-Dqgldc2X_9twk462TAp3I0pkNEUQ_zvGQ1Ix6s/edit?usp=sharing','_self');
  }

  documento1(){
    const browser = this.iab.create('https://coronavirus.gob.mx/datos/','_self');
  }

  async presentLoad() {
    const loading = await this.loadingCtrl.create({
      mode: "ios",
      message: 'Cargando datos...', 
      spinner: "dots",
      duration: 2000 
    });
    await loading.present();  
  }
}
