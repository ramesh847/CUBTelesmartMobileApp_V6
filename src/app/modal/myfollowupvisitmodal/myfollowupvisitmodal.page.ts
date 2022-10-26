import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { AlertServiceService } from 'src/app/service/alert-service.service';
import { DatePipe } from '@angular/common';
import { timeStamp } from 'console';
@Component({
  selector: 'app-myfollowupvisitmodal',
  templateUrl: './myfollowupvisitmodal.page.html',
  styleUrls: ['./myfollowupvisitmodal.page.scss'],
  providers:[DatePipe]
})
export class MyfollowupvisitmodalPage implements OnInit {
  //callermobile: string;
  enable:boolean=false
  customerName: any;
  customerMobile: any;
  customerId: any;
  purpose: any;
 // callerName: string;
  result: any;
  resout: any;
  clickcallID: any;
  obj:any={};
  endDate: any;
  currDate: any;
  clickcall:any= {};
  callerName:any;
callerMobile:any;
  Cusdata: any;
  statusResp: any;
  repStatus: any;
  EndCallobj:any={};
  interval: NodeJS.Timeout;
  followupvisits:any = {};
  lat1: any;
  lng1: any;
  myvalue:boolean=false
  hidecalloutcome: boolean;
  DisLat: any;
  DisLong: any;
  CUSTOMER_ID;
RO_CODE;
START_TIME;
  voicerecording: string;
  firstname1: any;
  addbaselocno: string;
  dateToday1: string;
  purposeid: any;
  purposename: any;
  purposetype: any;
  cust_id: any;
  custDetails: any;
  followupvisitscustomerdata: any;
  firstWords: any[];
//customerName:any;
//customerId:any;
//purpose:any;

  constructor(public modalController: ModalController,private alert:AlertController,private datepipe:DatePipe,private AlertService:AlertServiceService,private navParams:NavParams,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    debugger
    this.Cusdata = this.navParams.get('Data');
    console.log(this.Cusdata);

localStorage.setItem('branchID','329');
localStorage.setItem('branchCode','329');
localStorage.setItem('userCode','3442');
localStorage.setItem('userID','2606');
this.clickcall.callerName= localStorage.setItem('UserName','NAGARAJU M');
// localStorage.setItem('userName','3442');
localStorage.setItem('userType','11');
//this.clickcall.callerMobile=localStorage.setItem('mobile','9490739835');
this.clickcall.customerName=this.Cusdata.CUSTOMER_NAME;
this.clickcall.customerMobile=this.Cusdata.CONTACT_NO;
this.clickcall.customerId=this.Cusdata.CUSTOMER_ID;
this.clickcall.purpose=this.Cusdata.PURPOSE.split('/').join('-');;
this.obj.callerName=localStorage.getItem('UserName')
this.obj.callermobile=localStorage.getItem('mobile')
    this.obj.customerName=this.Cusdata.CUSTOMER_NAME     
    
   this.obj.customerMobile=this.Cusdata.CONTACT_NO;
  this.obj.customerId=this.Cusdata.CUSTOMER_ID;
    this.obj.purpose=this.Cusdata.PURPOSE.split('/').join('-');
    var currentDate=new Date();
    this.obj.currDate=currentDate
   // this.callermobile=localStorage.getItem('mobile');
    //this.usertype=localStorage.getItem('userType')

    this.Apiservice.clickToCallFollowUP(this.obj.callermobile,this.obj.customerMobile,this.obj.purpose).then((response:any)=> {
      debugger
      console.log(response.data)
      // this.hidespin($ionicLoading);
      this.result = JSON.parse(response.data);
      this.resout = JSON.parse( JSON.parse(this.result));
      
      if(this.resout.status == '200'){
        this.clickcallID = this.resout.data;
        this.callinterval();
        // this.CallConnectModal.show();
      }else{
        this.AlertService.presentAlert("Alert",this.resout)
       // alert(response)
      // var alertPopup = $ionicPopup.alert({
      //   title: 'Alert',
      //   template: response
      // });
    
      // alertPopup.then(function(res) {
      // });
      }
  
  
    })
    

  }
  modelDissmiss() {
    this.modalController.dismiss();
  }

