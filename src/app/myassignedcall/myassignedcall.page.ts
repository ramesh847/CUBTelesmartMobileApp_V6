import { Component, OnInit } from '@angular/core';
import { ApiServiceService} from './../service/api-service.service';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';
import { ModalController } from '@ionic/angular';
// import { MyassigncallmPage } from '../modal/myassigncall/myassigncall.page';
import { MyassigncallmodalPage } from '../modal/myassigncallmodal/myassigncallmodal.page';
import { MyfollowupcallconnectPage } from './../modal/myfollowupcallconnect/myfollowupcallconnect.page'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-myassignedcall',
  templateUrl: './myassignedcall.page.html',
  styleUrls: ['./myassignedcall.page.scss'],
})
export class MyassignedcallPage implements OnInit {
  customers: any = [];
  purpose: any = [];
  search : any = {};
  firstWords: any[];
 purposename: any;
 username: any;
  constructor(private Apiservice: ApiServiceService, private filterPipe: FilterPipe,
    private modalController: ModalController ) { }

  ngOnInit() {
  
    console.log(this.search)
  this.getAssignCallData();
  this.getpurpose();
 
  }

  getAssignCallData(){
    this.myassignedcallsdata();
    this.search.CBSCustomerID = "";
    this.search.Purpose = "";
  }
  getpurpose() {
    this.Apiservice.getpurpose().then(res=>{
      console.log(res);
      var data = JSON.stringify(res.data);
      this.purpose = JSON.parse(data);
      this.purpose = JSON.parse(this.purpose);
      this.purpose = JSON.parse(this.purpose);
      // this.purpose = JSON.parse(this.purpose);
      
    });
  }
  myassignedcallsdata() {
    // const hostLink = httpLinkManager.getnewLocalLink();
    const branchid = window.localStorage.branchID;
    const usertype = window.localStorage.userType;
    const userid = window.localStorage.userID;
    console.log(userid);
    const Customerid = 'null';
    const CustomerName = 'null';
    const Purpose = 'null';
    const mode = 'T';
    const cat = null;
        this.Apiservice.myassignedcallsdata(branchid, userid, usertype, Customerid, CustomerName, Purpose, mode).then((res: any)=>{
        console.log(res);
          var data = JSON.stringify(res.data);
          console.log(data);
          this.customers = JSON.parse(data);
          this.customers = JSON.parse(this.customers);
          this.customers = JSON.parse(this.customers);
         
          // console.log(JSON.parse((res)));
          // this.customers = JSON.parse(res);
        });


  }
  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  custId(custId, purpose) {
    console.log(custId, purpose)
   var branchid = window.localStorage['branchID'];
   var usertype = window.localStorage['userType'];
   var userid = window.localStorage['userID'];
   var Customerid = "null";
   var CustomerName = "null";
   if(purpose ==undefined) {
     var Purpose = "null";
   }else {
     Purpose = purpose;
   }
  
   var mode = "T";
  
      console.log("inside searchAllFollowUpCalls");
      console.log(purpose);
      console.log(custId);
  
      // if(purpose == 717){
      //   this.getcalloutcome1();
      // }else{
      //   this.getcalloutcome();
      // }
      if(custId ==""){
        custId = "null";
      }
      if(purpose ==""){
        purpose = "null";
      }
     //  this.showspin();
      this.Apiservice.myassignedcallsdata(branchid, userid, usertype, custId, CustomerName, Purpose, mode).then((response: any) => {
          // this.$broadcast('scroll.refreshComplete');
          // response = JSON.parse(response);
          // console.log(response);
          var user = JSON.stringify(response.data);
          this.customers = JSON.parse(user);
          this.customers = JSON.parse(this.customers);
          this.customers = JSON.parse(this.customers);
          // this.customers = response;
          this.firstWords = [];
  
          var firstname = [];
  
          for (var i = 0; i < this.customers.length; i++) {
  
            firstname = this.customers[i].CUSTOMER_NAME.split(" ");
  
            this.firstWords.push(firstname[0]);
            this.customers[i].firstname = this.firstWords[i];
            this.purposename = this.customers[i].PURPOSE;
            console.log(this.purposename);
            if (this.customers[i].purpose_id == 11 || this.customers[i].purpose_id == 12 || this.customers[i].purpose_id == 13) {
              var sample_test = this.customers[i].PURPOSE;
              this.customers[i].PURPOSETEST = sample_test;
              this.customers[i].PURPOSE = "Lead Generation";
            }
           
          }
  
          this.username = window.localStorage['userName'];
          // $ionicLoading.hide();
  
        })
   
  }
  async openassignedconnectModel(item) {
    const modal = await this.modalController.create({
      component: MyfollowupcallconnectPage,
      componentProps: { Data: item }
      });
      return await modal.present();
     }
  

  async myassignActionModal(item) {
    const modal = await this.modalController.create({
    component: MyassigncallmodalPage,
    componentProps: { Data: item }
    });
    return await modal.present();
   }
}

