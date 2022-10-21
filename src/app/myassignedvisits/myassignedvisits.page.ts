
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AnyRecord } from 'dns';
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-myassignedvisits',
  templateUrl: './myassignedvisits.page.html',
  styleUrls: ['./myassignedvisits.page.scss'],
  providers:[DatePipe]
})
export class MyassignedvisitsPage implements OnInit {
  callPurpose: any;
  exposure_other_bngname:any;
  crdit_facility:any;
  assignedvisitdata: any;
  firstWords: any[];
  firstnamemodel: any;
  divshowhide:boolean=false;
  textbind: string;
  constructor(private datepipe:DatePipe,private modalController:ModalController,private Apiservice:ApiServiceService,private router:Router) { }

  ngOnInit() {
    debugger
    this.Apiservice.getpurpose().then((res:any)=>{
       debugger
      console.log(JSON.parse(res.data))
      this.callPurpose= JSON.parse(res.data)
     

    })

    

this.getassignedvisitdata()

    // getpurpose
  }
 async assignedvisitupdatemodal(item)
{
  debugger
  const modal = await this.modalController.create({
    component: this.assignedvisitupdatemodal,
    componentProps: { Data: item }
  });
  return await modal.present();
}
  getassignedvisitdata () {
debugger
   // $scope.showspin();
    var branchid = window.localStorage['branchID'];
    var usertype = window.localStorage['userType'];
    var userid = window.localStorage['userID'];
   // $scope.showspin();
    this.Apiservice.myassignedvisitsdata(branchid, userid, usertype)
      .then((response:any) =>{
        debugger
       // $scope.hidespin();
       var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
        // response = JSON.parse(response);
       this.assignedvisitdata = result;
       // console.log($scope.assignedvisitdata)
       this.firstWords = [];

        var firstname = [];

if(this.assignedvisitdata.length==0 || this.assignedvisitdata.length==undefined){
this.divshowhide=true
this.textbind="No Record Found"
}else{

  this.divshowhide=false
        for (let i = 0; i < this.assignedvisitdata.length; i++) {

          firstname = this.assignedvisitdata[i].CustomerName.split(" ");

          this.firstWords.push(firstname[0]);
          this.assignedvisitdata[i].firstname = this.firstWords[i];
          console.log(this.assignedvisitdata[i].firstname);
        this.firstnamemodel = this.assignedvisitdata[i].firstname;


        }
      }
      //  $ionicLoading.hide();

      })
      
  }

  

}
