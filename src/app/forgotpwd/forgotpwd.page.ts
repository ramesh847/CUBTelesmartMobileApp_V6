import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { AlertServiceService } from '../service/alert-service.service';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.page.html',
  styleUrls: ['./forgotpwd.page.scss'],
  providers:[DatePipe]
})
export class ForgotpwdPage implements OnInit {
  logindata: any={};
  dob: any;
  res: any;
  otp: any;
  invalidOTP: boolean=false;
  usercode: any;
  resver: any;
  showUpdatepwd: boolean=false;
  showVerify: boolean=true;
  pwdcheck1: boolean=false;
  pwdcheck2: boolean=false;
  resupdate: any;
  showotpdiv:boolean=false;
  user_name:any;
  // dob:any
  // showUpdatepwd:boolean=false

  constructor(private datepipe:DatePipe,private AlertService:AlertServiceService,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    debugger
    this.showotpdiv = false
    this.showUpdatepwd=false
  }


  sendOtp() {
    debugger
    // this.showotpdiv = true;
    //this.showspin();
    // if(this.logindata.user_name == undefined || this.logindata.user_name == '' && this.logindata.dob == undefined || this.logindata.dob == ''){
    //     var alertPopup = $ionicPopup.alert({
    //         title: 'alert',
    //         template: 'Enter the Emp Code'
    //     });
    //     return false;
    // }
    if(this.logindata.user_name == undefined || this.logindata.user_name == null || this.logindata.user_name == ''){
       // this.hidespin($ionicLoading);
       this.AlertService.presentAlert("Alert","Enter the Emp Code")
        // var alertPopup = $ionicPopup.alert({
        //     title: 'alert',
        //     template: 'Enter the Emp Code'
        // });
        return false;
    }

    if(this.logindata.dob == undefined || this.logindata.dob == null || this.logindata.dob == ''){
       // this.hidespin($ionicLoading);
       this.AlertService.presentAlert("Alert","Enter the DOB")
        // var alertPopup = $ionicPopup.alert({
        //     title: 'alert',
        //     template: 'Enter the DOB'
        // });
        return false;
    }

    this.dob = this.datepipe.transform( this.logindata.dob,'yyyy-MM-dd')
    
   // $filter('date')(this.logindata.dob, 'dd-MM-yyyy');
    console.log(this.dob);
    debugger
    this.Apiservice.sendOTP(this.logindata.user_name,this.dob)
        .then((response:any)=> {
          debugger
            console.log(response.data)
            this.res= JSON.parse(JSON.parse(response.data));
           // this.hidespin($ionicLoading);
            if(this.res == 'OTP Sent Successfully'){

              this.AlertService.presentAlert("Alert",this.res)
              this.showotpdiv = true;
              this.showVerify=false
                // var alertPopup = $ionicPopup.alert({
                //     title: 'Success',
                //     template: this.res
                // });

                // alertPopup.then(function (res) {
                //     this.showotpdiv = true;
                // });
            }else{
                // this.hidespin($ionicLoading);

                this.AlertService.presentAlert("Alert",this.res)
                // var alertPopup = $ionicPopup.alert({
                //     title: 'Alert',
                //     template: this.res
                // });

                // alertPopup.then(function (res) {
                //     this.logindata = {};
                // });
            }

        })

     
}

verifyfwdotp(){
  debugger
  //  this.invalidOTP = false;
  // this.showUpdatepwd = true;
  // // this.logindata = {};
  // this.showVerify= false;

this.otp = this.logindata.otp; 
console.log(this.otp);
if(this.otp == undefined){
// this.hidespin($ionicLoading);
}else{
if(this.otp.toString().length != 6){
this.invalidOTP = true;
}else{
this.invalidOTP = false;
}
}
if(this.otp != undefined || this.otp != null || this.otp != '' || this.otp != 'undefined'|| this.otp != 'null'){

this.usercode = this.logindata.user_name;
this.Apiservice.verifyfwdOTP(this.logindata.user_name,this.otp)
.then((response:any) =>{
  debugger
console.log(response)
this.resver= JSON.parse(JSON.parse(response.data));
// this.hidespin($ionicLoading);
if(this.resver == 'Given OTP Valid'){
  // var alertPopup = $ionicPopup.alert({
  //     title: 'Success',
  //     template: this.res
  // });

  // alertPopup.then(function (res) {
  //     this.showotpdiv = true;
  // });
  this.invalidOTP = false;
  this.showUpdatepwd = true;
  // this.logindata = {};
  this.showVerify= false;

}else{
 // this.hidespin($ionicLoading);
  this.invalidOTP = true;
  // var alertPopup = $ionicPopup.alert({
  //     title: 'Alert',
  //     template: this.res
  // });

  // alertPopup.then(function (res) {
  //     this.logindata = {};
  // });
}

})


}else{
// this.hidespin($ionicLoading); 
}
}
updatePwd(code){
  debugger
  //this.showspin();
  if(this.logindata.pwd == undefined || this.logindata.pwd == null || this.logindata.pwd == ''|| this.logindata.pwd == 'undefined'){
     // this.hidespin($ionicLoading);
     this.AlertService.presentAlert("Alert","Enter the New Password")
      // var alertPopup = $ionicPopup.alert({
      //     title: 'Alert',
      //     template: 'Enter the New Password'
      // });
      return false;
  }
  if(this.logindata.cnfpwd == undefined || this.logindata.cnfpwd == null || this.logindata.cnfpwd == ''|| this.logindata.cnfpwd == 'undefined'){
      // this.hidespin($ionicLoading);
      this.AlertService.presentAlert("Alert","Enter the Confirm Password")
      // var alertPopup = $ionicPopup.alert({
      //     title: 'Alert',
      //     template: 'Enter the Confirm Password'
      // });
      return false;
  }    
     
  if(this.logindata.pwd == this.logindata.cnfpwd && this.pwdcheck1 == false&& this.pwdcheck2 == false){  
      // console.log($rootScope.usercode,this.logindata.pwd,this.logindata,code);
      // callAPI.updatePWD($rootScope.usercode,this.logindata.pwd)
      this.Apiservice.updatePWD(this.logindata.user_name,this.logindata.pwd)
      .then( (response:any)=> {
        debugger
          console.log(response)
          this.resupdate= JSON.parse(JSON.parse(response.data));
          // this.hidespin($ionicLoading);
          if(this.resupdate == 'Password Updated Successfully'){
            this.AlertService.presentAlert("Alert","Updated Succesfully")
            

             
          }else{
             // this.invalidOTP = true;
            //  this.hidespin($ionicLoading);
            this.AlertService.presentAlert("Alert",this.resupdate)
              // var alertPopup = $ionicPopup.alert({
              //     title: 'Alert',
              //     template: this.resupdate
              // });

              // alertPopup.then(function (res) {
              //     this.logindata = {};
              // });
          }

      })

      // .error(function (response) {
      //     console.log(response);
      //     this.hidespin($ionicLoading);
      // });
  }else{
      // this.hidespin($ionicLoading);
      this.AlertService.presentAlert("Alert","Enter the vaild Password")
      // var alertPopup = $ionicPopup.alert({
      //     title: 'Alert',
      //     template: 'Enter the vaild Password'
      // });
      this.logindata.pwd='';
      this.logindata.cnfpwd='';
      this.pwdcheck1 = false;
      this.pwdcheck2 = false;
  } 

  
}

}
