import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AlertServiceService } from 'src/app/service/alert-service.service';
import * as moment from "moment";
import { ApiServiceService } from 'src/app/service/api-service.service';
import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'actStatusPipe'
})
@Component({
  selector: 'app-mywishfollowupmodal',
  templateUrl: './mywishfollowupmodal.page.html',
  styleUrls: ['./mywishfollowupmodal.page.scss'],
})
export class MywishfollowupmodalPage implements OnInit {
  express:any={}
  followUpCust: any={};
  followup:any={};
  nextcalldate: string;
  nextfollwuptime: string;
  Cusdata: any;
  finalfollowup: any={};
  customerData: any;
  mydata: any;
  customerBranchID: any;
  leadconvertmodel: boolean=false;
  getusername: any;
  constructor(private apiservice:ApiServiceService,private alert:AlertServiceService,private modalController:ModalController,private navParams:NavParams) { }

  ngOnInit() {
    this.Cusdata = this.navParams.get('Data');
    console.log(this.Cusdata);
  }
  checkbox_forModel(Event){
    console.log(Event);
    
    if(Event){
      this.express.checkLeadConvert = 'YES';
      this.finalfollowup.cmrcustid = this.Cusdata.ROWID;
      this.leadconvertmodel = true;
    }else{
      this.express.checkLeadConvert = "NO";
      this.leadconvertmodel = false;
    }
    console.log(this.express.checkLeadConvert)
  }

  saveConversions(){
     
    var productTypeID = '11';
    var txtcustId = this.followup.customerId;
    // var  firstName = this.followup.firstName;
    var firstName = this.followup.firstName;
    var lastName = this.followup.lastName;
    var MobIleNO = this.followup.mobileNo;
    var functionID = '1';
    var BranchID = window.localStorage['branchID'];
    var username = window.localStorage['userName'];
    var userid = window.localStorage['userID'];
    var userCode = window.localStorage['userCode'];
    var remarks =this.followup.Remarks;
    var ROWID =  this.finalfollowup.cmrcustid
    var customerbranchID =  this.customerBranchID;

    if(this.followup.customerId == '' || this.followup.customerId == undefined || this.followup.customerId == null){
      // var myPopup =  $ionicPopup.show({
      //   template: '<center>Enter ID</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      this.alert.presentAlert('Warning','Enter ID')
      return false;
    }

    // if(document.getElementById("customerFirstName").value == '' ||document.getElementById("customerFirstName").value == undefined || document.getElementById("customerFirstName").value == null){
    //   console.log("fFIRSTNAME",document.getElementById("customerFirstName").value)
    //   var myPopup =  $ionicPopup.show({
    //     template: '<center>Enter First Name</center>',
    //     title: 'Warning',
    //     scope: this,
    //     buttons: [{
    //       text: 'OK',
    //       type: 'button button-clear button-assertive'
    //     }]
    //   });
    //   this.hidespin($ionicLoading);
    //   return false;
    // }

    if(firstName == '' || firstName == undefined || firstName == null){
      // var myPopup =  $ionicPopup.show({
      //   template: '<center>Enter First Name</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      this.alert.presentAlert('Warning','Enter First Name')
      return false;
    }



    if(lastName == '' || lastName == undefined || lastName == null){
      
      // var myPopup =  $ionicPopup.show({
      //   template: '<center>Enter Last Name</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      this.alert.presentAlert('Warning','Enter Last Name')
      return false;
    }

    if(MobIleNO ==  '' || MobIleNO == undefined || MobIleNO == null){
      // var myPopup =  $ionicPopup.show({
      //   template: '<center>Enter Mobile Number</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons: [{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // });
      // this.hidespin($ionicLoading);
      this.alert.presentAlert('Warning','Enter Mobile Number')
      return false;
    };

    if(this.followup.Remarks == '' || this.followup.Remarks == undefined || this.followup.Remarks == null){
      var remarks:any = 'test';
    }
   
    // console.log("customerbranchID",customerbranchID)
    // this.showspin();
    // console.log("finalconversions:-",functionID,BranchID,txtcustid,firstname,lastname,mobileno,username,userid,userCode,remarks,ROWID,customerbranchID)
    this.apiservice.UpdateFollowupwishlistLeadConversion(functionID,BranchID,productTypeID,txtcustId,firstName,lastName,MobIleNO,userid,userCode,username,remarks,ROWID,customerbranchID)
    .then((response)=>{
      console.log("finalsaveconversions",response);
      // this.hidespin();
      var respMsg = response;
      alert(respMsg)
      this.clearEditModal();
      this.clearfollowups();
      // this.leadConvesion.hide();
      // this.followupCustomerUpdate.hide();
      
    })
    // .error(function(response) {
      
    //   this.hidespin();
    //   console.log(response);
    // });
  }
  clearfollowups(){
    console.log("cleareverything")
    this.customerBranchID = '';
    this.followup.firstName = '';
    this.followup.lastName = '';
    this.followup.mobileNo = '';
    this.followup.Remarks = '';
    this.finalfollowup.cmrcustid = '';
    this.followup.customerId = '';
  }
  clearEditModal(){
    this.express.selectele = '';
    this.express.callout = '';
    this.express.followupdate = '';
    this.express.followuptime = '';
    this.express.jointcode = '';
    this.express.Remarks = '';
    this.express.checkLeadConvert = '';
  }

