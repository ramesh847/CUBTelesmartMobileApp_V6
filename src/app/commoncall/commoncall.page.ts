import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../service/api-service.service';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';
import { ModalController } from '@ionic/angular';
// import { MyassigncallmodalPage } from '../modal/myassigncallmodal/myassigncallmodal.page';
import { MyfollowcallmodalPage } from '../modal/myfollowcallmodal/myfollowcallmodal.page';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-commoncall',
  templateUrl: './commoncall.page.html',
  styleUrls: ['./commoncall.page.scss'],
  providers: [
    DatePipe],
})
export class CommoncallPage implements OnInit {

    // customers: any = [];
    purpose: any = [];
    search: any = {};
    commoncallsdataonload: any = [];
    firstWords: any[];
    purposename: any;
    username: any;
    commoncallsdata :any = [];
    loaddata:boolean=false;
    date: any;
    date_a: any;
    followupcallsdata :any = [];

    constructor(private Apiservice: ApiServiceService, private filterPipe: FilterPipe, private datepipe: DatePipe,
      private modalController: ModalController) { }
   
    ngOnInit() {
   
      console.log(this.search)
      this.getCommoncallsonload();
      // this.getpurposeold();
   
    }
   
    getmyfollowupcallsdata() {
      console.log("getmyfollowupcallsdata");
      this.myfollowupcallsdata();
   
      this.getInsuranceType();
      this.getInsuranceSource();
      this.getInsurancedata();
      this.search.CUSTOMER_ID = "";
      this.search.PURPOSE = "";
    }

    getCommoncallsonload() {
      var branchid = window.localStorage['branchID'];
      var calltype = "T";
      var custid = " ";
     
      this.loaddata = true;
      // var fromdate = new Date();
      // // fromdate = $filter("date")(new Date(), 'dd-MM-yyyy');
      // //   todate = $filter("date")(new Date(), 'dd-MM-yyyy');
      //   fromdate = this.datepipe.transform(fromdate, 'dd.MM.yyyy');
      //   var todate = new Date();
      //   todate = this.datepipe.transform(todate, 'dd.MM.yyyy')
        // console.log(fromdate , todate);
      //callAPI.getcomcalls(userid, branchid, calltype, custid, name)
      this.Apiservice.getcomcalls(1, branchid, calltype, custid).then(response => {
    // console.log(response);
    var data = JSON.stringify(response.data);
    // result = JSON.parse(result);
    
    this.commoncallsdataonload = JSON.parse(data);
    this.commoncallsdataonload = JSON.parse(this.commoncallsdataonload);
    this.commoncallsdataonload = JSON.parse(this.commoncallsdataonload);


    // this.commoncallsdataonload = result;
    console.log(this.commoncallsdataonload)
    var firstname = [];
    this.firstWords = [];

    for (var i = 0; i < this.commoncallsdataonload.length; i++) {
      firstname = this.commoncallsdataonload[i].CustomerName.split(" ");
      this.firstWords.push(firstname[0]);
      this.commoncallsdataonload[i].firstname = this.firstWords[i];
      this.date = this.commoncallsdataonload[i].ToCallDate.split('/');
      this.date_a = this.date[1]+'/'+this.date[0]+'/'+this.date[2];
      this.commoncallsdataonload[i].tofiltercalldate = this.date_a;
    }
    // this.datatofilter = this.commoncallsdataonload;
      });
    }
  


