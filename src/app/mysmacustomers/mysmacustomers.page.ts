import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ToastServiceService } from '../service/toast-service.service';
import { ModalController } from '@ionic/angular';
import { MysmacustomermodalPage } from '../modal/mysmacustomermodal/mysmacustomermodal.page';
@Component({
  selector: 'app-mysmacustomers',
  templateUrl: './mysmacustomers.page.html',
  styleUrls: ['./mysmacustomers.page.scss'],
})
export class MysmacustomersPage implements OnInit {
  getSMAaccountDetail: any;
  userID: string;
  BranchID: string;
  SmaRecovery: any;

  constructor(private modalController:ModalController,private loader:ToastServiceService,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    this.userID = localStorage.getItem('userID');
    this.BranchID = localStorage.getItem('branchID');
    this.getSMAaccount();
    this.getsmarecAmount();
  }

  getsmarecAmount() {
    var branchid = localStorage.getItem('branchID');
      var userType = localStorage.getItem('userType');
      var userid = localStorage.getItem('userID');
    // $scope.showspin();
    // this.loader.presentLoading('');
    this.Apiservice.getsmaRecoveryAmount(userid,userType,branchid).then((response:any)=> {
        // $scope.hidespin();
        console.log(response);
        // this.loader.dismissLoading();
        var result = response.data;
      result = JSON.parse(result);
      result = JSON.parse(result);
        // console.log(JSON.parse(response));
        // response = JSON.parse(response);
        this.SmaRecovery = result;
        console.log(this.SmaRecovery);


      })
      // .error((response)=> {
      //   // $scope.hidespin();
      //   console.log(response);
      // });
  }

  getSMAaccount(){
  let BranchID = this.BranchID;
  let UserID = this.userID ;
      this.Apiservice.GetSMAAcount(UserID,BranchID).then((res:any)=>{
        // console.log(JSON.parse((res)));
        var result = res.data
       result = JSON.parse(result);
       result = JSON.parse(result);
        this.getSMAaccountDetail = result;
        console.log(this.getSMAaccountDetail)
      });
  }
  async customerActionModal(item) {
    const modal = await this.modalController.create({
    component: MysmacustomermodalPage,
    componentProps: { Data: item }
    });
    return await modal.present();
   }
}
