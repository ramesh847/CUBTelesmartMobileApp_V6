import { Component, OnInit } from '@angular/core';
// import { ModalmycustomerPageModule } from './modalmycustomer.module';
import { ModalmycustomerPageModule } from './modalmycustomer.module';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { AlertServiceService } from 'src/app/service/alert-service.service';
import * as moment from "moment"; 
@Component({
  selector: 'app-modalmycustomer',
  templateUrl: './modalmycustomer.page.html',
  styleUrls: ['./modalmycustomer.page.scss'],
})
export class ModalmycustomerPage implements OnInit {
  data:any = {};
  customeractiondata: any;
  entry: any = {};
  callOutCome: any;
  getusername: any;
  callPurpose: any;
  businessunit: any;
  ins_type: any;
  ins_source: any;
  ins_ref: any;
  productresp: any;
  products: any;

  discussed:any = [{prod:'',descp:'',subprod:'',interested:'',subprodopt:[]}];
  subproductresp: any;
  subproducts: any;
  data1:any= {};
  assigned:any= {};
  search: any={};
  customerData1: any;
  existingcustomeradd: any;
  nextcalldate1: string;
  followuptime: string;


  constructor(private Alertservice:AlertServiceService,private Apiservice:ApiServiceService,private navParams: NavParams,public modalController: ModalController) { 
    console.log(this.discussed)
  }

  ngOnInit() {
    let Cusdata = this.navParams.get('Data');
    console.log(Cusdata);
    this.customerActionModal(Cusdata);
// this.mycustomersonload();

    this.getcalloutcome();
    this.getpurpose();
    this.getInsuranceType();
    this.getInsurancedata();
    this.getInsuranceSource();
    this.getproductcategory();
  }
 modelDissmiss(){
  this.modalController.dismiss();
 }

 mycustomersonload(){
  console.log("mycustomersonload");
  this.assigned = {};
  this.entry = {};
  this.data = {};
  console.log(this.data1);
  if (this.data1 != 'undefined' && this.data1 != undefined) {
    this.data1.exist = "NO";
    this.data1.new = "YES";
  }

  this.search.CBSCustomerID = "";
}


