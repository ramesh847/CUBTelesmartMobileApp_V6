import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ApiServiceService } from 'src/app/service/api-service.service';
import * as moment from "moment"; 
import { Pipe, PipeTransform } from "@angular/core";
import { AlertServiceService } from 'src/app/service/alert-service.service';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Pipe({
  name: 'actStatusPipe'
})
@Component({
  selector: 'app-followupleadmodal',
  templateUrl: './followupleadmodal.page.html',
  styleUrls: ['./followupleadmodal.page.scss'],
})
export class FollowupleadmodalPage implements OnInit {
mylead:any={};
firstWords:any = [];
purposeid:any;
puposename:any;
updatedname:any;
  purpose: any;
  customername: any;
  customerid: any;
  mobile: any;
  calltype: any;
  calldate: any;
  accoutnumber: any;
  fullname: any;
  enable: boolean;
  custDetails: any;
  myleadcustomerdata: any;
  firstname1: any;
  myvalue: boolean;
  businessunitlist: any;
  dateToday1: string;
  callOutCome: any;
  productGroup: any;
  product: any;
  premiumPayTerm: any;
  premiumPayMode: any;
  ins_type: any;
  ins_source: any;
  ins_ref: any;
  getusername: any;
  Inlatlng: any;
  distanceInMeter: any;
  endleadtime: string;
  constructor(private geolocation: Geolocation,private modalController:ModalController,private Alertservice:AlertServiceService,private Apiservice:ApiServiceService,private navParams:NavParams) { }

  ngOnInit() {
    let Cusdata = this.navParams.get('Data');
    let showconditionbased = this.navParams.get('model');
    console.log(showconditionbased)
    console.log(Cusdata);
    
    this.getcalloutcome();
    this.getbusinessunit(Cusdata.CUSTOMER_ID);
    this.getPremiumTerm();
    this.getPremiumMode();
    this.getInsuranceSource();
    this.getInsuranceType();
    if(showconditionbased == 'endnavigation'){
      this.endNavigationleads(Cusdata);
    }else if(showconditionbased == "Actionnavigation"){
      this.myleadsmodel(Cusdata);
    }else if(showconditionbased == "Navigationrootleads"){
this.startNavigationrootleads(Cusdata);
console.log(Cusdata)
    }
  }

  getInsuranceType(){
    this.Apiservice.getInsuranceType()
      .then((res:any)=> {
        console.log(response);
        var response = res.data;
  response = JSON.parse(response);
  response = JSON.parse(response);
        this.ins_type = response;
      })
      // .error(function(response) {
      //   this.hidespin();
      //   console.log(response);
      // });
  }
  getInsuranceSource(){
    this.Apiservice.getInsuranceSource()
      .then((res:any)=> {
        var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
        this.ins_source = response;
      })
      // .error(function(response) {
      //   this.hidespin();
      //   console.log(response);
      // });
  }

