import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ApiServiceService } from './../service/api-service.service';
import { AlertServiceService } from './../service/alert-service.service';
import {Router}  from '@angular/router'
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
  providers: [
    DatePipe],
})
export class UserprofilePage implements OnInit {
  profileData: any;
  userForm : FormGroup
  constructor(private formbuilder: FormBuilder,private apiservice: ApiServiceService,
   private alertService: AlertServiceService,private datepipe: DatePipe,
   private route: Router) { }

  ngOnInit() {
    this.userForm = this.formbuilder.group({
      branch: [''],
      empcode: [''],
      empname: [''],
      usertype: [''],
      emailid: [''],
      mobile: [''],
      dob: ['']
    });
    var usercodeno = window.localStorage['userID'];
    this.show_user_profile(usercodeno)
  }
  show_user_profile(usercodeno) {
    this.apiservice.userprofiledata(usercodeno).then(userDetails=> {
  console.log("userDetails",userDetails);
      var user = JSON.stringify(userDetails.data);
      this.profileData = JSON.parse(user);
      this.profileData = JSON.parse(this.profileData);
      this.profileData = JSON.parse(this.profileData);
     

this.userForm.patchValue({
  branch: this.profileData[0].BRANCH,
  empcode: this.profileData[0].UserCode,
  empname: this.profileData[0].USERNAME,
  usertype: this.profileData[0].TYPE,
  emailid: this.profileData[0].EmailID,
  mobile: this.profileData[0].MOBILE,
  dob: this.datepipe.transform(this.profileData[0].DOB, 'dd.MM.yyyy'),
  // dob: this.profileData[0].DOB ,
})
      console.log(this.profileData);

      // console.log( this.profileData);
      // console.log( this.profileData[0].MOBILE.length);
      //  this.myemail =  this.profileData[0].EmailID;
    

      //      this.data.mobilenumber =  this.profileData[0].MOBILE;
     

      // var dateofbirth =  this.profileData[0].DOB;
      // var dateofb = $filter('date')(dateofbirth, 'dd-MM-yyyy');
      // console.log(dateofb);
      //  this.dob = dateofb;
      // console.log(dateofbirth.slice(0, 10));
    })

  }

  goToMyplannerPage() {
    console.log("routerNavigate")
    this.route.navigateByUrl('/myplanner');
  }
  saveuserDetails(UserDetails) {
    console.log(UserDetails.value);
              var loginid = window.localStorage['userID'];
              var useremail = UserDetails.value.emailid;
              var usermobile = UserDetails.value.mobile;
              var dob = UserDetails.value.dob;
              // dob = this.datepipe.transform(dob, 'dd.MM.yyyy');
              // var dob= UserDetails.value.dob;
              // console.log(useremail);
              console.log(loginid);
              // if(){
              //      var alertPopup = $ionicPopup.alert({
                     
              //         template: '<div align="center">Enter Mobile No</div>'
      
              //     });
              //      return false;
              // }
      
                if(useremail == undefined || useremail == null || useremail == ""){
                  this.alertService.presentAlert("warning", "email is required");
                 
                  // alert("Enter Mobile No");
                  //  var alertPopup = $ionicPopup.alert({
                     
                  //     template: '<div align="center">Enter Mobile No</div>'
      
                  // });
                  //  return false;
              }else {
                this.apiservice.userprofileupload(loginid, useremail, usermobile, dob).then(response => {
                  this.alertService.presentAlert("Success", "Save Successfully");
                  console.log(response);
                  // this.show_user_profile();
                })
              }
      
           
              
              // .success(function(resp) {
              //     console.log(resp);
              //     var alertPopup = $ionicPopup.alert({
              //         title: 'Save',
              //         template: '<div align="center">Successfully Updated</div>'
      
              //     });
              //       $scope.show_user_profile();
              // })
            
              //     .error(function() {
              //         $ionicPopup.alert({
              //             title: 'Oops!',
              //             template: '<div align="center">Error, Please Enter Your Credentials </div> '
              //         });
              //     });
        
      
    
  }
}

