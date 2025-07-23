import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalServices {

  constructor(
    private toastController: ToastController
  ) { }



  async presentToast(msg: string, color: string, icon: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2500,
      position: "bottom",
      color: color,
      icon: icon,
      cssClass: 'text-color'
    });

    await toast.present();
  }

}