  getInsurancedata(val){
    console.log(val);
      //Insurance Source
     this.Apiservice.getinsurancedetails('Refferals')
    .then((res:any)=> {
      // this.hidespin();
      console.log(response);
      var response = res.data;
  response = JSON.parse(response);
  response = JSON.parse(response);
      var itemrefarr = response;
      this.ins_ref = itemrefarr.Table;
    })
    // .error(function(response) {
    //   this.hidespin();
    //   console.log(response);
    // });
  
  }
  checkbox(Event){
    console.log(Event);
    
    if(Event == true){
      this.mylead.JointVisit = 'Y';
    }else{
      this.mylead.JointVisit = "N";
    }
    console.log(this.mylead.JointVisit)
  }
  checkusercode(val) {
    var usercode = val;
    var branchid = window.localStorage['branchID'];
    var struserCode = window.localStorage['userCode'];
    // this.showspin();
    // callAPI.getusername(struserCode,usercode, branchid)
    //   .success(function(response) {
    //     this.hidespin();
    //     console.log(response);
    //     response = JSON.parse(response);
    //     if (response == "This User Not in this Branch") {
  
    //       var myPopup = $ionicPopup.show({
    //         template: '<center>Please Enter The Valid Emp Code</center>',
    //         title: 'Warning',
    //         scope: this,
    //         buttons: [{
    //           text: 'OK',
    //           type: 'button button-clear button-assertive'
    //         }]
    //       });
    //       this.data.jointusername = "";
    //       this.data.jointusercode = "";
  
    //     } else {
    //       this.getusername = response;
    //       this.data.jointusername = this.getusername;
    //       console.log(this.getusername)
    //     }
  
    //   })
  
    this.Apiservice.checkJointCode(struserCode,usercode, branchid)
    .then((res:any)=> {
      // this.hidespin();
      // console.log(response);
      // response = JSON.parse(response);
      var response = res.data;
  response = JSON.parse(response);
  response = JSON.parse(response);
      if (response == "This User Not in this Branch") {
  
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Please Enter The Valid Emp Code</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        this.Alertservice.presentAlert('Warning',"Please Enter The Valid Emp Code");
        this.mylead.jointusername = "";
        this.mylead.jointusercode = "";
  
      }else if (response == "Please Enter the Valid User Code") {
  
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Please Enter the Valid User Code</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        this.Alertservice.presentAlert('Warning',"Please Enter the Valid User Code");
        this.mylead.jointusername = "";
        this.mylead.jointusercode = "";
  
      }else if (response == "Please do not enter same user code") {
  
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Please do not enter same user code</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        this.Alertservice.presentAlert('Warning',"Please do not enter same user code");
        this.mylead.jointusername = "";
        this.mylead.jointusercode = "";
  
      }  else {
        this.getusername = response;
        this.mylead.jointusername = this.getusername;
        console.log(this.getusername)
      }
  
    })
      // .error(function(response) {
      //   this.hidespin();
      //   console.log(response);
      // });
  }
  getcalloutcome() {
    // this.showspin();

    this.Apiservice.getcalloutcomenew()
      .then((res:any)=>{
        console.log(response);
        // response = JSON.parse(response);
        var response = res.data;
  response = JSON.parse(response);
  response = JSON.parse(response);
        this.callOutCome = response;
        // this.hidespin();
      })
      // .error(function(response) {
      //   console.log(response);
      //   this.hidespin();
      //   // count++; 
      //   //   if(count<=2){
      //   //     this.getcalloutcome();
      //   //    }else{
      //   //     this.hidespin();
      //   //     this.showToast('Server Error, Call Outcome is not loaded.' )
      //   //  }

      // });
  }
  getprodGroup(Type) {
    // this.showspin();
    this.Apiservice.getproductGroup(Type)
      .then((res:any)=> {
        // console.log(response);
        // response = JSON.parse(response);
        var response = res.data;
  response = JSON.parse(response);
  response = JSON.parse(response);
        this.productGroup = response;
        // this.hidespin();
      })
      // .error(function(response) {
      //   console.log(response);
      //   this.hidespin();
      // });
  }

  getPremiumTerm(){

    this.Apiservice.getPremiumPayTerm()
      .then((res:any)=> {
        // console.log(response);
        // response = JSON.parse(response);
        var response = res.data;
  response = JSON.parse(response);
  response = JSON.parse(response);
        this.premiumPayTerm = response;
      })
      // .error(function(response) {
      //   console.log(response);
      // });
  }
  getPremiumMode() {

    this.Apiservice.getPremiumPayMode()
      .then((res:any)=> {
        var response = res.data;
  response = JSON.parse(response);
  response = JSON.parse(response);
        this.premiumPayMode = response;
      })
      // .error(function(response) {
      //   console.log(response);
      // });
  }