    myfollowupcallsdata() {
   
   
      this.search.CUSTOMER_ID = "";
      this.search.PURPOSE = "";
      const branchid = window.localStorage.branchID;
      const usertype = window.localStorage.userType;
      const userid = window.localStorage.userID;
      console.log(userid);
      const Customerid = 'null';
      const CustomerName = 'null';
      const Purpose = 'null';
      const mode = 'T';
      const cat = null;
      // this.showspin();
      this.Apiservice.myfollowupcallsdata(branchid, userid, usertype, Customerid, CustomerName, Purpose, mode).then((res: any) => {
        console.log(JSON.parse((res)));
        var data = JSON.stringify(res.data);
        // result = JSON.parse(result);
        
        this.followupcallsdata = JSON.parse(data);
        this.followupcallsdata = JSON.parse(this.followupcallsdata);
        this.followupcallsdata = JSON.parse(this.followupcallsdata);
          // this.$broadcast('scroll.refreshComplete');
          // this.followupcallsdata = JSON.parse(res);
     
          this.firstWords = [];
   
          var firstname = [];
   
          for (let i = 0; i < this.followupcallsdata.length; i++) {
   
            firstname = this.followupcallsdata[i].CUSTOMER_NAME.split(" ");
   
            this.firstWords.push(firstname[0]);
            this.followupcallsdata[i].firstname = this.firstWords[i];
            this.purposename = this.followupcallsdata[i].PURPOSE;
            console.log(this.purposename);
            if (this.followupcallsdata[i].purpose_id == 11 || this.followupcallsdata[i].purpose_id == 12 || this.followupcallsdata[i].purpose_id == 13) {
              var sample_test = this.followupcallsdata[i].PURPOSE;
              this.followupcallsdata[i].PURPOSETEST = sample_test;
              this.followupcallsdata[i].PURPOSE = "Lead Generation";
            }
          }
          this.username = window.localStorage['userName'];
        });
   
    }
    getInsuranceType() {
   
    }
    getInsuranceSource() {
   
    }
    getInsurancedata() {
   
    }
    getpurposeold() {
      this.Apiservice.getpurposeold().then((res: any) => {
        console.log(JSON.parse((res)));
        this.purpose = JSON.parse(res);
   
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
    
        if(purpose == 717){
          this.getcalloutcome1();
        }else{
          this.getcalloutcome();
        }
        if(custId ==""){
          custId = "null";
        }
        if(purpose ==""){
          purpose = "null";
        }
       //  this.showspin();
        this.Apiservice.myfollowupcallsdata(branchid, userid, usertype, custId, CustomerName, Purpose, mode).then((response: any) => {
            // this.$broadcast('scroll.refreshComplete');
            // response = JSON.parse(response);
            // console.log(response);
            var data = JSON.stringify(response.data);
            // result = JSON.parse(result);
            
            this.followupcallsdata = JSON.parse(data);
            this.followupcallsdata = JSON.parse(this.followupcallsdata);
            this.followupcallsdata = JSON.parse(this.followupcallsdata);
            // this.followupcallsdata = response;
            this.firstWords = [];
    
            var firstname = [];
    
            for (var i = 0; i < this.followupcallsdata.length; i++) {
    
              firstname = this.followupcallsdata[i].CUSTOMER_NAME.split(" ");
    
              this.firstWords.push(firstname[0]);
              this.followupcallsdata[i].firstname = this.firstWords[i];
              this.purposename = this.followupcallsdata[i].PURPOSE;
              console.log(this.purposename);
              if (this.followupcallsdata[i].purpose_id == 11 || this.followupcallsdata[i].purpose_id == 12 || this.followupcallsdata[i].purpose_id == 13) {
                var sample_test = this.followupcallsdata[i].PURPOSE;
                this.followupcallsdata[i].PURPOSETEST = sample_test;
                this.followupcallsdata[i].PURPOSE = "Lead Generation";
              }
             
            }
    
            this.username = window.localStorage['userName'];
            // $ionicLoading.hide();
    
          })
     
    }
    async myfollowupActionModal(item) {
      console.log(item);
      const modal = await this.modalController.create({
        component: MyfollowcallmodalPage,
        componentProps: { Data: item }
      });
      return await modal.present();
    }
    getcalloutcome1() {
      // this.showspin();
    
      this.Apiservice.getcalloutcome1().then((res: any) => {
          console.log(res);
          res = JSON.parse(res);
          // this.callOutCome = res;
          // this.hidespin();
    
        })
    }
   
   getcalloutcome() {
      // this.showspin();
      // this.Apiservice.getcalloutcomenew().then((res: any) => {
      //     console.log(res);
      //     res = JSON.parse(res);
      //     // this.callOutCome = res;
      //     // this.hidespin();
   
      //   })
    }
   
    
  }
   
   