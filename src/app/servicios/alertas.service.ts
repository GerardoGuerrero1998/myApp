import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(public alertController:AlertController) { }

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: "¡Alerta!",
      subHeader: "Bienvenidos a la seccion de actividades en casa",
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  async alert(mensaje: string) {
    const alert = await this.alertController.create({
      header: "¡Atencion!",
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertCreatUser() {
    const alert = await this.alertController.create({
      header: "¡Alerta!",
      subHeader: "Creando usuario",
      message: "Disfruta de tu nueva cuenta",
      buttons: ['OK']
    });
    await alert.present();
  }

  async salir() {
    const alert = await this.alertController.create({
      header: "¡Vuelva pronto!",
      subHeader: "Su sesion ha expirado",
      buttons: ['OK']
    });
    await alert.present();
  }

  async revisarDatos() {
    const alert = await this.alertController.create({
      header: "¡Verifica tus datos!",
      subHeader: "Puede que tus datos sean erroneos",
      buttons: ['OK']
    });
    await alert.present();
  }

  async faltanDatos() {
    const alert = await this.alertController.create({
      header: "¡Faltan algunos datos!",
      subHeader: "Falta el llenado de todos los campos",
      buttons: ['OK']
    });
    await alert.present();
  }

  async alertFail() {
    const alert = await this.alertController.create({
      header: "Ya existe una cuenta con ese correo",
      subHeader: "Verifique su bandeja de email",
      buttons: ['OK']
    });
    await alert.present();
  }
}
