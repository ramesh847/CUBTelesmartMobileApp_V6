import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ToastServiceService } from '../service/toast-service.service';
import { MyNPAcustomermodalPage } from '../modal/my-npacustomermodal/my-npacustomermodal.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-mynpacustomers',
  templateUrl: './mynpacustomers.page.html',
  styleUrls: ['./mynpacustomers.page.scss'],
})
export class MynpacustomersPage implements OnInit {
  NPAAccountList: any;
  branchid: string;
  userType: string;
  userid: string;
  NpaRecoveryList: any;
  NpaRecoveryCount: any;

  constructor(private modalController:ModalController,private loader:ToastServiceService,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    this.branchid = localStorage.getItem('branchID');
       this.userType = localStorage.getItem('userType');
       this.userid = localStorage.getItem('userID');
    this.getNpaAccount();
    this.getNpaRecAmount();
  }

  async customerActionModal(item) {
    const modal = await this.modalController.create({
    component: MyNPAcustomermodalPage,
    componentProps: { Data: item }
    });
    return await modal.present();
   }


  getNpaRecAmount() {
    // $scope.showspin();
    // this.loader.presentLoading('');
    var mode = 'S';
    this.Apiservice.getNPARecoveryAmount(this.userid, mode, this.branchid)
      .then((response:any)=> {
        // $scope.hidespin();
        this.loader.dismissLoading();
        var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
        this.NpaRecoveryList = result;
        this.NpaRecoveryCount = this.NpaRecoveryList.length;
        console.log(this.NpaRecoveryCount);


      })
      // .error(function(response) {
      //   $scope.hidespin();
      //   console.log(response);
      // });
  }

  getNpaAccount() {
    // $scope.showspin();
    // this.loader.presentLoading('');
    var search = 'N';
    // var userType = window.localStorage['userType'];
    var branchid = this.branchid;
      var userType = this.userType;
      var userid = this.userid;
    //var mode = 'S';
    this.Apiservice.getNPAAccount(search,branchid,userid,userType).then((response:any)=>{
        // $scope.hidespin();
        this.loader.dismissLoading();
        response = JSON.parse(response);
        this.NPAAccountList = response;
        console.log(this.NPAAccountList);
        //$scope.smaAccountCount = $scope.smaAccountList.length;


      })
      // .error(function(response) {
      //   $scope.hidespin();
      //   console.log(response);
      // });
  }


}
