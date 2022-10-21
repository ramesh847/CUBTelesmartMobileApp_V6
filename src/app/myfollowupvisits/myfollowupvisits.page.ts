import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';
import { ModalController } from '@ionic/angular';
import { MyfollowupvisitmodalPage } from '../modal/myfollowupvisitmodal/myfollowupvisitmodal.page';
import { DatePipe } from '@angular/common';
import { MyfollowupvisitendmodelPage } from '../modal/myfollowupvisitendmodel/myfollowupvisitendmodel.page';
@Component({
  selector: 'app-myfollowupvisits',
  templateUrl: './myfollowupvisits.page.html',
  styleUrls: ['./myfollowupvisits.page.scss'],
  providers:[DatePipe]
})
export class MyfollowupvisitsPage implements OnInit {
  userid: any;
  branchid: any;
  usertype: any;
purpose:any;
customerid:any;
followvisitarry:any=[];
callPurpose:any;
callername:any
  customerName: any;
  customerMobile: any;
  customerId:any;
  currDate:any;
  modelshow:boolean=false;
  startmeetingtime: any;
  constructor(private datepipe:DatePipe,private modalController:ModalController,private Apiservice:ApiServiceService,private router:Router) { }

  ngOnInit() {
debugger
    this.Apiservice.getpurpose().then((res:any)=>{
      debugger
     console.log(JSON.parse(res.data))
     this.callPurpose= JSON.parse(JSON.parse(res.data))
     this.followvisit()

   })
    localStorage.setItem('userID','2606');
localStorage.setItem('branchID','329');
localStorage.setItem('branchCode','329');
localStorage.setItem('userCode','3442');
// localStorage.setItem('userName','3442');
localStorage.setItem('userType','11');
localStorage.setItem('mobile','9490739835');
    this.userid=localStorage.getItem('userID')
    this.branchid=localStorage.getItem('branchID')
    this.usertype=localStorage.getItem('userType')
    
  }
followvisit(){
  debugger
  this.purpose="null"
  this.customerid="null"
   this.Apiservice.myfollowvisitdata(this.branchid,this.userid,this.usertype,this.purpose,this.customerid).then((res:any)=>{
    debugger
    var result = res.data;
      // result = JSON.parse(result);
      //result = JSON.parse(result);
    this.followvisitarry= JSON.parse(JSON.parse(result))
    console.log("ramesh",this.followvisitarry)
   })

}
async callNumber(items){
  debugger

//   this.callername=localStorage.getItem('mobile')
// this.customerName=items.CUSTOMER_NAME;
//  this.customerMobile=items.CONTACT_NO;
//  this.customerId=items.CUSTOMER_ID;
//   this.purpose=items.PURPOSE.split('/').join('-');;
//   var currentDate= new Date();
  const modal = await this.modalController.create({
    component: MyfollowupvisitmodalPage,
    componentProps: { Data: items }
  });
  return await modal.present();

//  this.currDate = ('date')(currentDate, 'yyyy-MM-dd hh-mm-ss');
 

}
startvisit(item){
  debugger
  alert("You have started the Meeting")
    console.log(item);
    var timestart = new Date();
    console.log(timestart);
    this.startmeetingtime = this.datepipe.transform(timestart,'dd.MM.yyyy')
    // $filter('date')(timestart, 'h.mm s a');
    
    //console.log($scope.startmeetingtime);
}

async endvisit(items){
  debugger
  items.startmeetingtime=this.startmeetingtime
  // this.modelshow=true;
  const modal = await this.modalController.create({
    component: MyfollowupvisitendmodelPage,
    componentProps: { Data: items }
  });
  return await modal.present();
}
}