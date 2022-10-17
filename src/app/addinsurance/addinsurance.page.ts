import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from "@angular/core";
import { AlertServiceService } from '../service/alert-service.service';
import { ApiServiceService } from '../service/api-service.service';
import { ToastServiceService } from '../service/toast-service.service';

@Pipe({
  name: 'actStatusPipe'
})
@Component({
  selector: 'app-addinsurance',
  templateUrl: './addinsurance.page.html',
  styleUrls: ['./addinsurance.page.scss'],
})
export class AddinsurancePage implements OnInit {
data1:any={};
assigned:any={}
new:boolean=false;
exist: boolean=true;
  types: any;
  companies: any;
  products: any;
  plans: any;
  constructor(private Alertservice:AlertServiceService,private toast:ToastServiceService,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    this.data1.exist = 'YES';
    this.getType();
  }
  

getType(){
    // this.showspin()
    var strParam = 'Insurance';
    var strCompany = 'test';
    var strProducts = 'test';
    console.log("strCompany", strCompany)
    this.Apiservice.getInsurance(strParam,strCompany,strProducts).then((response:any)=>{
      // this.hidespin();
      var result = response.data;
      result = JSON.parse(result);
      result = JSON.parse(result);
      this.types = result;
      console.log("Types",this.types)
    })
  }

  onTypeSelected(){
    // console.log("selected",this.type.TEXT)
    var strParamType = (<HTMLInputElement>document.getElementById('selectedType')).value;
    console.log(strParamType)
    var strCompany = 'test';
    var strProducts = 'test';
    console.log("selected",strParamType)
    this.Apiservice.getInsurance(strParamType,strCompany,strProducts).then((response:any)=>{
      console.log("comapniesType",response);
      var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
      // response = JSON.parse(response);
      this.companies = result;
      console.log("comapnies",this.companies);
    })
  }

  onCompanySelected(){
    var strParamType = (<HTMLInputElement>document.getElementById('selectedType')).value;
    var strCompany = (<HTMLInputElement>document.getElementById('selectedCompany')).value;
    var strProducts = 'test';
    console.log("selected",strParamType,strCompany);
    this.Apiservice.getInsurance(strParamType,strCompany,strProducts).then((response:any)=>{
      var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
      this.products = result;
      console.log("products",this.products);
    })
  }