 private cusType=''
customerActionModal(items){
//  this.customerActionModal = function (items) {
  console.log("inside customerUpdateModal")
  console.log(items);
  this.data.addressname = "";
  this.data.callout = "";
  this.data.selectele = "";
  this.data.courtesypurp = "3";
  this.data.followupdate = "";
  this.data.followuptime = "";
  this.data.jointvisit = "";
  this.data.jointusercode = "";
  this.data.jointusername = "";
  this.customeractiondata = items;

  this.entry.mobile = this.customeractiondata.Mobile;
  console.log(this.entry.mobile);
  this.entry.customerid = this.customeractiondata.CBSCustomerId;
  console.log(this.entry.customerid);
  this.entry.lastname = this.customeractiondata.CustomerName;

  var newStr = this.customeractiondata.CustomerName.replace(this.customeractiondata.firstname, '');
console.log(newStr)
  this.entry.firstname = this.customeractiondata.firstname;
  this.entry.lastname = newStr
  this.cusType = items.ParentName;
  if(items.ParentName == 'Existing'){
    this.getbusinessunitExisting();
    this.getexistingCustomer(this.entry.customerid);
  }else if(items.ParentName == 'New'){
    this.getbusinessunitNew();
    this.getexistingCustomer(this.entry.customerid);
  }
  // this.mycustomeraction.show();
// }




}

getbusinessunitExisting(){
this.Apiservice.getbusinessunitExisting().then((res:any)=>{
// console.log(JSON.parse(res));
var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
this.businessunit = response
})
}

getbusinessunitNew(){
this.Apiservice.getbusinessunitNew().then((res:any)=>{
console.log(res);
var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
this.businessunit = response;
})
}

// this for data joint visit

checkbox(Event){
  console.log(Event);
  
  if(Event){
    this.data.jointvisit = 'YES';
  }else{
    this.data.jointvisit = "NO"
  }
  console.log(this.data.jointvisit)
}
getexistingCustomer(customerID){
this.Apiservice.getexistingcustomerdetails(customerID).then((res:any)=>{
// console.log(JSON.parse(response))
var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
// this.hidespin();
    console.log(response);
    this.customerData1 = res;
    console.log(this.customerData1);
    this.existingcustomeradd = JSON.parse(this.customerData1);

    this.existingcustomeradd[0].Add1 = this.existingcustomeradd[0].Add1.replace(/\s+/g,' ').trim();
    this.existingcustomeradd[0].Add2 = this.existingcustomeradd[0].Add2.replace(/\s+/g,' ').trim();
    this.existingcustomeradd[0].Add3 = this.existingcustomeradd[0].Add3.replace(/\s+/g,' ').trim();
    this.existingcustomeradd[0].Add4 = this.existingcustomeradd[0].Add4.replace(/\s+/g,' ').trim();

    if(this.existingcustomeradd != "" && this.existingcustomeradd != undefined)
    {
    console.log(this.existingcustomeradd[0].Add1);
    if(this.existingcustomeradd[0].Add1 != undefined || this.existingcustomeradd[0].Add2 != undefined || this.existingcustomeradd[0].Add3 != undefined || this.existingcustomeradd[0].Add4 != undefined || this.existingcustomeradd[0].PIN != undefined){
      var respAdd1= this.existingcustomeradd[0].Add1;
      var add1 = respAdd1.replace("/", "-");
      console.log(add1);
      var respAdd2= this.existingcustomeradd[0].Add2;
      var add2 = respAdd2.replace("/", "-");
      console.log(add2);
    this.data.addressname = add1+' '+add2+' '+this.existingcustomeradd[0].Add3+' '+this.existingcustomeradd[0].Add4+' '+this.existingcustomeradd[0].PIN;
    console.log(this.data.addressname);
    }
    if(this.data.addressname != "" && this.data.addressname != undefined)
    { 
      console.log(this.data.addressname);
    //  this.myvalue = true;
     //this.data.selectele='P';
    //  this.setlatlong(this.data.addressname);
    }
   
   }



})
}

getcalloutcome(){
  this.Apiservice.getcalloutcome1().then((res:any)=>{
// console.log(JSON.parse(res));
var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
this.callOutCome = response;

  })
}

checkusercode(val){
  var usercode = val;
  var branchid = window.localStorage['branchID'];
  var struserCode = window.localStorage['userCode'];
  this.Apiservice.checkJointCode(struserCode,usercode, branchid).then((res:any)=>{
console.log(JSON.parse(res));
let response = JSON.parse(res)
if(response == "This User Not in this Branch"){
  this.Alertservice.presentAlert('Warning',"This User Not in this Branch");
  this.data.jointusername = "";
  this.data.jointusercode = "";

}else if(response == "Please Enter the Valid User Code"){
  console.log('checkkkkkind')
  this.Alertservice.presentAlert('Warning',"Please Enter the Valid User Code");
  this.data.jointusername = "";
  this.data.jointusercode = "";
}else if(response == "Please do not enter same user code"){
  this.Alertservice.presentAlert('Warning',"Please do not enter same user code");
  this.data.jointusername = "";
  this.data.jointusercode = "";
}else {
  this.getusername = res;
  this.data.jointusername = this.getusername;
  console.log(this.getusername)
}
  });
}

getpurpose(){
  debugger
  this.Apiservice.getpurpose().then((res:any)=>{
    console.log(res)
    debugger
    var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
    this.callPurpose = response;
  })
}

checkdeeping(val){
console.log(val)
console.log(val);
    var deeping = val;
    //var branchid = window.localStorage['branchID'];
    var struserID = localStorage.getItem('userID');
    var custype = 'E';
    // this.showspin();

    

    if(deeping == 14 &&  this.cusType == 'Existing'){
      console.log('checking');
      if(this.entry.customerid != undefined || this.entry.customerid != 0){
        this.Apiservice.deepingcheck(struserID,this.entry.customerid,custype, deeping).then((res:any)=>{
          // console.log(JSON.parse(res));
          var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
        // let response =  JSON.parse(res);
          if (response == "This customer is not mapped with you. Cannot select Deepening Of Customer") {
            this.Alertservice.presentAlert('Warning',"This customer is not mapped with you. Cannot select Deepening Of Customer");
          }
        })
      }
    }
}

getInsuranceType(){
this.Apiservice.getInsuranceType().then((res:any)=>{
  var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
  this.ins_type = response;
})

}

getInsuranceSource(){
  this.Apiservice.getInsuranceSource().then((res:any)=>{
      //  console.log(JSON.parse(res));
       var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
       this.ins_source = response;
     });
 }

