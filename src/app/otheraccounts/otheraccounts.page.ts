import { Component, OnInit } from '@angular/core';
// import { threadId } from 'worker_threads';
import { ApiServiceService } from '../service/api-service.service';
import { ToastServiceService } from '../service/toast-service.service';
import { OtheraccountmodalPage } from '../modal/otheraccountmodal/otheraccountmodal.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-otheraccounts',
  templateUrl: './otheraccounts.page.html',
  styleUrls: ['./otheraccounts.page.scss'],
})
export class OtheraccountsPage implements OnInit {
  otherAccountList: any;
  otherAccountCount: any;
  userid: string;
  userType: string;
  branchid: any;

  constructor(private modalController:ModalController,private loader:ToastServiceService,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    this.branchid =localStorage.getItem('branchID');
     this.userid = localStorage.getItem('userID');
     this.userType = localStorage.getItem('userType');

    this.getOtherAccount();
  }
  async customerActionModal(item) {
    const modal = await this.modalController.create({
    component: OtheraccountmodalPage,
    componentProps: { Data: item }
    });
    return await modal.present();
   }
  getOtherAccount() {
    // this.showspin();
    this.loader.presentLoading('');
    this.Apiservice.getOtherAccounts(this.userid,this.branchid).then((response:any)=>{
      // this.hidespin();
      console.log(response);
      var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
      this.otherAccountList = result;
      this.otherAccountCount = this.otherAccountList.length;
      this.loader.dismissLoading();

    });
      // .error(function(response) {
      //   this.hidespin();
      //   console.log(response);
      // });
  }
}
