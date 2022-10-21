import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoadingController,AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {
  loading: any;
  constructor(public alertCtrl:AlertController,public loadingController: LoadingController,public toastController: ToastController) { }
  async presentToast(message) {
    const toast = await this.toastController.create({
      cssClass: 'customToast',
      message: message,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }
  async presentLoading(message) {
    this.loading = await this.loadingController.create({
     spinner: null,
     cssClass: 'customToast1',
     message:'<ion-spinner name="lines-small"></ion-spinner>',
   });
   await this.loading.present();
 }
 async dismissLoading(){
  this.loading.dismiss();
  this.loadingController.dismiss();

}
}