 getInsurancedata(){
  this.Apiservice.getinsurancedetails('Refferals').then((res:any)=>{
       console.log(JSON.parse(res));
       var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
        let itemrefarr = response;
        this.ins_ref = itemrefarr.Table
     });
 }

 getproductcategory(){
  this.Apiservice.getmycustomerproduct().then((res:any)=>{
    var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
    this.productresp = response;
    this.products = this.productresp.Table;
console.log(this.products)
  })
 }

 getsubproduct(typeid,idx){
  // if(this.discussed[idx].prod != ''){
  //     this.discussed[idx].subprod = true;
  // }
  console.log(typeid,this.entry.customerid,idx);
  // $ionicLoading.show({
  //   template: '<ion-spinner icon="lines" class="spinner-cub"></ion-spinner>'
  // })
  this.Apiservice.getmycustomersubproduct(typeid,this.entry.customerid)
      .then((res:any)=> {
        console.log(JSON.parse(response));

        var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
        // $ionicLoading.hide();
        this.subproductresp = response;
        this.subproducts = this.subproductresp.Table;
        console.log(this.subproducts);
        this.discussed[idx].subprodopt = this.subproducts;
        this.discussed = this.discussed;
        console.log(this.discussed);
        console.log(this.subproducts);
      });
      // .error(function(error){
      //     console.log(error);
      //     $ionicLoading.hide();
      // })

    // console.log(this.discussed);
}

prod
descp
subprod
interested
Add(idx) {
  console.log(this.discussed.length,idx);
  for(let i=0;i<this.discussed.length;i++){

    if(this.discussed[i].prod != ''&&this.discussed[i].subprod != ''&& this.discussed[i].descp != ''&&this.discussed[i].prod != undefined&&this.discussed[i].subprod != undefined&&this.discussed[i].descp != undefined){
      //Add the new item to the Array.
        var item:any = {};
        item.prod = this.prod;
        item.descp = this.descp;
        item.subprod = this.subprod;
        item.interested = this.interested;
        this.discussed.push(item);

        //Clear the TextBoxes.
        this.prod = "";
        this.subprod = "";
        this.descp = "";
        console.log(this.discussed);
        break;
    }else{
      this.Alertservice.presentAlert('Warning',"Please fill all details for Previous Product");

      // var myPopup = $ionicPopup.show({
      //   template: '<center>Please fill all details for Previous Product</center>',
      //   title: 'Warning!',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive',
      //     onTap: function (e) {

      //     }
      //   }]
      // });
    }
    

  }
  
};

Remove(index) {
  //Find the record using Index from Array.
  // var name = this.Customers[index].Name;
  // if ($window.confirm("Do you want to delete: " + name)) {
      //Remove the item from Array using Index.
      if(this.discussed.length >1){
        this.discussed.splice(index, 1);
      }else{
        this.Alertservice.presentAlert('Warning',"This can\'t be removed.");
        
      }
      
  // }
}


