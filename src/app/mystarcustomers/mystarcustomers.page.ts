import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ModalController } from '@ionic/angular';
import { ModalmycustomerPage } from '../modal/modalmycustomer/modalmycustomer.page';
import { AlertServiceService } from '../service/alert-service.service';
import { ToastServiceService } from '../service/toast-service.service';
@Component({
  selector: 'app-mystarcustomers',
  templateUrl: './mystarcustomers.page.html',
  styleUrls: ['./mystarcustomers.page.scss'],
})
export class MystarcustomersPage implements OnInit {
  getCusDetails: any;
  cusCatogory: any;
  custtotalcount: any;
  userID: string;
  BranchID: string;
  firstWords: any=[];

  constructor(private loader:ToastServiceService,public modalController: ModalController,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    this.userID = localStorage.getItem('userID');
    this.BranchID = localStorage.getItem('branchID');
    // // localStorage.setItem('branchCode','329');
    // localStorage.getItem('userCode');
    // // localStorage.setItem('userName','3442');
    // localStorage.setItem('userType','11');


    // let UserID = "2606";
    this.getCustomerDetails();
    this.getCuscatogorydropdown();
    this.getTotalBusinessExist(this.userID );
    this.getTotalBusinessNew(this.userID )
  }

  search:any = {};
getCustomerDetails(){
  // this.loader.presentLoading('');
  this.search.CBSCustomerID = "";
  this.search.type = "";
  this.search.cat = "";

let Customerid = null;
let BranchID = this.BranchID ;
let UserID = this.userID ;
let UserType = null;
let cat = null;
    this.Apiservice.MyCustomerDetails(Customerid,BranchID,UserID,UserType,cat).then((res:any)=>{
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

      this.getCusDetails = response;
      this.custtotalcount = this.getCusDetails.length;
      console.log(this.getCusDetails)

      this.firstWords = [];

      var firstname = [];
      // this.loader.presentLoading('');
      // this.showspin();
      for (i = 0; i < this.getCusDetails.length; i++) {

        firstname = this.getCusDetails[i].CustomerName.split(" ");
        this.firstWords.push(firstname[0]);
        this.getCusDetails[i].firstname = this.firstWords[i];

        if (this.getCusDetails.length - 1 === i) {
          console.log(i);
          console.log('loop ends');
          //custcount();
          // this.hidespin();
          this.loader.dismissLoading();
        }

      }

      if (this.getCusDetails.length == 0) {
        // this.hidespin();
        this.loader.dismissLoading();
        ///custcount();
      }

      if (this.getCusDetails == undefined) {
        // this.hidespin();
        this.loader.dismissLoading();
        // this.show = true;
        //custcount();
      }
      console.log(this.getCusDetails);


    });
      // this.getCusDetails = JSON.parse(res);
      // this.custtotalcount = this.getCusDetails.length;
      // this.loader.dismissLoading();
    
}


SearchMyCustomer(type,customerid,cat){

  console.log(type);
  console.log(customerid);
  // this.showspin();
  // this.loader.presentLoading('');
  let Customerid = customerid;
  if (Customerid == 'undefined' || Customerid == undefined || Customerid == "") {
    Customerid = null;
  }
  if (type == "") {
    type = null;
  }
  if (cat == 'undefined' || cat == undefined || cat == "") {
    cat = null;
  }

  // let Customerid = event.target.value;
  // let BranchID = "329";
  // let UserID = "2606";
  // let UserType = null;
  // let cat = null;
  var BranchID = this.BranchID;
  // var UserType = window.localStorage['userType'];
  var UserID = this.userID;
      this.Apiservice.MyCustomerDetails(Customerid,BranchID,UserID,type,cat).then((res:any)=>{
        // console.log(JSON.parse((res)));
        console.log(res)
        var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
console.log(res)



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

        this.getCusDetails = response;
        this.custtotalcount = this.getCusDetails.length;
        console.log(this.getCusDetails)

        this.firstWords = [];

        var firstname = [];
        // this.loader.presentLoading('');
        // this.showspin();
        for (i = 0; i < this.getCusDetails.length; i++) {

          firstname = this.getCusDetails[i].CustomerName.split(" ");
          this.firstWords.push(firstname[0]);
          this.getCusDetails[i].firstname = this.firstWords[i];

          if (this.getCusDetails.length - 1 === i) {
            console.log(i);
            console.log('loop ends');
            //custcount();
            // this.hidespin();
            this.loader.dismissLoading();
          }

        }

        if (this.getCusDetails.length == 0) {
          // this.hidespin();
          this.loader.dismissLoading();
          ///custcount();
        }

        if (this.getCusDetails == undefined) {
          // this.hidespin();
          this.loader.dismissLoading();
          // this.show = true;
          //custcount();
        }
        console.log(this.getCusDetails);


      });
  // if(event.target.value == ''){
  //   this.getCustomerDetails();
  // }
}

getCuscatogorydropdown(){
  this.Apiservice.getCustomerCategorydropdown().then((res:any)=>{
    // console.log(JSON.parse((res)));
    console.log(res)
    var result = res.data;
    result = JSON.parse(result);
    result = JSON.parse(result);
    this.cusCatogory = result;
  });
}

getTotalBusinessExist(UserID){
  this.Apiservice.GetTotalBusinessExisiting(UserID).then(res=>{
console.log(res)
  })
}

getTotalBusinessNew(UserID){
  this.Apiservice.GetTotalBusinessNew(UserID).then(res=>{
    console.log(res)
  })
}



doRefresh(event){
  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}
async customerActionModal(item) {
  const modal = await this.modalController.create({
  component: ModalmycustomerPage,
  componentProps: { Data: item }
  });
  return await modal.present();
 }
}
