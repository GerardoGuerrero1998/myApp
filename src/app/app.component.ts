import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home-sharp'
    },
    {
      title: 'Higiene',
      url: '/higiene',
      icon: 'medkit-sharp'
    },
    {
        title: 'Mapas',
        url: '/maps',
        icon: 'location-sharp'
    },
    {
      title: 'Graficas',
      url: '/graphics',
      icon: 'bar-chart-sharp'
    },
    {
        title: 'Actividades',
        url: '/actvs',
        icon: 'book-sharp'
    },
  ]


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

   ngOnInit(){
  }
}