  onProductSelected(){
    var strParamType = (<HTMLInputElement>document.getElementById('selectedType')).value;
    var strCompany = (<HTMLInputElement>document.getElementById('selectedCompany')).value;
    var strProducts = (<HTMLInputElement>document.getElementById('selectedProduct')).value;
    console.log("selected",strParamType,strCompany,strProducts);
    this.Apiservice.getInsurance(strParamType,strCompany,strProducts).then((response:any)=>{
      console.log("products",response);
      var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
      // response = JSON.parse(response);
      this.plans = result;
      console.log("plans",this.plans);
    })
  }

  
  InsuranceInsertData(){
    if(this.data1.exist == 'YES'){
      var customerId = (<HTMLInputElement>document.getElementById('existingCustId')).value;
    }
    console.log(customerId)
    var UserId = window.localStorage['userID'];
    var BranchId = window.localStorage['branchID'];
    var SNewCustmer = "Y";
    var CustName = (<HTMLInputElement>document.getElementById('CustName')).value;
    var Contact_Number = (<HTMLInputElement>document.getElementById('Contact_Number')).value;
    var Customer_DOB = (<HTMLInputElement>document.getElementById('Customer_DOB')).value;
 
    
    var Gender = (<HTMLInputElement>document.getElementById('Gender')).value;

    var InsuranceType = (<HTMLInputElement>document.getElementById('selectedType')).value;
    var Insurance_Provider = (<HTMLInputElement>document.getElementById('selectedCompany')).value;
    var Insurance_Products = (<HTMLInputElement>document.getElementById('selectedProduct')).value;
    var Insurance_Available_Products = (<HTMLInputElement>document.getElementById('selectedPlan')).value; 
    console.log("finalInsertData",UserId,BranchId,CustName,Contact_Number,Customer_DOB,Gender,InsuranceType,Insurance_Provider,Insurance_Products,Insurance_Available_Products,customerId)
    if((<HTMLInputElement>document.getElementById('existingCustId')).value == '' || (<HTMLInputElement>document.getElementById('existingCustId')).value == undefined || (<HTMLInputElement>document.getElementById('existingCustId')).value == null){
      
      var customerId = 'test';
    }
    if((<HTMLInputElement>document.getElementById('CustName')).value == '' || (<HTMLInputElement>document.getElementById('CustName')).value == undefined || (<HTMLInputElement>document.getElementById('CustName')).value == null){
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Enter Customer Name.</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons:[{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // })
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Enter Customer Name.");
      return false;
    };
    if((<HTMLInputElement>document.getElementById('Customer_DOB')).value == '' || (<HTMLInputElement>document.getElementById('Customer_DOB')).value == undefined || (<HTMLInputElement>document.getElementById('Customer_DOB')).value == null){
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Enter DOB.</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons:[{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // })
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Enter DOB.");
      return false;
    };

    if((<HTMLInputElement>document.getElementById('Contact_Number')).value == '' || (<HTMLInputElement>document.getElementById('Contact_Number')).value ==undefined || (<HTMLInputElement>document.getElementById('Contact_Number')).value == null){
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Enter Mobile Number.</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons:[{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // })
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Enter Mobile Number.");
      return false;
    };
    if((<HTMLInputElement>document.getElementById('Gender')).value == '' || (<HTMLInputElement>document.getElementById('Gender')).value == undefined || (<HTMLInputElement>document.getElementById('Gender')).value == null){
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Enter Gender.</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons:[{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // })
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Enter Gender.");
      return false;
    }

    if((<HTMLInputElement>document.getElementById('selectedType')).value == '' || (<HTMLInputElement>document.getElementById('selectedType')).value == undefined || (<HTMLInputElement>document.getElementById('selectedType')).value == null){
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Select insurance type.</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons:[{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // })
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Select insurance type.");
      return false;
    }

    if((<HTMLInputElement>document.getElementById('selectedCompany')).value == '' || (<HTMLInputElement>document.getElementById('selectedCompany')).value == undefined || (<HTMLInputElement>document.getElementById('selectedCompany')).value == null){
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Select company type.</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons:[{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // })
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Select company type.");
      return false;
    }

    if((<HTMLInputElement>document.getElementById('selectedProduct')).value == '' || (<HTMLInputElement>document.getElementById('selectedProduct')).value == undefined || (<HTMLInputElement>document.getElementById('selectedProduct')).value == null){
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Select product type.</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons:[{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // })
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Select product type.");
      return false;
    };
    if((<HTMLInputElement>document.getElementById('selectedPlan')).value == '' || (<HTMLInputElement>document.getElementById('selectedPlan')).value == undefined || (<HTMLInputElement>document.getElementById('selectedPlan')).value == null){
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Select plan type.</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons:[{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // })
      // this.hidespin($ionicLoading);
      this.Alertservice.presentAlert('Warning',"Select plan type.");
      return false;
    };
    console.log("finalInsertData",UserId,BranchId,CustName,Contact_Number,Customer_DOB,Gender,InsuranceType,Insurance_Provider,Insurance_Products,Insurance_Available_Products,customerId)
    this.Apiservice.InsuranceInsertData(UserId,BranchId,SNewCustmer,CustName,Contact_Number,Customer_DOB,Gender,InsuranceType,Insurance_Provider,Insurance_Products,Insurance_Available_Products,customerId).then((respose:any)=>{
      console.log("plans",respose);
    //   var alertPopup = $ionicPopup.alert({
    //     title: 'Submit',
    //     template: '<div align="center">Successfully Submitted.</div>'

    // });
    this.Alertservice.presentAlert('Submit',"Successfully Submitted.");

    this.resetForm();
    })
    // .error(function(error){
    //   console.log("errorsubmit",error);
    //   $ionicPopup.alert({
    //     title: 'Oops!',
    //     template: '<div align="center">Error occured.</div> '
    // });
    // })
  }
  resetForm(){
    (<HTMLInputElement>document.getElementById('existingCustId')).value = '';
    (<HTMLInputElement>document.getElementById('CustName')).value = '';
    (<HTMLInputElement>document.getElementById('Contact_Number')).value = '';
    (<HTMLInputElement>document.getElementById('Customer_DOB')).value = '';
    (<HTMLInputElement>document.getElementById('Gender')).value = '';
    (<HTMLInputElement>document.getElementById('selectedType')).value = '';
    (<HTMLInputElement>document.getElementById('selectedCompany')).value = '';
    (<HTMLInputElement>document.getElementById('selectedProduct')).value = '';
    (<HTMLInputElement>document.getElementById('selectedPlan')).value = '';
    
  
    
  }

  CheckBoxChange(Event,isChecked){
    console.log(isChecked);
    console.log(Event);
    // this.partB = !this.partA
    if(Event == 'exist' && isChecked == true){
    this.new = false;
    this.exist = true;
    this.data1.exist = 'YES';
    this.data1.new = 'NO';
    // this.RtgsNeftPartA();
    // this.partB = !this.partA 
    this.resetForm();
    }else
    if(Event == 'new' && isChecked == true){
      this.exist = false;
      this.new = true;
      this.data1.exist = 'NO';
    this.data1.new = 'YES';
    // this.RtgsNeftPartB();
      // this.partB = !this.partA 
      this.resetForm();
    }
      }
    
}