 saveCourtesyCall(clickcall){
    
  console.log(clickcall);

  // this.showspin($ionicLoading);
  this.data1 = {};
  this.data1.new = 'YES';
  console.log(this.data);

  // this.data.addressname = 

  var courtesyCustomerID:any = this.entry.customerid;
  var username = window.localStorage['userName'];
  var branchid = window.localStorage['branchID'];
  var CallerId = window.localStorage['userID'];
  var callid = null;
  // var mode = "N";
  var usercode = window.localStorage['userCode'];
  if (courtesyCustomerID == "") {
    var cbsid:any = 0;
  } else {
    var cbsid = courtesyCustomerID;
  }


  console.log(this.entry,this.data);

  var customername1 = this.entry.firstname;
  var firstname1 = this.entry.firstname;
  var lastname1 = this.entry.lastname;
  var mobile1 = this.entry.mobile;


  // var customername1 = document.getElementById('courtesyFirstName').value;
  // var firstname1 = document.getElementById('courtesyFirstName').value;
  // var lastname1 = document.getElementById('courtesyLastName').value;
  // var mobile1 = document.getElementById('courtesyMobile').value;
  // var calltype = document.getElementById('courtesyCallType').value;
  // var remarks1 = document.getElementById('txtCourtesyRemark').value;
  // var purpose = document.getElementById('courtesyPurpose').value;
  // var responseid = document.getElementById('courtesyCallOutcome').value;

  var calltype = this.data.selectele;
  var remarks1 = this.data.Remarks;
  var purpose = this.data.courtesypurp;
  var responseid = this.data.callout;
  var depositVal = this.data.deposits;
  
  console.log(purpose)

  if (firstname1 == "") {

    var firstname = null;
  } else {
    var firstname = firstname1;
  }


   //if (purpose == 3) {
    if(this.data.businessunit == 11 || this.data.businessunit == 14){
      if ((this.data.deposits == "" || this.data.deposits == undefined) && (this.data.casa == "" || this.data.casa == undefined) && (this.data.advance == "" || this.data.advance == undefined)) {
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Enter atleast one BusinessUnit</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        // this.hidespin($ionicLoading);
        this.Alertservice.presentAlert('Warning',"Enter atleast one BusinessUnit");
        return false;
      }
    }

    if(this.data.businessunit == 12){
      if (this.data.insurance == "" || this.data.insurance == undefined) {
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Enter Insurance</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        // this.hidespin($ionicLoading);
        this.Alertservice.presentAlert('Warning',"Enter Insurance");
        return false;
      }
    }

    if(this.data.businessunit == 13){
      if ((this.data.caption == "" || this.data.caption == undefined) || (this.data.amount == "" || this.data.amount == undefined)) {
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Enter Caption and Amount</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        // this.hidespin($ionicLoading);
        this.Alertservice.presentAlert('Warning',"Enter Insurance");

        return false;
      }
    }


  if (customername1 == "") {

    var customername = null;
  } else {
    var customername = customername1;
  }
  if (this.data1.new == "YES") {
    if (lastname1 == "") {

      // var myPopup = $ionicPopup.show({
      //   template: '<center>Enter Last Name</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Enter Last Name");
      return false;
    } else {
      var lastname = lastname1;
    }
  }

  if (this.data1.exist == "YES") {
    if (lastname1 == "") {
      var lastname = null;
    } else {
      var lastname = lastname1;
    }
  }

  if (this.data1.new == "YES") {
    if (mobile1 == "") {

      // var myPopup = $ionicPopup.show({
      //   template: '<center>Enter Mobile Number</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Enter Mobile Number");
      return false;
    } else {
      var mobile = mobile1;
    }
  }

  if (this.data1.exist == "YES") {
    if (mobile1 == "") {
      var mobile = null;
    } else {
      var mobile = mobile1;
    }
  }

  if (purpose == "") {
    // var myPopup = $ionicPopup.show({
    //   template: '<center>Select Purpose</center>',
    //   title: 'Warning',
    //   scope: this,
    //   buttons: [{
    //     text: 'OK',
    //     type: 'button button-clear button-assertive'
    //   }]
    // });
    // this.hidespin($ionicLoading);
    this.Alertservice.presentAlert('Warning',"Select Purpose");
    return false;

  }

  if (responseid == "") {
    // var myPopup = $ionicPopup.show({
    //   template: '<center>Select Call OutCome</center>',
    //   title: 'Warning',
    //   scope: this,
    //   buttons: [{
    //     text: 'OK',
    //     type: 'button button-clear button-assertive'
    //   }]
    // });
    // this.hidespin($ionicLoading);

    this.Alertservice.presentAlert('Warning',"Select Call OutCome");
    return false;

  }



  if (remarks1 == "") {
    var remarks = null;

  } else {
    var remarks = remarks1;
  }

  // var courtesyResidentialPhone = document.getElementById('courtesyResidentialPhone').value;
  if (this.data.courtesypurp == "5" && this.data.current == "Y") {

    if ((this.data.collected_accno == null || this.data.collected_accno == undefined || this.data.collected_accno == "") || (this.data.collectamount == null || this.data.collectamount == undefined || this.data.collectamount == "") || (this.data.collected_date == null || this.data.collected_date == "" || this.data.collected_date == undefined)) {
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Fill All Details Of Amount Collected</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);

      this.Alertservice.presentAlert('Warning',"Fill All Details Of Amount Collected");
      return false;
    } else {
      var collectionmode = "Y";
      var accountno = this.data.collected_accno;
      var amount = this.data.collectamount;
      // this.collectiondate1 = this.data.collected_date; command by  sijin
      // var collectiondate = $filter('date')(this.collectiondate1, 'yyyy-MM-dd');  command by  sijin
    }
  }

