import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { AlertServiceService } from 'src/app/service/alert-service.service';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-performancemodal',
  templateUrl: './performancemodal.page.html',
  styleUrls: ['./performancemodal.page.scss'],
})
export class PerformancemodalPage implements OnInit {
  search:any={};
  userid: any;
  plpBranchList: any;
  branchid: any;
  usertype: any;
  usercode: any;
  username: any;
  cbsid: any;
  CallerId: any;
  category: any;
  custName: any;
  plpCustomerList: any;

  constructor(private AlertService:AlertServiceService,private navParams:NavParams,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    debugger
    this.userid=localStorage.getItem('userID')
    this.branchid=localStorage.getItem('branchID')
    this.usertype=localStorage.getItem('userType')
    this. usercode = window.localStorage['userCode'];
  this. username = window.localStorage['userName'];
 // var branchid = window.localStorage['branchID'];
  this. cbsid = window.localStorage['customerID'];
  this. CallerId = window.localStorage['userID'];

    this.userid=localStorage.getItem('userID')
    this.category=null
   let Cusdata = this.navParams.get('Data');
   this. plpCustomerBaseDetails()
this.plpCustomerBranch()
  }
plpCustomerBranch(){
  debugger

 // this.showspin();
  this.Apiservice.getplpCustomerBranch(this.userid)
  .then((response:any)=> {
    debugger
    console.log(response)
    //this.hidespin();
       response = JSON.parse(response);
       this.plpBranchList = response;
       console.log(this.plpBranchList)

  })
 
}


plpCustomerBaseDetails1(category,custID,custName,Branch)
{
  debugger
  if(category == undefined || category == ''){
    category ='A';
  } 
  if(custID == undefined || custID == ''){
    custID =" ";
  } 
  if(custName == undefined || custName == ''){
    custName =" ";
  } 
  if(Branch == undefined || Branch == ''){
    Branch =this.branchid;
  }else{
    Branch = Branch
  } 
    this.Apiservice.getplpCustomerBase( this.userid,this.usertype, custID, custName, Branch, category)
    .then((response:any)=> {
      debugger
      console.log(response)
      //this.hidespin();
         response = JSON.parse(response);
         this.plpCustomerList = response;
         
    })
   
  }
  


plpCustomerBaseDetails(){
  debugger
 let category = undefined;
 let custID = undefined;
 let custName = undefined;
 let  Branch = undefined;
  // debugger
 // this.showspin();
 if(category == undefined || category == ''){
  category ='A';
} 
if(custID == undefined || custID == ''){
  custID =" ";
} 
if(custName == undefined || custName == ''){
  custName =" ";
} 
if(Branch == undefined || Branch == ''){
  Branch =this.branchid;
}else{
  Branch = Branch
} 
  this.Apiservice.getplpCustomerBase( this.userid,this.usertype, custID, custName, Branch, category)
  .then((response:any)=> {
    debugger
    console.log(response)
    //this.hidespin();
       response = JSON.parse(response);
       this.plpCustomerList = response;
       
  })
 
}



}
