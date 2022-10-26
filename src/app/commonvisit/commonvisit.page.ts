// import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterPipe } from 'ngx-filter-pipe';
import { MyfollowupvisitmodalPage } from '../modal/myfollowupvisitmodal/myfollowupvisitmodal.page';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-commonvisit',
  templateUrl: './commonvisit.page.html',
  styleUrls: ['./commonvisit.page.scss'],
})
export class CommonvisitPage implements OnInit {
  callPurpose: any;
  CBSCustomerID:any;
  mobileNumber:any;
  Purpose:any;
  search:any={}
  commonvisitdataonload: any;
  firstWords: any[];
  constructor(private Apiservice: ApiServiceService, private filterPipe: FilterPipe,
    private modalController: ModalController) { }

  ngOnInit() {
    debugger
    this.getpurpose()
    this.getCommonvisitsonload()
  }
  async callNumber(data){
    const modal = await this.modalController.create({
      component: MyfollowupvisitmodalPage,
      componentProps: { Data: data }
    });
    return await modal.present();
  }
  
  getCommonvisitsonload() {
    // this.showspin();
    var branchid = window.localStorage['branchID'];
    var userid = window.localStorage['userID'];
    var calltype = "P";

    var custid = " ";
    // this.showspin();
    this.Apiservice.getcomvisits(0, branchid, calltype, custid)
      .then((response:any)=> {
        debugger
        // this.$broadcast('scroll.refreshComplete');
        // this.hidespin();
        response = JSON.parse(response.data);
        this.commonvisitdataonload = JSON.parse(response);
        console.log(this.commonvisitdataonload);
        var firstname = [];
        this.firstWords = [];
        for (let i = 0; i <this.commonvisitdataonload.length; i++) {
          firstname = this.commonvisitdataonload[i].CustomerName.split(" ");
          this.firstWords.push(firstname[0]);
          this.commonvisitdataonload[i].firstname = this.firstWords[i];
        }
        console.log(this.commonvisitdataonload)
        // this.hidespin();
      })
     

  };


  searchCommonVisits(purposeid,custid){
    debugger
    this.commonvisitdataonload=[];
    // this.showspin();
    var branchid = window.localStorage['branchID'];
    var userid = window.localStorage['userID'];
    var calltype = "P";
    // var custid = " ";
    if(purposeid == ""){
      purposeid = 0;
    }
    if(custid == ''||typeof custid == 'undefined'){
      custid=" ";
    }

    // this.showspin();
    this.Apiservice.getcomvisits(purposeid, branchid, calltype, custid)
      .then((response:any)=> {
        // this.$broadcast('scroll.refreshComplete');
        // this.hidespin();
        response = JSON.parse(response);
        this.commonvisitdataonload = response;
        console.log(this.commonvisitdataonload);
        var firstname = [];
        this.firstWords = [];
        for (let i = 0; i <this.commonvisitdataonload.length; i++) {
          firstname = this.commonvisitdataonload[i].CustomerName.split(" ");
          this.firstWords.push(firstname[0]);
          this.commonvisitdataonload[i].firstname = this.firstWords[i];
        }
        console.log(this.commonvisitdataonload)
        // this.hidespin();
      })
    }
  getpurpose(){
    //this.showspin();
    debugger

    this.Apiservice.getpurposenew()
      .then((response:any)=> {
        debugger
        console.log(response.data);
        response = JSON.parse(JSON.parse(response.data));
        this.callPurpose = response;
        //this.hidespin();

      })
     
  }
  async commonvisitUpdateModal(items:any){
    debugger
    const modal = await this.modalController.create({
      component: this.commonvisitUpdateModal,
      componentProps: { Data: items }
    });
    return await modal.present();
  }

  }