  if (this.data.courtesypurp == "3") {
    if (this.data.deposits == 0 && this.data.casa == 0 && this.data.advance == 0 && this.data.insurance == 0) {
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Fill Details Of Expected Business</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);

      this.Alertservice.presentAlert('Warning',"Fill Details Of Expected Business");
      return false;
    } else {
      var casaVal = this.data.casa;
      var depositVal = this.data.deposits;
      var AdvanceVal = this.data.advance;
      var InsuranceVal = this.data.insurance;
    }
  }

  if (this.data.deposits != 0 || this.data.casa != 0 || this.data.advance != 0 || this.data.insurance != 0) {
    var casaVal = this.data.casa;
    var depositVal = this.data.deposits;
    var AdvanceVal = this.data.advance;
    var InsuranceVal = this.data.insurance;
  }


  if (this.data.courtesypurp != "3") {
    var casaVal:any = 0;
    var depositVal:any = 0;
    var AdvanceVal:any = 0;
    var InsuranceVal:any = 0;

  }



  if (this.data.courtesypurp != "5") {

    var collectionmode:string = null; // noted point

  }

  if (collectionmode == null) {
    var accountno = null;
    var amount = null;
    var collectiondate = null;

  }



  if (this.data.courtesypurp == "5") {
    if (this.data.current == "" || this.data.current == undefined || this.data.current == null || this.data.current == 'N') {
      var collectionmode:string = null; // noted point

    }
  }
