import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlertServiceService } from '../service/alert-service.service';
import { ApiServiceService } from '../service/api-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { DateFormatPipe } from 'angular2-moment';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logindata: any = { "user_name": "", "password": "" }
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
          // window.localStorage['userID'] = $scope.mydata[0].UserId;
          // window.localStorage['branchID'] = $scope.mydata[0].BranchId;
          // window.localStorage['branchCode'] = $scope.mydata[0].BranchCode;
          // window.localStorage['userCode'] = $scope.mydata[0].UserCode;
          // // $rootScope.footername = window.localStorage['userCode'];
          // window.localStorage['userName'] = $scope.mydata[0].UserName;
          // // $rootScope.username = window.localStorage['userName'];
          // window.localStorage['userType'] = $scope.mydata[0].UserType;
          // window.localStorage['BranchDescription'] = $scope.mydata[0].BranchDescription;
          // window.localStorage['mobile'] = $scope.mydata[0].mobile;

          // window.localStorage['userID'] = $scope.mydata[0].UserId;
          // window.localStorage['branchID'] = $scope.mydata[0].BranchId;
          // window.localStorage['branchCode'] = $scope.mydata[0].BranchCode;
          // window.localStorage['userCode'] = $scope.mydata[0].UserCode;
          // $rootScope.footername = window.localStorage['userCode'];
          // window.localStorage['userName'] = $scope.mydata[0].UserName;
          // $rootScope.username = window.localStorage['userName'];
          // window.localStorage['userType'] = $scope.mydata[0].UserType;
          // window.localStorage['BranchDescription'] = $scope.mydata[0].BranchDescription;
          // window.localStorage['mobile'] = $scope.mydata[0].mobile;


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
}