  searchCustomer(a){
    var custoId = a;
    console.log('cutsomerrrrIIDD:-',custoId)
    
    
    
    if(custoId == '' || custoId == undefined || custoId == null ){

      // $ionicPopup.alert({
      //   title: '',
      //   template: '<div align ="center">Enter Customer Id</div>'

      // });
      this.alert.presentAlert('Warning','Enter Customer Id')
    };
    // this.showspin();
    debugger
    this.apiservice.getcustomerdetails(custoId).then((response:any)=>{
      // this.hidespin();
      debugger
    console.log("searchRes",response)
    this.customerData = JSON.parse(response.data);
    console.log(this.customerData)
    this.mydata = JSON.parse(this.customerData);

    this.followup.firstName = this.mydata[0].Nfirstname;
    this.followup.lastName = this.mydata[0].Nlastname;
    this.followup.mobileNo = this.mydata[0].Nmobile;
    this.customerBranchID = this.mydata[0].NBranch;
      console.log("logig",this.mydata[0].Nfirstname);
    if( this.mydata[0].Nmobile  == '' &&  this.mydata[0].Nfirstname == ''){
      // var myPopup = $ionicPopup.show({
      //   template: '<center>Please Enter the Valid Customer Id</center>',
      //   title: 'Warning',
      //   scope: this,
      //   buttons:[{
      //     text: 'OK',
      //     type: 'button button-clear button-assertive'
      //   }]
      // })
      this.alert.presentAlert('Warning','Please Enter the Valid Customer Id')
    }

    })

    
this.leadConversionClear();
  }


  leadConversionClear(){
    this.followup.firstName = '';
    this.followup.lastName = '';
    this.followup.mobileNo = '';
    this.customerBranchID = '';
  }



