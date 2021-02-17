import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AlertasService } from 'src/app/servicios/alertas.service';

@Component({
  selector: 'app-actvs',
  templateUrl: './actvs.page.html',
  styleUrls: ['./actvs.page.scss'],
})
export class ActvsPage implements OnInit {

  mensaje ="Descubre actividades para realizar en esta cuarentena";
  constructor(public iab:InAppBrowser,
              public alertas:AlertasService) { }

  ngOnInit() {
    this.alertas.presentAlert(this.mensaje);
  }

  trabajo(){
    const browser = this.iab.create('https://www.gob.mx/trabajoencasa','_self'); 
  }

  open(){
    const browser = this.iab.create('https://www.who.int/es','_self'); 
  }

  open1(){
    const browser = this.iab.create('https://www.ictiva.com','_self'); 
  }

  opc1(){
    const browser = this.iab.create('https://www.youtube.com/user/gymvirtual','_self'); 
  }

  opc2(){
    const browser = this.iab.create('https://www.youtube.com/user/EntrenaSergioPeinado','_self'); 
  }

  opc3(){
    const browser = this.iab.create('https://www.youtube.com/user/turbofausto','_self'); 
  }

  video(){
    const browser = this.iab.create('https://www.moneyexpert.com/es/internet/las-mejores-plataformas-para-ver-series/','_self'); 
  }

  video1(){
    const browser = this.iab.create('https://www.netflix.com/mx/','_self'); 
  }

  video2(){
    const browser = this.iab.create('https://www.primevideo.com/?ref_=dvm_pds_amz_MX_kc_s_g|c_388716718779_m_kAa1gDO1-dc_s__','_self'); 
  }

  video3(){
    const browser = this.iab.create('https://www.primevideo.com/gp/video/offers?benefitId=hbomx&ref=dvm_pds_chn_mx_dc_c_g|c_386441483952_m_dhpra9tA-dc_s__','_self'); 
  }

  music(){
    const browser = this.iab.create('https://www.lasexta.com/tecnologia-tecnoxplora/internet/cinco-webs-ver-conciertos-tus-grupos-favoritos-riguroso-directo_2013122457f77fb10cf2fd8cc6aa7ab2.html','_self'); 
  }

  musica1(){
    const browser = this.iab.create('https://www.youtube.com/musicpremium','_self'); 
  }

  musica2(){
    const browser = this.iab.create('https://www.amazon.com.mx/music/unlimited?ref_=dmm_acq_marin_d_bra%7Cc_431388231273_m_GeGws5JH-dc_s__','_self'); 
  }

  musica3(){
    const browser = this.iab.create('https://www.spotify.com/mx/premium/?utm_source=mx-es_brand_contextual-desktop_text&utm_medium=paidsearch&utm_campaign=alwayson_latam_mx_premiumbusiness_core_brand+contextual-desktop+text+exact+mx-es+google&gclid=CjwKCAjw4871BRAjEiwAbxXi29plenFWiAl4nMETRUiHyGozDrkmj2ZOP9AM7mQ4Pky_NqokQAhQxBoCc14QAvD_BwE&gclsrc=aw.ds','_self'); 
  }

  videojuegos(){
    const browser = this.iab.create('https://www.youtube.com/channel/UCVygkLr4iqk88W1jFdXM8fg','_self'); 
  }

  descargar(){
    const browser = this.iab.create('https://mega.nz/folder/UpsGHC4b#Eyp-2mhz1kyo7743flnxbQ','_self'); 
  }
}