  myleadsmodel(obj){
    
    //  this.UpdateModal.show();
    //  this.dateToday1 = $filter('date')(new Date(), 'yyyy-MM-dd');
    this.dateToday1 = moment(new Date()).format('YYYY-MM-DD');
    console.log(this.dateToday1)
     console.log(obj);
     
      var purposeid = obj.purp_id;
      this.purposeid = obj.purp_id;
     console.log(purposeid);
     console.log(obj.PURPOSE);
     this.puposename = obj.PURPOSE;
     console.log(obj.UpdatedOn)
     this.updatedname = obj.UpdatedOn;
 
     this.mylead.deposits = parseInt(obj.Deposit_Amount);
     this.mylead.casa = parseInt(obj.Casa_Amount);
     this.mylead.advance = parseInt(obj.Advance_Amount);
     this.mylead.insurance = parseInt(obj.Insurance_Amount);
     this.mylead.amount = parseInt(obj.other_Amount);
     this.mylead.caption = obj.other_caption;
     this.mylead.Insurance_Source = obj.InsuranceSource;
     this.mylead.ReffRelation = obj.ReffRelation;
     this.mylead.InsuranceType = obj.InsuranceType;
 
     this.mylead.calltype = "";
     
     this.mylead.remarks = "";
     this.mylead.calloutcome = "";
   
     this.mylead.followdate = "";
     this.mylead.followtime = "";
     this.mylead.JointVisit = "";
     this.mylead.jointcode = "";
     this.mylead.jointusername = "";
 
     this.purpose = obj.PURPOSE;
     window.localStorage['purpose'] = obj.PURPOSE;
     this.customername = obj.CUSTOMER_NAME;
     if(obj.CUSTOMER_ID != 0){
       this.mylead.customerid = obj.CUSTOMER_ID;
     }
     this.customerid = obj.CUSTOMER_ID;
 
     window.localStorage['CustomerId'] = obj.CUSTOMER_ID;
     this.mobile = obj.CONTACT_NO;
     this.calltype = obj.CallType;
     this.calldate = obj.NEXT_CALL_DATE;
     this.accoutnumber = obj.AccountNumber;
     window.localStorage['CallId'] = obj.CRMCallID;
     this.fullname = obj.CUSTOMER_NAME;
 
     //this.mylead.calltype ='P'
     if(obj.CallType == "Personal Visit"){
       this.mylead.calltype ='P';
     }else{
       this.mylead.calltype = 'T';
     }
    
     if(obj.Address !='null' && obj.Address !=null&& obj.Address !="undefined"&& obj.Address !=undefined)
     {
       this.mylead.addressname = obj.Address;
       //mylead.calltype
 
       if(obj.CallType == "Personal Visit"){
         this.mylead.calltype ='P';
         // this.typeshowmap1(this.mylead.addressname);
     
       }else{
         this.mylead.calltype = "";
       }
      
     }
     // else{   
       console.log(this.customerid);  
       if (this.customerid == null) {
 
       this.enable = false;
 
     }
     if (this.customerid != null) {
       this.enable = true;
       console.log(obj.CUSTOMER_ID)
       this.getbusinessunit(obj.CUSTOMER_ID);
       if(obj.CUSTOMER_ID == 0){
         this.mylead.lastname =  obj.CUSTOMER_NAME;
         this.mylead.mobile = obj.CONTACT_NO;
       }else{
      //  this.showspin();
       this.Apiservice.getcustomerdetails(this.customerid)
         .then((res:any)=> {
          //  this.hidespin();
           console.log(response);
           var response = res.data;
  response = JSON.parse(response);
  response = JSON.parse(response);
           this.custDetails = response;
           this.myleadcustomerdata = JSON.parse(this.custDetails);
 
           if(this.myleadcustomerdata != "" && this.myleadcustomerdata != undefined)
           {
 
           this.mylead.customername = this.myleadcustomerdata[0].Nfirstname + ' ' + this.myleadcustomerdata[0].Nlastname;
           window.localStorage['customerName'] = this.mylead.customername;
           this.mylead.firstname = this.myleadcustomerdata[0].Nfirstname;
           this.mylead.lastname = this.myleadcustomerdata[0].Nlastname;
           this.mylead.mobile = this.myleadcustomerdata[0].Nmobile;
           this.mylead.resphnno = this.myleadcustomerdata[0].Nresidencephone;
           this.mylead.email = this.myleadcustomerdata[0].Nemail;
 
 
 
          
 
           var firstname = [];
 
           if (this.myleadcustomerdata.length > 0) {
            //  this.showspin();
           }
           for (var i = 0; i < this.myleadcustomerdata.length; i++) {
 
             firstname = this.myleadcustomerdata[i].Nfirstname.split(" ");
 
             this.firstWords.push(firstname[0]);
             this.myleadcustomerdata[i].firstname = this.firstWords[i];
             this.firstname1 = this.myleadcustomerdata[i].firstname;
             if (i == this.myleadcustomerdata.length - 1) {
              //  this.hidespin();
             }
           }
 
           console.log(this.myleadcustomerdata[0].Add1);
           if(this.myleadcustomerdata[0].Add1 != undefined || this.myleadcustomerdata[0].Add2 != undefined || this.myleadcustomerdata[0].Add3 != undefined || this.myleadcustomerdata[0].Add4 != undefined || this.myleadcustomerdata[0].PIN != undefined){
             var respAdd1= this.myleadcustomerdata[0].Add1;
             var add1 = respAdd1.replace("/", "-");
             console.log(add1);
             var respAdd2= this.myleadcustomerdata[0].Add2;
             var add2 = respAdd2.replace("/", "-");
             console.log(add2);
           this.mylead.addressname = add1+' '+add2+' '+this.myleadcustomerdata[0].Add3+' '+this.myleadcustomerdata[0].Add4+' '+this.myleadcustomerdata[0].PIN;
           console.log(this.mylead.addressname);
           }
           if(this.mylead.addressname != "" && this.mylead.addressname != undefined)
           { 
             console.log(this.mylead.addressname);
           this.myvalue = true;
           //this.data.selectele='P';
          //  this.setlatlong(this.mylead.addressname);//cmd by sijin 
           }
          }
 
 
         })
        //  .error(function (response) {
        //    this.hidespin();
        //    console.log(response);
        //  });
       }
       }
     }

     getbusinessunit (cust) {
  
     //  this.showspin();
      this.Apiservice.getbusinesstype(cust)
         .then((res:any)=> {
          var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
           this.businessunitlist = response;


          // this.hidespin();
   
         })
         
   
   
     }

    getproduct(Type,prodGroup) {
      // this.showspin();
      this.Apiservice.getProduct(Type,prodGroup)
        .then((res:any)=> {
          var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
          this.product = response;
          // this.hidespin();
        })
        // .error(function(response) {
        //   console.log(response);
        //   this.hidespin();
        // });
    }

