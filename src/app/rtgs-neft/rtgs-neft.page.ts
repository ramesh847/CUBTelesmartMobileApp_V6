import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { RtgsNeftmodalPage } from '../modal/rtgs-neftmodal/rtgs-neftmodal.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-rtgs-neft',
  templateUrl: './rtgs-neft.page.html',
  styleUrls: ['./rtgs-neft.page.scss'],
})
export class RTGSNEFTPage implements OnInit {
  data1:any={}
  partB:boolean=false;
  partA: boolean=true;
  RTGSNEFTlist: any;
  RTGSNEFTlistCount: any;
  constructor(private modalController:ModalController,private ApiService:ApiServiceService) { }

  ngOnInit() {
    this.data1.partA = 'YES';
    this.RtgsNeftPartA();
  }


  async customerActionModal(item) {
    const modal = await this.modalController.create({
    component: RtgsNeftmodalPage,
    componentProps: { Data: item }
    });
    return await modal.present();
   }

  CheckBoxChange(Event,isChecked){
console.log(isChecked);
console.log(Event);
// this.partB = !this.partA
if(Event == 'chkbx_A' && isChecked == true){
this.partB = false;
this.partA = true;
this.data1.partA = 'YES';
this.data1.partB = 'NO';
this.RtgsNeftPartA();
// this.partB = !this.partA 
}else
if(Event == 'chkbx_B' && isChecked == true){
  this.partA = false;
  this.partB = true;
  this.data1.partA = 'NO';
this.data1.partB = 'YES';
this.RtgsNeftPartB();
  // this.partB = !this.partA 
}
  }

  RtgsNeftPartA(){
    // this.showspin();
    var branchid = window.localStorage['branchID'];
    var userid = window.localStorage['userID'];
    this.ApiService.getrtgsNeftDetalis(branchid,userid)
      .then((response:any)=> {
        // this.hidespin();
        var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
        this.RTGSNEFTlist = result;
        this.RTGSNEFTlistCount = this.RTGSNEFTlist.length;
        console.log(this.RTGSNEFTlist)


      })
      // .error(function(response) {
      //   this.hidespin();
      //   console.log(response);
      // });
  }

 RtgsNeftPartB(){
  var branchid = window.localStorage['branchID'];
    var userid = window.localStorage['userID'];
    // this.showspin();
    this.ApiService.getrtgsNeftDetalisPartB(branchid,userid)
      .then((response:any)=> {
        var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
        this.RTGSNEFTlist = result;
        this.RTGSNEFTlistCount = this.RTGSNEFTlist.length;
        console.log(this.RTGSNEFTlist)


      })
      // .error(function(response) {
      //   this.hidespin();
      //   console.log(response);
      // });
  }
}
