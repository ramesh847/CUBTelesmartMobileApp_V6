import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  constructor(private alert:AlertController) { }

  async presentAlert(message,submessage) {
    const alert = await this.alert.create({
      header: message,
      cssClass:'alertHeader',
      // subHeader: 'Subtitle',
      message: submessage,
      buttons: [{ text     : 'Okay',
     
      
      // handler: () => {
      //     console.log('Confirm Logout: ok');
      // }
    },]
    });

    await alert.present();
  }
}