  callinterval(){
    debugger
    this.interval = setInterval(() => {
      this.callResp();
          // clearInterval(this.interval)
        }, 10000);
 
    //   if ( angular.isDefined(gettimer) ) return;
    //  var gettimer =$interval( function(){ this.callResp(); }, 10000);

    
  }
  stopCall(){
    clearInterval(this.interval)
  }
 callResp(){
  console.log(this.clickcallID.id);
  var id = this.clickcallID.id;
  this.Apiservice.callStatusFollowUp(id)
  .then((response:any)=> {
  //  console.log(response)
    this.statusResp= JSON.parse( JSON.parse(response.data))
    this.repStatus = this.statusResp;
    //this.hidespin($ionicLoading);
    console.log(JSON.parse( JSON.parse(response.data)).length);
    if(JSON.parse( JSON.parse(response.data)).length == 1){
      console.log(this.repStatus.data[0].status2);
    if(this.repStatus.data[0].status2 != null){
      console.log(this.repStatus.data[0]);
      if(this.repStatus.data[0].status2 == 'ANSWER'){
        this.stopCall();
       // this.CallConnectModal.hide();
        console.log(this.currDate);
        this.EndCallobj.callerName=window.localStorage['userName'];
        this.EndCallobj.callerMobile=window.localStorage['mobile'];
        this.EndCallobj.customerName=this.Cusdata.CUSTOMER_NAME;
        this.EndCallobj.customerMobile=this.Cusdata.CONTACT_NO;
        this.EndCallobj.customerId=this.Cusdata.CUSTOMER_ID;
        //this.EndCallobj.purpose=this.item.purpose_id;
        this.EndCallobj.purposeText= this.Cusdata.PURPOSE.split('/').join('-');
        this.EndCallobj.endStatus= 'A';
        //var currentDate= new Date();
        this.EndCallobj.currDate = this.repStatus.data[0].start_time;
        this.EndCallobj.endDate = this.repStatus.data[0].end_time;
        this.Endcall(this.EndCallobj);
        this.End(this.Cusdata);
      }else{
       

        const alert = this.alert.create({
          header: '<center>'+ this.repStatus.data[0].status2 +'. Would you like to update?</center>',
          cssClass:'alertHeader',
          // subHeader: 'Subtitle',
          message: '',
          buttons: [{ text     : 'Yes',
         
          
          handler:(e) => {
            this.clickcall={};
              //this.CallConnectModal.hide();
              this.stopCall();
              console.log(this.Cusdata);
              this.EndCallobj.callerName=window.localStorage['userName'];
              this.EndCallobj.callerMobile=window.localStorage['mobile'];
              this.EndCallobj.customerName=this.Cusdata.CUSTOMER_NAME;
              this.EndCallobj.customerMobile=this.Cusdata.CONTACT_NO;
              this.EndCallobj.customerId=this.Cusdata.CUSTOMER_ID;
              //this.EndCallobj.purpose=this.item.purpose_id;
              this.EndCallobj.purposeText= this.Cusdata.PURPOSE.split('/').join('-');
              this.EndCallobj.endStatus= 'I';
              //var currentDate= new Date();
              this.EndCallobj.currDate = this.repStatus.data[0].start_time;
              this.EndCallobj.endDate = this.repStatus.data[0].end_time;
              this.Endcall(this.EndCallobj);
              this.End(this.Cusdata);
          }
        },
        {
          text     : 'No',
         
          
          handler:(e) => {
            this.clickcall={};
             // this.CallConnectModal.hide();
              this.stopCall();
             //this.followupcallsUpdmodal(this.item);
          }
        }
      ]
        });


      }
      
    }
  }
  })
  

}


