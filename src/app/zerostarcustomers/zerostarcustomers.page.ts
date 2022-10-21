import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
// import { ModalmycustomerPage } from '../modal/modalmycustomer/modalmycustomer.page';
import { MyzerocustomermodalPage } from '../modal/myzerocustomermodal/myzerocustomermodal.page';
import { ModalController } from '@ionic/angular';
import { ToastServiceService } from '../service/toast-service.service';
import { EndcallmodalPage } from '../modal/myzerocustomermodal/endcallmodal/endcallmodal.page';
@Component({
  selector: 'app-zerostarcustomers',
  templateUrl: './zerostarcustomers.page.html',
  styleUrls: ['./zerostarcustomers.page.scss'],
})
export class ZerostarcustomersPage implements OnInit {
  getZeroCusDetails: any;
  getZeroCusCount: any;
  userID: string;
  BranchID: string;
  custcount: any;
  firstWords: any[];
  search = {};
  cusCatogory: any;
  constructor(private loader:ToastServiceService,private modalController:ModalController,private Apiservice:ApiServiceService) {
    
   }

  ngOnInit() {
    this.userID = localStorage.getItem('userID');
    this.BranchID = localStorage.getItem('branchID');
    // let UserID = "2606"; 
    this.getZeroStarCustomerDetails();
    this.GetTotalBusinessExisiting(this.userID);
    this.getTotalBusinessNew(this.userID);
    this.getCuscatogorydropdown();
  }

  getZeroStarCustomerDetails(){
    // this.loader.presentLoading('');
    let Customerid = null;
  let BranchID = this.BranchID;
  let UserID = this.userID;
  let UserType = null
  let cat = null;
      this.Apiservice.getZeroStarCustomerDetail(Customerid,BranchID,UserID,UserType,cat).then((res:any)=>{
        // console.log(JSON.parse((res)));
        var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);

        if (response.length > 0) {
          // this.showspin();
          this.loader.dismissLoading();
        } else {
          // this.hidespin();
          this.loader.dismissLoading();
        }
        for (var i = 0; i < response.length; i++) {
          response[i].Total1 = parseFloat(response[i].Total1).toFixed(2);
          console.log(response[i]);
          if (i == response.length - 1) {
            // this.hidespin();
            this.loader.dismissLoading();
          }
        }

        this.getZeroCusDetails = response;
        this.getZeroCusCount = this.getZeroCusDetails.length;
        console.log(this.getZeroCusDetails)

        this.firstWords = [];

        var firstname = [];

        // this.showspin();
        for (i = 0; i < this.getZeroCusDetails.length; i++) {

          firstname = this.getZeroCusDetails[i].CustomerName.split(" ");
          this.firstWords.push(firstname[0]);
          this.getZeroCusDetails[i].firstname = this.firstWords[i];

          if (this.getZeroCusDetails.length - 1 === i) {
            console.log(i);
            console.log('loop ends');
            //custcount();
            // this.hidespin();
            this.loader.dismissLoading();
          }

        }

        if (this.getZeroCusDetails.length == 0) {
          // this.hidespin();
          //custcount();
          this.loader.dismissLoading();
        }

        if (this.getZeroCusDetails == undefined) {
          // this.hidespin();
          // this.show = true;
          //custcount();
          this.loader.dismissLoading();
        }
        console.log(this.getZeroCusDetails);

      })
      //   this.getZeroCusDetails = JSON.parse(res);
      //   this.getZeroCusCount = this.getZeroCusDetails.length;
      //   this.loader.dismissLoading();
      // });
  }

  searchMycustomers(type, customerid,cat){
    console.log(type);
    console.log(customerid);
    // this.showspin();
    this.loader.presentLoading('');
    var Customerid = customerid;
    if (Customerid == 'undefined' || Customerid == undefined || Customerid == "") {
      Customerid = null;
    }
    if (type == "" || type == undefined) {
      type = null;
    }
    if (cat == 'undefined' || cat == undefined || cat == "") {
      cat = null;
    }
    var BranchID = window.localStorage['branchID'];
    var UserType = window.localStorage['userType'];
    var UserID = window.localStorage['userID'];
    // this.showspin();
    this.Apiservice.getZeroStarCustomerDetail(Customerid, BranchID, UserID, type,cat).then((res:any)=> {

      var response = res.data;
      response = JSON.parse(response);
      response = JSON.parse(response);

        if (response.length > 0) {
          // this.showspin();
          this.loader.dismissLoading();
        } else {
          // this.hidespin();
          this.loader.dismissLoading();
        }
        for (var i = 0; i < response.length; i++) {
          response[i].Total1 = parseFloat(response[i].Total1).toFixed(2);
          console.log(response[i]);
          if (i == response.length - 1) {
            // this.hidespin();
            this.loader.dismissLoading();
          }
        }

        this.getZeroCusDetails = response;
        this.getZeroCusCount = this.getZeroCusDetails.length;
        console.log(this.getZeroCusDetails)

        this.firstWords = [];

        var firstname = [];

        // this.showspin();
        for (i = 0; i < this.getZeroCusDetails.length; i++) {

          firstname = this.getZeroCusDetails[i].CustomerName.split(" ");
          this.firstWords.push(firstname[0]);
          this.getZeroCusDetails[i].firstname = this.firstWords[i];

          if (this.getZeroCusDetails.length - 1 === i) {
            console.log(i);
            console.log('loop ends');
            //custcount();
            // this.hidespin();
            this.loader.dismissLoading();
          }

        }

        if (this.getZeroCusDetails.length == 0) {
          // this.hidespin();
          //custcount();
          this.loader.dismissLoading();
        }

        if (this.getZeroCusDetails == undefined) {
          // this.hidespin();
          // this.show = true;
          //custcount();
          this.loader.dismissLoading();
        }
        console.log(this.getZeroCusDetails);

      })
      // .error(function (response) {
      //   this.hidespin();
      //   this.$broadcast('scroll.refreshComplete');
      //   console.log(response);
      //   //custcount();
      // });



  }

  getCuscatogorydropdown(){
    this.Apiservice.getCustomerCategorydropdown().then((res:any)=>{
      // console.log(JSON.parse((res)));
      var response = res.data;
      response = JSON.parse(response);
      response = JSON.parse(response);
      this.cusCatogory = response;
    });
  }

  GetTotalBusinessExisiting(UserID){
this.Apiservice.GetTotalBusinessExisitingZero(UserID).then(res=>{
  console.log(res)
});
  }

  async customerActionModal(item) {
    const modal = await this.modalController.create({
    component: MyzerocustomermodalPage,
    componentProps: { Data: item }
    });
    return await modal.present();
   }

  getTotalBusinessNew(UserID){
this.Apiservice.GetTotalBusinessNewZero(UserID).then(res=>{
  console.log(res)
})
  }



 async endcallmodel(items){
    const modal = await this.modalController.create({
      component: EndcallmodalPage,
      componentProps: { Data: items }
      });
      return await modal.present();
  }


}
