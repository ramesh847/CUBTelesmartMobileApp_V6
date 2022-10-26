import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { AlertServiceService } from 'src/app/service/alert-service.service';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-commonvisit-update-modal',
  templateUrl: './commonvisit-update-modal.page.html',
  styleUrls: ['./commonvisit-update-modal.page.scss'],
  providers:[DatePipe]
})
export class CommonvisitUpdateModalPage implements OnInit {
  assignedvisit:any={}
  hidecalloutcome:boolean=false;
  cust_id: any;
  purposeid: any;
  Purpose: any;
  enable: boolean=false
  assignedvisitscustomerdata: any;
  myvalue:boolean=false
  constructor(private AlertService:AlertServiceService,private navParams:NavParams,private datepipe:DatePipe,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    let Cusdata = this.navParams.get('Data');
    this.commonvisitupdatemodal(Cusdata)
  }
  commonvisitupdatemodal(obj){
debugger
    // this.myvalue = false;
    
    this.assignedvisit.custname = obj.firstname;
    this.assignedvisit.Purpose = obj.Purpose;

    // this.assignedvisit.Purpose
//Condition to hide call closed option for NPA followup and VVIP Visits purposes
if( this.assignedvisit.Purpose != "NPA followup" &&  this.assignedvisit.Purpose != "VVIP Visits"){
  this.hidecalloutcome = false;
}else{
  this.hidecalloutcome = true;
}


    // this.assignedvisit.endtime = "";
    // this.assignedvisit.starttime = "";
    this.assignedvisit.current = "";

    this.assignedvisit.collecteddate = "";
    this.assignedvisit.collectedaccnumber = "";
    this.assignedvisit.collectedamount = "";
    this.assignedvisit.calloutcome = "";
    this.assignedvisit.followupdate = "";
    this.assignedvisit.followuptime = "";
    this.assignedvisit.calltype = 'P';
    this.assignedvisit.JointVisit = "";
    this.assignedvisit.jointusername = "";
    this.assignedvisit.jointcode = "";

    this.assignedvisit.remarks = "";

    //address
    this.assignedvisit.addressname="";
    // $("#showdivs_commonvisits").css("display", "none");
    //this.UpdateModal.show();
    console.log(obj)
    this.cust_id = obj.CBSCustomerID;
    this.assignedvisit.fullname = obj.CustomerName
    // console.log(this.cust_id)
    this.assignedvisit.customerid = obj.CBSCustomerID;
    window.localStorage['customerID'] = obj.CBSCustomerID;
    window.localStorage['callID'] = obj.CallID;
    // var courtesydate= obj.CourtesyDate;
    var newdate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    window.localStorage['Next_Call_Date'] = newdate;
    window.localStorage['PurposeID'] = obj.PurposeId;
    this.purposeid = obj.PurposeId;
    this.Purpose = obj.Purpose;
    window.localStorage['DNP_AAmount'] = obj.DNPAAmount;
    window.localStorage['Account_No'] = obj.AccountNumber;
    // var date= obj.ToCallDate;
    var tocalldate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    window.localStorage['To_Call_Date'] = tocalldate;
    console.log(window.localStorage['To_Call_Date'])

    if (this.cust_id == null) {

      this.enable = false;

    }
    if (this.cust_id != null) {
      this.enable = true;
      // this.showspin();
      this.Apiservice.getcustomerdetails(this.cust_id)
        .then((response:any)=> {
          // this.hidespin();
          debugger
          // console.log(response);
          response = JSON.parse(response.data);
          response = JSON.parse(response);
          this.assignedvisitscustomerdata = response;
          console.log(this.assignedvisitscustomerdata)
          // this.assignedvisit.customerid = this.assignedvisitscustomerdata[0].;
          // this.assignedvisit.customerid = window.localStorage['customerID'];
          // this.assignedvisit.customername = response[0].Nfirstname + ' ' + response[0].Nlastname;
          // this.assignedvisit.firstname = response[0].Nfirstname;
          // this.assignedvisit.lastname = response[0].Nlastname;
          // this.assignedvisit.mobile = response[0].Nmobile;
          // this.assignedvisit.email = response[0].Nemail;

          // this.firstWords = [];

          // var firstname = [];

          // for (i = 0; i < this.assignedvisitscustomerdata.length; i++) {

          //   firstname = this.assignedvisitscustomerdata[i].Nfirstname.split(" ");

          //   this.firstWords.push(firstname[0]);
          //   this.assignedvisitscustomerdata[i].firstname = this.firstWords[i];
          //   this.firstname1 = this.assignedvisitscustomerdata[i].firstname;


          // }

          if(this.assignedvisitscustomerdata != "" && this.assignedvisitscustomerdata != undefined)
          {
          console.log(this.assignedvisitscustomerdata[0].Add1);
          if(this.assignedvisitscustomerdata[0].Add1 != undefined || this.assignedvisitscustomerdata[0].Add2 != undefined || this.assignedvisitscustomerdata[0].Add3 != undefined || this.assignedvisitscustomerdata[0].Add4 != undefined || this.assignedvisitscustomerdata[0].PIN != undefined){
            var respAdd1= this.assignedvisitscustomerdata[0].Add1;
            var add1 = respAdd1.replace("/", "-");
            console.log(add1); 
            var respAdd2= this.assignedvisitscustomerdata[0].Add2;
            var add2 = respAdd2.replace("/", "-");
            console.log(add2); 
          this.assignedvisit.addressname = add1+' '+add2+' '+this.assignedvisitscustomerdata[0].Add3+' '+this.assignedvisitscustomerdata[0].Add4+' '+this.assignedvisitscustomerdata[0].PIN;
          console.log(this.assignedvisitscustomerdata.addressname);
          }
          if(this.assignedvisit.addressname != "" && this.assignedvisit.addressname != undefined)
          { 
            console.log(this.assignedvisit.addressname);
           this.myvalue = true;
           //this.data.selectele='P';
          // this.setlatlong(this.assignedvisit.addressname); cmd by ramesh
          }
         
         }



        })
        
    }

  }  

}