    modelDissmiss(){
      this.modalController.dismiss();
     }






     //End
     private DisLat = null;
     private DisLong = null;
endNavigationleads(obj){
  
  console.log("endNavigationleads");
  console.log(obj);
   
   var rad = (x)=> {
      return x * Math.PI / 180;
    };
     setTimeout(()=> {
      var R = 6378137; // Earth’s mean radius in meter
      this.Inlatlng = window.localStorage['curntlatlngvallead'];
     // this.Inlatlng = '13.0308329,80.2380114';

     if( this.Inlatlng == undefined || this.Inlatlng == "undefined"){
      var posOptions = { timeout: 10000, enableHighAccuracy: false };
      this.geolocation.getCurrentPosition(posOptions).then((resp) => {
        var Inlatlng = (resp.coords.latitude) + "," + (resp.coords.longitude);
        // this.longitude = resp.coords.longitude;
        window.localStorage['curntlatlngval'] = Inlatlng;
       }).catch((error) => {
         console.log('Error getting location', error);
       });
 
     }
     this.Inlatlng = '13.0308329,80.2380114';
      console.log(this.Inlatlng)
      console.log(this.DisLat, this.DisLong)
      var latlong1arr = this.Inlatlng.split(",");
      // alert(latlong1arr)
      console.log(latlong1arr)

      var dLat = rad(latlong1arr[0] - this.DisLat);
      var dLong = rad(latlong1arr[1] - this.DisLong);
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(this.DisLat)) * Math.cos(rad(latlong1arr[0])) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
      console.log(a)
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;
      console.log(d)
      this.distanceInMeter = d;


      var currentDateTime = new Date();

      var objdataupdtime:any = {};
      objdataupdtime.CUSTOMER_ID = obj.CUSTOMER_ID;
      objdataupdtime.RO_CODE = obj.RO_CODE;
      objdataupdtime.START_TIME = currentDateTime;
      //objdataupdtime.START_LOCATION = window.localStorage['trackinglocation'];

      console.log(objdataupdtime);
      console.log(this.distanceInMeter);

      // if (this.distanceInMeter >= 2000) {
      //   console.log("More than 200 meter")


      //   alert("Invalid Meeting Location.");
      // } else {





        //alert("Reached the Location");
         var timestart = new Date();
  console.log(timestart);
  //  this.endleadtime = $filter('date')(timestart, 'h.mm s a');
  // console.log(this.endleadtime);
  var timestart = new Date();
  console.log(timestart);
  this.endleadtime = moment(timestart).format("h.mm s a");

        console.log("Less than 200 meter");
        //alert("Reached the Location");
        // var myPopup = $ionicPopup.show({
        //   template: '<center> Reached the Location </center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive',
        //     onTap: function(e) {
        //       console.log("action popup");
        //       this.myleadsmodel(obj)
        //       //this.UpdateModal.show();
        //     }
        //   }]
        // });

//           Advance_Amount
// Deposit_Amount
// Casa_Amount
// Insurance_Amount
        if(obj.Advance_Amount=='null'|| obj.Advance_Amount=='undefined'|| obj.Advance_Amount==undefined|| obj.Advance_Amount==null){
          obj.Advance_Amount=="";
        }
        if(obj.Deposit_Amount=='null'|| obj.Deposit_Amount=='undefined'|| obj.Deposit_Amount==undefined|| obj.Deposit_Amount==null){
          obj.Deposit_Amount=="";
        }
        if(obj.Casa_Amount=='null'|| obj.Casa_Amount=='undefined'|| obj.Casa_Amount==undefined|| obj.Casa_Amount==null){
          obj.Casa_Amount=="";
        }
        if(obj.Insurance_Amount=='null'|| obj.Insurance_Amount=='undefined'|| obj.Insurance_Amount==undefined|| obj.Insurance_Amount==null){
          obj.Advance_Amount=="";
        }
        if(obj.CallType == 'Personal Visit'){
          this.mylead.calltype='P';
        }
        // this.mylead.calltype='P';
        this.myleadsmodel(obj)

        
      // }

    }, 500);

}

startNavigationrootleads(obj)
{
  console.log(obj);
   this.DisLat = obj.LatValue;
   console.log(this.DisLat);
    this.DisLong = obj.LongValue;
   console.log(this.DisLong);
  var latlongvaluedestination = obj.LatValue + ',' + obj.LongValue;
  console.log(latlongvaluedestination);
  // $rootScope.url = $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/directions?key=AIzaSyDGQhzcQYbQf9E7dzGUz-R7BVp2iFeNLfI&origin=' + window.localStorage['curntlatlngvallead'] + '&destination=' + latlongvaluedestination);
  // $state.go('app.LeadMap');
}
}
