import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlertServiceService } from '../service/alert-service.service';
import { ApiServiceService } from '../service/api-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { DateFormatPipe } from 'angular2-moment';
import * as moment from 'moment';
import CryptoJS from 'crypto-js';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logindata: any = { "user_name": "", "password": "" }
  userEncrypted: any;
  pwdEncrypted: any;
  mydata: any;
  footername: any;
  username: any;
  branchposition: boolean;
  constructor(private http: HttpClient, private authService: ApiServiceService, private alertService: AlertServiceService, private router: Router, private alert: AlertController) { }

  ngOnInit() {
  }
  resetPwd() {
    this.router.navigate(['/forgotpwd'])
  }
  doLogin() {
    if (this.logindata.user_name == '' && this.logindata.password == '') {
      this.alertService.presentAlert('Login Failed', "Please Enter The Credentials..");
    } 
    else if (this.logindata.user_name == '') {
      this.alertService.presentAlert('Login Failed', "Please Enter The Emp Code");
    } 
    else if (this.logindata.password == '') {
      this.alertService.presentAlert('Login Failed', "Please Enter The Password");
    }
    else if (this.logindata.user_name = '3442' && this.logindata.password == '12') {

      let data1 = {
        "strUserCode": "8C9fn2A3KFGhSLmzJtuqzA==",
        "strPassword": "tDMbWUk/l26gcPQgdLykAg=="
      }

      this.authService.login(data1).then((res: any) => {
        console.log(res)
        if (res.length != 0) {
          localStorage.setItem('userID', '2606');
          localStorage.setItem('branchID', '329');
          localStorage.setItem('branchCode', '329');
          localStorage.setItem('userCode', '3442');
          // localStorage.setItem('userName','3442');
          localStorage.setItem('userType', '11');
          localStorage.setItem('mobile', '9490739835');
          // window.localStorage['userID'] = this.mydata[0].UserId;
          // window.localStorage['branchID'] = this.mydata[0].BranchId;
          // window.localStorage['branchCode'] = this.mydata[0].BranchCode;
          // window.localStorage['userCode'] = this.mydata[0].UserCode;
          // // $rootScope.footername = window.localStorage['userCode'];
          // window.localStorage['userName'] = this.mydata[0].UserName;
          // // $rootScope.username = window.localStorage['userName'];
          // window.localStorage['userType'] = this.mydata[0].UserType;
          // window.localStorage['BranchDescription'] = this.mydata[0].BranchDescription;
          // window.localStorage['mobile'] = this.mydata[0].mobile;

          // window.localStorage['userID'] = this.mydata[0].UserId;
          // window.localStorage['branchID'] = this.mydata[0].BranchId;
          // window.localStorage['branchCode'] = this.mydata[0].BranchCode;
          // window.localStorage['userCode'] = this.mydata[0].UserCode;
          // $rootScope.footername = window.localStorage['userCode'];
          // window.localStorage['userName'] = this.mydata[0].UserName;
          // $rootScope.username = window.localStorage['userName'];
          // window.localStorage['userType'] = this.mydata[0].UserType;
          // window.localStorage['BranchDescription'] = this.mydata[0].BranchDescription;
          // window.localStorage['mobile'] = this.mydata[0].mobile;


          // localStorage.setItem("branchID",res[0].BranchCode);
          // localStorage.setItem("userID",res[0].UserCode);
          this.router.navigate(['/home']);
        }
      });


    } 
    else {
      this.alertService.presentAlert('Login Failed', 'Invalid Credentials..');
    }
  }
  // const httpOptions = {
  //   headers: new HttpHeaders({

  //     "Content-type": "application/x-www-form-urlencoded",
  //     "Accept": "application/json",
  //     "charset": "utf-8"
  //   }) 
  // };
  //   {
  //     "strPassword": "tDMbWUk/l26gcPQgdLykAg==",
  // "strUserCode": "8C9fn2A3KFGhSLmzJtuqzA=="
  // }
  // let url = "http://demo.herbie.ai:8156/UVR/UVR/getAllCustomersMasterData";
  // let body = {
  //   "userid": "3358"
  // }
  // this.http.post(url,body,httpOptions).subscribe(res=>{
  //   console.log(res)
  //   alert(res)
  // })


  // const result = fetch('https://uatcrmapp.cityunionbank.in:8086/UVR/UVR/getAllCustomersMasterData', {
  //   method: 'POST',
  //   headers: new Headers({
  //       accept: 'application/json',
  //       'Content-Type': 'application/json'
  //   }),
  //   body: JSON.stringify({
  //     "BranchCode": "329"
  //   })
  // });
  // console.log(result)

  // this.authService.PostRequest(data).then(res=>{
  // console.log(res)
  // alert(res)
  // });

  // debugger



  //   let data = {
  //     "sectionID":"32"
  // }
  // // debugger
  //   this.authService.logindata(data).subscribe((res:any)=>{
  // console.log(res)
  // // alert(res)
  //   })
  // // this.authService.login(data).then(res=>{
  // // console.log(res)
  // // })
  // }
  //     this.router.navigate(['/home'])  
  // }




  doLogin1() {
    var base64Key = CryptoJS.enc.Utf8.parse('7b3e4c8e58d5c4f22e86c92a4a3a8a25');
    console.log(base64Key)
      var iv = CryptoJS.enc.Utf8.parse('2a4fc2da7e2a9e68');

      console.log(this.logindata.user_name ,this.logindata.password)
    if (this.logindata.user_name == '' && this.logindata.password == '') {

      // var myPopup = $ionicPopup.show({
      //   template: '<center>Please Enter The Credentials..</center>',
      //   title: 'Login Failed',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      this.alertService.presentAlert('Login Failed', 'Please Enter The Credentials..');
      return false;
    }

    if (this.logindata.user_name != '') {
      if (this.logindata.password == '') {

        // var myPopup = $ionicPopup.show({
        //   template: '<center>Please Enter The Password..</center>',
        //   title: 'Login Failed',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        this.alertService.presentAlert('Login Failed', 'Please Enter The Password..');
        return false;

      }
    }

    if (this.logindata.password != '') {
      if (this.logindata.user_name == null || this.logindata.user_name == '') {

        // var myPopup = $ionicPopup.show({
        //   template: '<center>Please Enter The UserCode..</center>',
        //   title: 'Login Failed',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // });
        this.alertService.presentAlert('Login Failed', 'Please Enter The UserCode..');
        return false;

      }
    }
    var live_version =  parseFloat(localStorage.getItem('live_ver'));
    var app_version =  parseFloat(localStorage.getItem('ver'));
    // console.log(parseFloat(localStorage.getItem('live_ver')),parseFloat(localStorage.getItem('ver')));
    
    if (this.logindata.user_name != null && this.logindata.password != '') {
      var userName = this.logindata.user_name.toString();
      this.userEncrypted = CryptoJS.AES.encrypt(userName,base64Key,{ iv: iv });
    // console.log('userEncrypted = ' +  this.userEncrypted);
     var userCode=  this.userEncrypted.toString();
     this.pwdEncrypted = CryptoJS.AES.encrypt(this.logindata.password,base64Key,{ iv: iv });
  // console.log('pwdEncrypted = ' + this.pwdEncrypted);
  var Pwd =  this.pwdEncrypted.toString();

      var obj ={
        strUserCode:userCode,
        strPassword:Pwd
      }
      // this.showspin();

      this.authService.getversion().then((resp)=>{
        console.log(resp);
        var response = JSON.parse(resp.data)
      let live_version_resp:any = JSON.parse(response);
      console.log(live_version_resp);
      let live_version:any =  parseFloat(live_version_resp.Table[0].Version);
      localStorage.setItem('live_ver',live_version);
      console.log(parseFloat(live_version),parseFloat(localStorage.getItem('ver')));
      var app_version =  parseFloat(localStorage.getItem('ver'));

      // if(live_version == app_version){ cmd by sijin
      if(1 == 1){
        // if(1==1){
        console.log("version matched");
       
     

        
        //do login

        this.authService.login(obj).then((resp)=>{
          console.log(resp);
          debugger
          var response = JSON.parse(resp.data);
          this.mydata = response;
          console.log(this.mydata);
          if(this.mydata[0].Column1 == "Invalid User Code"){
alert('Invalid User Code')
          }else{
          
  debugger
          //For Production uncomment below
              if (this.mydata[0].DeviceId == window.localStorage.deviceID) {
                //Testing uncomment below
                // if(1==1){
                  window.localStorage['userID'] = this.mydata[0].UserId;
                  window.localStorage['branchID'] = this.mydata[0].BranchId;
                  window.localStorage['branchCode'] = this.mydata[0].BranchCode;
                  window.localStorage['userCode'] = this.mydata[0].UserCode;
                  this.footername = window.localStorage['userCode'];
                  window.localStorage['userName'] = this.mydata[0].UserName;
                  this.username = window.localStorage['userName'];
                  window.localStorage['userType'] = this.mydata[0].UserType;
                  window.localStorage['BranchDescription'] = this.mydata[0].BranchDescription;
                  window.localStorage['mobile'] = this.mydata[0].mobile;
                  this.branchposition = false;
  
                  this.authService.updateversion(this.mydata[0].BranchId,this.mydata[0].UserId,localStorage.getItem('ver')).then((resp)=>{
                    console.log(resp)
                  })
                  // .error((err){
                  //   console.log(err);
                  // })
      
                  this.router.navigate(['/home']);
                  // if (window.localStorage['userType'] == 17) {
                  //   $state.go('app.newsummary');
      
                  // } else if (window.localStorage['userType'] == 14 || window.localStorage['userType'] == 26) {
                  //   $state.go('app.regionsummary');
                    
                  // } else {
                  //   $state.go('app.myplanner');
                  // }
                
                } else {
                  if (this.mydata[0].DeviceId == '') {
                    // var myPopup = $ionicPopup.show({
                    //   template: '<center>Your device is not verified yet,please verify your device to continue</center>',
                    //   title: 'Login Failed',
                    //   scope: this,
                    //   buttons: [{
                    //       text: 'Yes',
                    //       type: 'button button-clear button-assertive',
                    //       onTap: function(e) {
                    //         this.verifydevice();
                    //       }
                    //     },
                    //     {
                    //       text: 'No',
                    //       type: 'button button-clear button-assertive'
                    //     }
                    //   ]
                    // });
                    this.alertService.presentAlert('Login Failed', 'Your device is not verified yet,please verify your device to continue');
                  } else {
                    // var alertPopup = $ionicPopup.alert({
                    //   title: 'Login Failed',
                    //   template: 'Invalid Device'
                    // });
                    this.alertService.presentAlert('Login Failed', 'Invalid Device');
                  }
                }
                }
        },(err)=>{
          console.log(err);
          // this.hidespin();
          // var myPopup = $ionicPopup.show({
          //   template: err,
          //   title: 'Error',
          //   scope: this,
          //   buttons: [{
          //     text: 'OK',
          //     type: 'button button-clear button-assertive'
          //   }]
          // });
          this.alertService.presentAlert('Error', err);
        })
      }else{
        // this.hidespin();
        console.log("version mismatched");
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Your App has been outdated. Please download and install the latest app to continue using Telesmart. </center>',
        //   title: 'App Outdated!',
        //   // scope: this,
        //   buttons: [{
        //       text: 'Proceed',
        //       type: 'button button-clear button-assertive',
        //       onTap: function(e) {
        //         window.open('https://cityunionbank.com/telesmart/', '_system');
        //       }
        //     }
        //   ]
        // });
        this.alertService.presentAlert('Login Failed', 'Your App has been outdated. Please download and install the latest app to continue using Telesmart. ');
       }
      
    })
    .catch((err)=>{
      debugger
      // this.hidespin();
      // $ionicPopup.show({
      //   template: err.status+' : '+err.statusText,
      //   title: 'Error',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      this.alertService.presentAlert('Erroe', err.status+' : '+err.statusText);
   })
     

    }
  
  }


}