  Endcall(obj){
    debugger
    var clickid=this.clickcallID.id
    console.log(obj);
    if(obj.endDate == undefined || obj.endDate == 'undefined' || obj.endDate == null || obj.endDate == ''){
      var enDate= new Date();
      this.endDate =this.datepipe.transform(enDate,'yyyy-MM-dd hh-mm-ss')
      // this.endDate = $filter('date')(enDate, 'yyyy-MM-dd hh-mm-ss');
      // this.endDate = $filter('date')(enDate, 'hh-mm-ss');
      console.log(this.endDate);
      }else{
        var enDate= new Date(obj.endDate);
        this.endDate =this.datepipe.transform(enDate, 'yyyy-MM-dd hh-mm-ss');
        console.log(this.endDate);
      }
      var curDate= new Date(obj.currDate);
      this.currDate = this.datepipe.transform(curDate, 'yyyy-MM-dd hh-mm-ss');
      console.log(this.currDate);
    var branchid = window.localStorage['branchID'];
    var usertype = window.localStorage['userType'];
    var userid = window.localStorage['userID'];
    var purpose = obj.purpose;
    this.Apiservice.callStatusLead(clickid).then((res:any)=>{
      debugger
      if(res !='' ){
        if(JSON.parse(JSON.parse(res)).data.length !='0'){
          var xyz=JSON.parse(JSON.parse(res)).data
        
          console.log(xyz)
        
          if(xyz[0].recording==''){
            this.voicerecording='No Record'
          }else{
          this.voicerecording=xyz[0].recording.slice(28)
          }
          
      
        var xyz=JSON.parse(JSON.parse(res)).data
        this.Apiservice.EndCAllClickvisit(obj.customerId,obj.customerName,obj.customerMobile,userid,branchid,obj.callerMobile,xyz[0].start_time,xyz[0].end_time,purpose,xyz[0].duration, xyz[0].billsec,xyz[0].credits,xyz[0].status,xyz[0].status2,xyz[0].recording.slice(27),xyz[0].location,xyz[0].provider)
        .then((response:any)=> {
          debugger
          console.log(response)
          //this.hidespin($ionicLoading);
          if(obj.endStatus == 'I'){

            const alert = this.alert.create({
              header: 'You have ended the call explicitly. would you like to update?',
              cssClass:'alertHeader',
              // subHeader: 'Subtitle',
              message: '',
              buttons: [{ text     : 'Yes',
             
              
              handler:(e) => {
                this.clickcall={};
                // this.CallConnectModal.hide();
                 this.stopCall();
                 console.log();
                 this.End(this.currDate);
              }
            },
            {
              text     : 'No',
             
              
              handler:(e) => {
                this.clickcall={};
                //this.CallConnectModal.hide();
                this.stopCall();
                 console.log(this.Cusdata);
                 //this.followupcallsUpdmodal(this.item);
              }
            }
          ]
            });
        
            // await alert.present();

         
        }else{
          this.clickcall={};
               // this.CallConnectModal.hide();
                this.stopCall();
                console.log(this.Cusdata);
                this.End(this.Cusdata);
        }
        })
      }else{
        this.stopCall();
                console.log(this.Cusdata);
                this.End(this.Cusdata);
      }
        
      }else{
        this.stopCall();
                console.log(this.Cusdata);
                this.End(this.Cusdata);
      }
    })
  
  
   
  }

  End(obj) {
    debugger
    console.log(obj);
    var latlng=obj.LatValue+','+obj.LongValue;
    this.lat1=obj.LatValue;
    this.lng1=obj.LongValue;

    //this.setlatlong(obj.LADDRESS);

    if(obj.LADDRESS != 'undefined'&& obj.LADDRESS != undefined && obj.LADDRESS != 'null' && obj.LADDRESS != null){
      this.myvalue = true;
    }else{
      this.myvalue = false;
    }
    
     

    // try {
      console.log(obj);
//Condition to hide call closed option for NPA followup and VVIP Visits purposes
if(obj.PURPOSE != "NPA followup" && obj.PURPOSE != "VVIP Visits"){
  this.hidecalloutcome = false;
}else{
  this.hidecalloutcome = true;
}

      // PURPOSE
      this.DisLat = obj.LatValue;
      this.DisLong = obj.LongValue;

      var rad = function (x) {
        return x * Math.PI / 180;
      };

      setTimeout(function () {
        var R = 6378137; // Earth’s mean radius in meter
        this.Inlatlng = window.localStorage['curntlatlngval'];


        if (this.Inlatlng == undefined || this.Inlatlng == "undefined") {

          var posOptions = { timeout: 10000, enableHighAccuracy: false };

          this.ge.getCurrentPosition(posOptions).then(function (position) {
            console.log(position);
            var Inlatlng = (position.coords.latitude) + "," + (position.coords.longitude);
            console.log(Inlatlng);
            window.localStorage['curntlatlngval'] = Inlatlng;
            console.log(window.localStorage['curntlatlngval']);
          }, function (err) {
            console.log(err);
          })
        }

        //HARDCODED LAT LNG
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

        var objdataupdtime = {};
        //ramesh
        // objdataupdtime.CUSTOMER_ID = obj.CUSTOMER_ID;
        // objdataupdtime.RO_CODE = obj.RO_CODE;
        // objdataupdtime.START_TIME = currentDateTime;
        //end
        this.getbusinessunit(obj.CUSTOMER_ID);
        //objdataupdtime.START_LOCATION = window.localStorage['trackinglocation'];

        console.log(objdataupdtime);
        console.log(this.distanceInMeter);


        // COMMENTED DISTANCE CALULATION WHILE END

        // if (this.distanceInMeter >= 2000) {
        //   console.log("More than 200 meter")


        //   alert("Invalid Meeting Location.");
        // } else {





        //alert("Reached the Location");
        var timestart = new Date();
        console.log(timestart);
       // this.endmeetingtime = $filter('date')(timestart, 'h.mm s a');
        console.log(this.endmeetingtime);


        console.log("Less than 200 meter");

        console.log("action popup");
        this.followupvisitsUpdateModal(obj)


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
        //       this.followupvisitsUpdateModal(obj)
        //       //this.UpdateModal.show();
        //     }
        //   }]
        // });
        // }

      }, 500);
    // } catch (err) {
    //   console.log(err);
    // }

  }