console.log(this.data.courtesypurp)
  if (this.data.courtesypurp == "3") {
    if (this.data.businessunit == null || this.data.businessunit == undefined || this.data.businessunit == "") {
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Select Business Unit</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Select Business Unit");
      return false;

    } else {
      var BusinessUnit = this.data.businessunit;
    }
  }


  if (purpose != "3") {

    var BusinessUnit:any = 0;
  }

  if (this.data.callout == "2") {
    if ((this.data.followupdate == null || this.data.followupdate == undefined || this.data.followupdate == "") || (this.data.followuptime == null || this.data.followuptime == undefined || this.data.followuptime == "")) {
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Provide Followup Details</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);

      this.Alertservice.presentAlert('Warning',"Provide Followup Details");
      return false;


    } else {
      this.nextcalldate1 = moment(this.data.followupdate).format('YYYY-MM-DD');
      this.followuptime = moment(this.data.followuptime).format('h.mm a');
      // this.nextcalldate1 = $filter('date')(this.data.followupdate, 'yyyy-MM-dd');
      // this.followuptime = $filter('date')(this.data.followuptime, 'h.mm a');
      var nextcalldate = this.nextcalldate1 + ' ' + this.followuptime;

    }

  }

  if (this.data.callout != "2") {
    var nextcalldate = " ";

  }

  if (calltype == "") {
    // var myPopup = $ionicPopup.show({
    //   template: '<center>Select Call Type</center>',
    //   title: 'Warning',
    //   scope: this,
    //   buttons: [{
    //     text: 'OK',
    //     type: 'button button-clear button-assertive'
    //   }]
    // });
    // this.hidespin($ionicLoading);
    this.Alertservice.presentAlert('Warning',"Select Call Type");
    return false;

  }

  if (calltype == "P" && this.data.jointvisit == "YES") {

    if (this.data.jointusercode == null || this.data.jointusercode == undefined || this.data.jointusercode == "") {
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Enter Joint Usercode</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Enter Joint Usercode");
      return false;
    } else {
      var jointvisit = "Y";
      var jointcode = this.data.jointusercode;

    }


  }

  if (calltype != "P") {

    var jointvisit:string = null; //noted point

  }

  if (calltype == "P") {
    if (this.data.jointvisit == "" || this.data.jointvisit == undefined || this.data.jointvisit == null || this.data.jointvisit == "NO") {

      var jointvisit:string = null;
    }

  }

  if (jointvisit == null) {
    var jointcode = null;
  }

  var Endtime = null;
  var Totime = null;

  if (this.data1.exist == "Y") {
    var mode = 'E';
  } else {
    var mode = 'N';


  }





  /*if (depositVal == "") {
        debugger;
        var myPopup = $ionicPopup.show({
          template: '<center>Select Deposit</center>',
          title: 'Warning',
          scope: this,
          buttons: [{
            text: 'OK',
            type: 'button button-clear button-assertive'
          }]
        });
        this.hidespin($ionicLoading);
        return false;

      }*/
  if (this.data.deposits == null || this.data.deposits == undefined || this.data.deposits == "") {

    var depositVal = null;
    /*   var myPopup = $ionicPopup.show({
            template: '<center>Select Deposit</center>',
            title: 'Warning',
            scope: this,
            buttons: [{
              text: 'OK',
              type: 'button button-clear button-assertive'
            }]
          });*/

  } else {

    var depositVal = this.data.deposits;

  }

  if (this.data.casa == null || this.data.casa == undefined || this.data.casa == "") {

    var casaVal = null;

  } else {

    var casaVal = this.data.casa;

  }

  if(this.data.businessunit == 13){

    
    if (this.data.caption == null || this.data.caption == undefined || this.data.caption == "") {

      var  AdvanceVal = null;

    } else{

      var AdvanceVal = this.data.caption;

    }
  }
  else{

    if (this.data.advance == null || this.data.advance == undefined || this.data.advance == "") {

      var AdvanceVal = null;

    } else{

      var AdvanceVal = this.data.advance;

    }
  }

  if(this.data.businessunit == 13){

    
    if (this.data.amount == null || this.data.amount == undefined || this.data.amount == "") {

      var InsuranceVal = null;

    } else{

      var InsuranceVal = this.data.amount;

    }
  }
  else{

    if (this.data.insurance == null || this.data.insurance == undefined || this.data.insurance == "") {

      var InsuranceVal = null;

    } else {

      var InsuranceVal = this.data.insurance;

    }

}

   
if (this.data.insurancetype == null || this.data.insurancetype == undefined || this.data.insurancetype == "") {

  var insurancetype = 0;

 } else {

   var insurancetype:number = this.data.insurancetype;

 }

 if (this.data.leadsource == null || this.data.leadsource == undefined || this.data.leadsource == "") {

   var leadsource = 0;

 } else {

   var leadsource:number = this.data.leadsource;

 }

 if (this.data.referredby == null || this.data.referredby == undefined || this.data.referredby == "") {

   var referredby = 0;

 } else {

   var referredby:number = this.data.relationship;

 }

  if (this.data.selectele == "P") {
    console.log(this.data.addressname)
    if ((this.data.addressname == "") || ((this.data.addressname == 'undefined') || (this.data.addressname == undefined))) {
      console.log(this.data.addressname)
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Enter Your Location</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Enter Your Location");
      return false;

    } else {
      //alert(latvalue);
      // var latvalue = this.lat1;// by sijin
      //console.log(latvalue)
      // var langvalue = this.lng1;by sijin
      //console.log(latvalue)
      var address = this.data.addressname;
    }


  } else {
    var latvalue = null;
    var langvalue = null;
    var address = null;
  }

  console.log(this.data);

  if(remarks == ""||remarks== null||remarks==undefined){
    remarks = "NA";
  }

  if (this.data.selectele == "P") {
    console.log("calltype is  p");
    // this.showspin();
    console.log(BusinessUnit)
    this.Apiservice.updateentryscreen(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose,
       responseid, nextcalldate, firstname, lastname, usercode, mode, callid, accountno, amount, collectiondate,
        collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, 
        InsuranceVal+'_'+insurancetype+'_'+leadsource+'_'+referredby)

      /*console.log(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, mode,callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit,depositVal,casaVal,AdvanceVal,InsuranceVal);*/

      .then((res:any)=> {

        
        // this.closecustomeractionModal();

        // this.hidespin();
        var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
        var success:any = [];
        success = response;
        console.log(success)
        // if (success !== "") {
        //   console.log(success);
        //   console.log(latvalue);
        //   console.log(langvalue)
        //   console.log(address);
        //   console.log(purpose);
        //   console.log(cbsid)
        //   // this.showspin();
        //   callAPI.saveaddress(success, latvalue, langvalue, address, purpose, cbsid)
        //     .success(function (response) {
        //       this.hidespin();
        //       console.log(response);

        //       if (response == '"Yes"') {

        //         // $("#mapshowimage").css("display", "none");
        //         // console.log("$(#mapshowimage).css(display, none)")

        //         var myPopup = $ionicPopup.show({
        //           template: '<center>Saved Successfully</center>',
        //           title: 'Success',
        //           scope: this,
        //           buttons: [{
        //             text: 'OK',
        //             type: 'button button-clear button-assertive',
        //             // onTap: function(e) {
        //             //  console.log("coming map")


        //             //      }
        //           }]
        //         });
        //         this.closecustomeractionModal();
        //       //  this.mycustomeraction.hide();
        //       }
        //       else {
        //         var myPopup = $ionicPopup.show({
        //           template: '<center>Error While Saving</center>',
        //           title: 'Error',
        //           scope: this,
        //           buttons: [{
        //             text: 'OK',
        //             type: 'button button-clear button-assertive'
        //           }]
        //         });
        //       }

        //       this.productlistentrysave(cbsid);
        //     }).error(function (err) {
        //       this.hidespin();
        //     })

        // }


        /* if (success == 4) {
 
           var myPopup = $ionicPopup.show({
             template: '<center>This Customer Is Not Mapped With You</center>',
             title: 'Warning',
             scope: this,
             buttons: [{
               text: 'OK',
               type: 'button button-clear button-assertive'
             }]
           });
 
         }*/

        //  else if
        //   (success == 2) {

        //   var myPopup = $ionicPopup.show({
        //     template: '<center>This Customer Is Not Mapped With You</center>',
        //     title: 'Warning',
        //     scope: this,
        //     buttons: [{
        //       text: 'OK',
        //       type: 'button button-clear button-assertive'
        //     }]
        //   });
        // } 

        // else if
        //  (success == 3) {

        //   var myPopup = $ionicPopup.show({
        //     template: '<center>This Customer Already Mapped To You. No Need To Convert</center?',
        //     title: 'Warning',
        //     scope: this,
        //     buttons: [{
        //       text: 'OK',
        //       type: 'button button-clear button-assertive'
        //     }]
        //   });

        // } 
        // else if (success[0].response == 1)
        //  {
        //   var myPopup = $ionicPopup.show({
        //     template: 'Please Visit Pending Courtesy Call Screen As It Is In FOLLOW UP Status' + success[0].Column1,
        //     title: 'Warning',
        //     scope: this,
        //     buttons: [{
        //       text: 'OK',
        //       type: 'button button-clear button-assertive'
        //     }]
        //   });
        // }

        //  else {

        //   var myPopup = $ionicPopup.show({
        //     template: '<center>Saved Successfully</center>',
        //     title: 'Success',
        //     scope: this,
        //     buttons: [{
        //       text: 'OK',
        //       type: 'button button-clear button-assertive'
        //     }]
        //   });


        // }

        this.data = {};
        this.assigned.customerid = "";
        this.entry = {};

      });
      // .error((response)=> {
      //   this.closecustomeractionModal();
      //   console.log(response);
      //   this.hidespin();
      // });


  }
  else {
    console.log("calltype is not p");
    // this.showspin();
    this.Apiservice.updateentryscreen(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks,
       purpose, responseid, nextcalldate, firstname, lastname, usercode, mode, callid, accountno, amount, collectiondate,
        collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, 
        InsuranceVal+'_'+insurancetype+'_'+leadsource+'_'+referredby)

      /*console.log(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, mode,callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit,depositVal,casaVal,AdvanceVal,InsuranceVal);*/

      .then((res:any)=> {
        console.log(response);
        

        // this.hidespin();
        var response = res.data;
        response = JSON.parse(response);
        response = JSON.parse(response);
        var success:any = [];
        success = response;
        console.log(success)
        if (success == 4) {

          // var myPopup = $ionicPopup.show({
          //   template: '<center>This Customer Is Not Mapped With You</center>',
          //   title: 'Warning',
          //   scope: this,
          //   buttons: [{
          //     text: 'OK',
          //     type: 'button button-clear button-assertive'
          //   }]
          // });
          this.Alertservice.presentAlert('Warning',"This Customer Is Not Mapped With You");

        } else if (success == 2) {

          // var myPopup = $ionicPopup.show({
          //   template: '<center>This Customer Is Not Mapped With You</center>',
          //   title: 'Warning',
          //   scope: this,
          //   buttons: [{
          //     text: 'OK',
          //     type: 'button button-clear button-assertive'
          //   }]
          // });
          this.Alertservice.presentAlert('Warning',"This Customer Is Not Mapped With You");
        } else if (success == 3) {

          // var myPopup = $ionicPopup.show({
          //   template: '<center>This Customer Already Mapped To You. No Need To Convert</center?',
          //   title: 'Warning',
          //   scope: this,
          //   buttons: [{
          //     text: 'OK',
          //     type: 'button button-clear button-assertive'
          //   }]
          // });

          this.Alertservice.presentAlert('Warning',"This Customer Already Mapped To You. No Need To Convert");  

        } else if (success[0].response == 1) {
          // var myPopup = $ionicPopup.show({
          //   template: 'Please Visit Pending Courtesy Call Screen As It Is In FOLLOW UP Status' + success[0].Column1,
          //   title: 'Warning',
          //   scope: this,
          //   buttons: [{
          //     text: 'OK',
          //     type: 'button button-clear button-assertive'
          //   }]
          // });
          this.Alertservice.presentAlert('Warning',"Please Visit Pending Courtesy Call Screen As It Is In FOLLOW UP Status" + success[0].Column1);  
        } else {

          // var myPopup = $ionicPopup.show({
          //   template: '<center>Saved Successfully</center>',
          //   title: 'Success',
          //   scope: this,
          //   buttons: [{
          //     text: 'OK',
          //     type: 'button button-clear button-assertive'
          //   }]
          // });

          this.Alertservice.presentAlert('Warning',"Saved Successfully");  
        }
        // this.productlistentrysave(cbsid);/// by sijin

        this.data = {};
        this.assigned.customerid = "";
        this.entry = {};
        // this.closecustomeractionModal();
      })
      // .error(function (response) {

      //   console.log(response);
      //   this.hidespin();

      // });

  }
}
}