  checkusercode(val){
    var usercode = val;
    var branchid = window.localStorage['branchID'];
    var struserCode = window.localStorage['userCode'];
    

    // this.showspin();
    this.apiservice.checkJointCode(struserCode,usercode, branchid)
    .then((response:any)=>{
      // this.hidespin();
      
     var response = JSON.parse(response.data);
     response = JSON.parse(response)
      console.log(response);
      if (response == "This User Not in this Branch"){
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Please Enter The Valid Emp Code</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons: [{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // })
        this.alert.presentAlert('Warning','Please Enter The Valid Emp Code')
        this.express.jointusername = "";
        this.express.jointusercode = "";
        // this.hidespin();
      return false;
      }else if(response == "Please Enter the Valid User Code"){
        // var myPopup = $ionicPopup.show({
        //   template: '<center>Please Enter the Valid Emp Code</center>',
        //   title: 'Warning',
        //   scope: this,
        //   buttons:[{
        //     text: 'OK',
        //     type: 'button button-clear button-assertive'
        //   }]
        // })
        this.alert.presentAlert('Warning','Please Enter The Valid Emp Code')
        this.express.jointusername = "";
        this.express.jointusercode = "";
        // this.hidespin();
      return false;
      }else{
        this.getusername = response;
        this.express.jointusername = this.getusername;
        console.log(this.getusername)
      }
    })
    // .error(function(response) {
    //   this.hidespin();
    //   return false;
    //   console.log(response);
    // });

    
  }


  checkbox(Event){
    console.log(Event);
    
    if(Event){
      this.express.JointVisit = 'YES';
    }else{
      this.express.JointVisit = "NO"
    }
    console.log(this.express.JointVisit)
  }

  // private express:any= {};
      submitUpdatedfollowUp (){
        var calltype = this.express.selectele;
        var responseid = this.express.callout;
        var crmcallid = this.followUpCust.cmrcustid
        // var Rowid = this.followUpCust.Rowid;
        var Rowid = '0';
        console.log("crmcustid",crmcallid)

        if(this.express.selectele =='' || this.express.selectele == undefined || this.express.selectele == null){
          // var myPopup =  $ionicPopup.show({
          //   template: '<center>Select Call Type</center>',
          //   title: 'Warning',
          //   scope: this,
          //   buttons: [{
          //     text: 'OK',
          //     type: 'button button-clear button-assertive'
          //   }]
          // });
          // this.hidespin($ionicLoading);
          this.alert.presentAlert('Warning','Select Call Type')
          return false;
        }
        

        // if(this.express.selectele == "P"){
        //   if(this.express.JointVisit == '' || this.express.JointVisit == undefined || this.express.JointVisit == null || this.express.JointVisit == 'NO'){
        //     var myPopup = $ionicPopup.show({
        //       template: '<center>Please select Joint Visit</center>',
        //       title: 'Warning',
        //       scope: this,
        //       buttons:[{
        //         text: 'OK',
        //         type: 'button button-clear button-assertive'
        //       }]
        //     });

        //     this.hidespin($ionicLoading);
        //     return false;
        //   }
        // }

        if(this.express.selectele == "P" && this.express.JointVisit == "YES"){
          if(this.express.jointcode == null || this.express.jointcode == "" || this.express.jointcode == undefined){
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
            this.alert.presentAlert('Warning','Enter Joint Usercode')
            return false;
          }
        }
        if(this.express.selectele == "T"){
          var jointvisit = 'test'
          var usercode = 'test'
        }if(this.express.JointVisit == "NO" || this.express.JointVisit == '' || this.express.JointVisit == undefined || this.express.JointVisit == null){
          var jointvisit = 'test'
          var usercode = 'test'
          console.log("noooooooooooo",usercode,jointvisit)
        }
        
        if(this.express.selectele == "P" && this.express.JointVisit == "YES"){
          var jointvisit:string = this.express.JointVisit;
          var usercode:string = this.express.jointcode;
          console.log("usercode",usercode)
        }
        

        if(this.express.callout == '' || this.express.callout == undefined || this.express.callout == null){
          // var myPopup =  $ionicPopup.show({
          //   template: '<center>Select Call OutCome</center>',
          //   title: 'Warning',
          //   scope: this,
          //   buttons: [{
          //     text: 'OK',
          //     type: 'button button-clear button-assertive'
          //   }]
          // });
          // this.hidespin($ionicLoading);
          this.alert.presentAlert('Warning','Select Call OutCome')
          return false;
        }
        if(this.express.callout == '2'){
          if(this.express.followupdate == "" || this.express.followupdate == undefined || this.express.followupdate == null || this.express.followuptime == '' || this.express.followuptime == undefined || this.express.followuptime == null){
            // var myPopup = $ionicPopup.show({
            //   template: '<center>Provide followup details.</center>',
            //   title: 'Warning',
            //   scope: this,
            //   buttons:[{
            //     text: 'OK',
            //     type: 'button button-clear button-assertive'
            //   }]
            // })
            // this.hidespin($ionicLoading);
            this.alert.presentAlert('Warning','Provide followup details.')
            return false;
          }else{
            this.nextcalldate = moment(this.express.followupdate).format('YYYY-MM-DD');
            this.nextfollwuptime = moment(this.express.followuptime).format('h.mm a');
              // this.nextcalldate1 = $filter('date')(this.data.followupdate, 'yyyy-MM-dd');
              // this.followuptime = $filter('date')(this.data.followuptime, 'h.mm a');
              var nextcalldate = this.nextcalldate + ' ' + this.nextfollwuptime;
              var nextcalldate = this.nextcalldate;
              var nextfollwuptime =  this.nextfollwuptime 
              
            // this.nextcalldate = $filter('date')(this.express.followupdate, 'yyyy-MM-dd');
            // this.nextfollwuptime = $filter('date')(this.express.followuptime, 'h.mm a');
            // var nextcalldateTime = this.nextcalldate + ' ' + this.nextfollwuptime;
            // var nextcalldate = this.nextcalldate;
            // var nextfollwuptime =  this.nextfollwuptime
          }
        }if(this.express.callout != '2'){
          var nextcalldate = "test";
          var nextfollwuptime = 'test';
        }

        if(this.express.Remarks == '' || this.express.Remarks == undefined || this.express.Remarks == null){
          var remarks:any='test'
         }else{
          var remarks = this.express.Remarks;
        }

        console.log("final data",calltype,responseid,remarks,nextcalldate,nextfollwuptime,jointvisit,usercode,Rowid,usercode)
        var FunctionID = '1';
        var BranchID = window.localStorage['branchID'];
        var txtcustid ='test';
        var firstname = this.followUpCust.Name;
        var lastname = 'test';
        var moileno = 'test';
        var username = window.localStorage['userName'];
        var userid = window.localStorage['userID'];
        var strUserCode = window.localStorage['userCode'];
        // this.showspin();
        console.log("UpdateFollowupwishlistLeadConversion1", FunctionID,BranchID,txtcustid,firstname,lastname,moileno,userid,strUserCode,username,remarks,nextcalldate,nextfollwuptime,responseid,crmcallid,calltype,Rowid,usercode)
        this.apiservice.UpdateFollowupwishlistLeadConversion1(FunctionID,BranchID,txtcustid,firstname,lastname,moileno,userid,strUserCode,username,remarks,nextcalldate,nextfollwuptime,responseid,crmcallid,calltype,Rowid,usercode)
        .then((res:any)=>{
          // this.hidespin();
          var response = JSON.parse(res.data)
          response = JSON.parse(response)
          console.log('responseForFinalsave',response)
          if(response == "Successfully Saved"){
            // var myPopup = $ionicPopup.show({
            //   template: '<center>Saved Successfully</center>',
            //   title: 'Alert',
            //   scope: this,
            //   buttons: [{
            //     text: 'OK',
            //     type: 'button button-clear button-assertive',
            //     onTap:function (e){
            //       this.followupCustomerUpdate.hide();
            //       // this.getFollowUpsdata()
            //       this.clearRefollowup();
            //     }
            //   }]
            // })
            this.alert.presentAlert('Alert','Successfully Saved.')
          }if(response == "Enable Lead Convert and Enter CustomerId"){
            // var myPopup = $ionicPopup.show({
            //   template: '<center>Enable Lead Convert and Enter CustomerId</center>',
            //   title: 'Oops!',
            //   scope: this,
            //   buttons: [{
            //     text: 'OK',
            //     type: 'button button-clear button-assertive',
            //     onTap:function (e){
            //       // this.followupCustomerUpdate.hide();
            //       // this.getFollowUpsdata()
            //       this.clearRefollowup();
            //     }
            //   }]
            // })
            this.alert.presentAlert('Oops!','Enable Lead Convert and Enter CustomerId.')
          }

          // else {
          //   var myPopup = $ionicPopup.show({
          //     template: '<center>Error Try again.</center>',
          //     title: 'Alert',
          //     scope: this,
          //     buttons: [{
          //       text: 'OK',
          //       type: 'button button-clear button-assertive',
          //       onTap:function (e){
          //         // this.followupCustomerUpdate.hide();
          //         this.clearRefollowup();
                 
                  
          //       }
                
          //     }]
          //   })
          // }
        })
        // .error(function(response) {
        //   this.hidespin();
        //   console.log(response);
        // });
      }
}