  followupvisitsUpdateModal(obj) {
    debugger
    console.log(obj)
    // obj.LADDRESS = obj.LADDRESS.replace(/\s+/g,' ').trim();

    

    //this.myvalue = true;
    this.firstname1 = obj.firstname;
    this.lat1 = "";
    this.lng1 = "";
    this.addbaselocno = "";
    // $("#mapshowimage").html("");
    // $(".showdivs").html("");

    // this.followupvisits.addressname = "";
    //.clear();
    //this.typeshowmap="";
    // this.disablestart = true;

    this.followupvisits.starttime = window.localStorage['date'];
    console.log(window.localStorage['date']);
    console.log(this.followupvisits.starttime);
    //  if(this.followupvisits.starttime == "" || this.followupvisits.starttime ==undefined || this.followupvisits.starttime ==null){
    // this.disablestart = false;
    // $ionicPopup.alert({
    //                     title: '',
    //                     template: 'Meeting Is Not Started'
    //                 });
    // return false;

    //  }



    // this.UpdateModal.show();
    this.dateToday1 = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(obj)
    // this.followupvisits.starttime = "";
    // this.followupvisits.endtime = "";
    this.followupvisits.customername1 = obj.firstname;
    // this.followupvisits.JointVisit = "N";
    // this.Purpose = obj.PURPOSE;
    // this.customername = obj.CUSTOMER_NAME;
    console.log(this.followupvisits.Purpose)
    console.log(this.followupvisits.customername)

    this.followupvisits.calloutcome = "";
    this.followupvisits.followdate = "";
    this.followupvisits.followtime = "";
    this.followupvisits.calltype='P'
    this.followupvisits.JointVisit = "";
    this.followupvisits.jointusername = "";
    this.followupvisits.jointcode = "";
    this.followupvisits.deposits = obj.Deposit_Amount;
    this.followupvisits.casa = obj.Casa_Amount;
    this.followupvisits.advance = obj.Advance_Amount;
    this.followupvisits.insurance = obj.Insurance_Amount;
    this.followupvisits.Insurance_Source = obj.InsuranceSource;
    this.followupvisits.ReffRelation = obj.ReffRelation;
    this.followupvisits.InsuranceType = obj.InsuranceType;

    this.followupvisits.remarks = "";
    //this.followupvisits.customerid = obj.CUSTOMER_ID;
    if(obj.CUSTOMER_ID != 0){
      this.followupvisits.customerid = obj.CUSTOMER_ID;
    }
    this.followupvisits.customername = obj.CUSTOMER_NAME;
    console.log(this.followupvisits.customername);
    this.followupvisits.Purpose = obj.PURPOSE;
    window.localStorage['customerID'] = obj.CUSTOMER_ID;
    window.localStorage['callID'] = obj.CRMCallID;

    window.localStorage['PurposeID'] = obj.purpose_id;
    this.purposeid = obj.purpose_id;
    console.log(this.purposeid);

    this.purposename = obj.PURPOSE;
    this.purposetype = obj.PURPOSETEST

    this.cust_id = obj.CUSTOMER_ID;


    console.log(obj);
    this.followupvisits.addressname = obj.LADDRESS;
    this.lat1 = obj.LatValue;
    console.log(this.lat1);
    this.lng1 = obj.LongValue;
    console.log(this.lng1);

  

    if (this.cust_id == null) {

      this.enable = false;

    }
    if (this.cust_id != null) {
      this.enable = true;
     // this.getbusinessunit(obj.CUSTOMER_ID);
      if(this.cust_id == 0){
        this.followupvisits.lastname =  obj.CUSTOMER_NAME;
        this.followupvisits.mobile = obj.CONTACT_NO;
      }else{
      //this.showspin();
      this.Apiservice.getcustomerdetails(this.cust_id)
        .then( (response:any)=> {
          // this.hidespin();
          console.log(response);
          this.custDetails =JSON.parse(JSON.parse(response.data));
          this.followupvisitscustomerdata = JSON.parse(this.custDetails);

          if(this.followupvisitscustomerdata != "" && this.followupvisitscustomerdata != undefined)
          {
            this.followupvisits.customerid = obj.CUSTOMER_ID;
            this.followupvisits.customername = this.followupvisitscustomerdata[0].Nfirstname + ' ' + this.followupvisitscustomerdata[0].Nlastname;
            window.localStorage['customerName'] = this.followupvisits.customername;
            this.followupvisits.firstname = this.followupvisitscustomerdata[0].Nfirstname;
            this.followupvisits.lastname = this.followupvisitscustomerdata[0].Nlastname;
            this.followupvisits.mobile = this.followupvisitscustomerdata[0].Nmobile;
            this.followupvisits.resphnno = this.followupvisitscustomerdata[0].Nresidencephone;
            this.followupvisits.email = this.followupvisitscustomerdata[0].Nemail;
  
            this.firstWords = [];
  
            var firstname = [];
  
            if (this.followupvisitscustomerdata.length > 0) {
              // this.showspin();
            }
            for (let i = 0; i < this.followupvisitscustomerdata.length; i++) {
  
              firstname = this.followupvisitscustomerdata[i].Nfirstname.split(" ");
  
              this.firstWords.push(firstname[0]);
              this.followupvisitscustomerdata[i].firstname = this.firstWords[i];
              this.firstname1 = this.followupvisitscustomerdata[i].firstname;
              if (i == this.followupvisitscustomerdata.length - 1) {
                // this.hidespin();
              }
            }
          console.log(this.followupvisitscustomerdata[0].Add1);
          this.followupvisitscustomerdata[0].Add1 = this.followupvisitscustomerdata[0].Add1.replace(/\s+/g,' ').trim();
          this.followupvisitscustomerdata[0].Add2 = this.followupvisitscustomerdata[0].Add2.replace(/\s+/g,' ').trim();
          this.followupvisitscustomerdata[0].Add3 = this.followupvisitscustomerdata[0].Add3.replace(/\s+/g,' ').trim();
          this.followupvisitscustomerdata[0].Add4 = this.followupvisitscustomerdata[0].Add4.replace(/\s+/g,' ').trim();
          if(this.followupvisitscustomerdata[0].Add1 != undefined || this.followupvisitscustomerdata[0].Add2 != undefined || this.followupvisitscustomerdata[0].Add3 != undefined || this.followupvisitscustomerdata[0].Add4 != undefined || this.followupvisitscustomerdata[0].PIN != undefined){
            var respAdd1= this.followupvisitscustomerdata[0].Add1;
            var add1 = respAdd1.replace("/", "-");
            console.log(add1); 
            var respAdd2= this.followupvisitscustomerdata[0].Add2;
            var add2 = respAdd2.replace("/", "-");
            console.log(add2);
          this.followupvisits.addressname = add1+' '+add2+' '+this.followupvisitscustomerdata[0].Add3+' '+this.followupvisitscustomerdata[0].Add4+' '+this.followupvisitscustomerdata[0].PIN;
          console.log(this.followupvisits.addressname);
          }
          if(this.followupvisits.addressname != "" && this.followupvisits.addressname != undefined)
          { 
            console.log(this.followupvisits.addressname);
           this.myvalue = true;
           //this.data.selectele='P';
          //  this.setlatlong(this.followupvisits.addressname);
          }
         
         }
          

        })
       
      }
    }


    console.log(obj);
    this.followupvisits.addressname = this.followupvisits.addressname.replace(/\s+/g,' ').trim();
    console.log(this.followupvisits.addressname);
    if(this.followupvisits.addressname != '' &&this.followupvisits.addressname != 'undefined' &&this.followupvisits.addressname != undefined){
      // this.typeshowmap1(this.lat1, this.lng1,this.followupvisits.addressname)
    }
  
  }

}
