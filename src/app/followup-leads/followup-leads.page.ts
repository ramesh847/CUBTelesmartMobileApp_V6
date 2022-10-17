import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ModalController } from '@ionic/angular';
import { FollowupleadmodalPage } from '../modal/followupleadmodal/followupleadmodal.page';
import * as moment from "moment"; 
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-followup-leads',
  templateUrl: './followup-leads.page.html',
  styleUrls: ['./followup-leads.page.scss'],
})
export class FollowupLeadsPage implements OnInit {
  myleadscreenlist: any;
  startleadtime: string;
  DisLat: any;
  DisLong: any;
  Inlatlng: any;
  distanceInMeter: number;
  endleadtime: string;

  constructor(private geolocation: Geolocation,private modalController:ModalController,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    this.displaylead();
  }
  async myleadsmodel(items){
    console.log(items)
    const modal = await this.modalController.create({
      component: FollowupleadmodalPage,
      componentProps: { Data: items,model: "Actionnavigation"  }
      });
      return await modal.present();
  }

  displaylead() {
    var branchid = window.localStorage['branchID'];
  var userid = window.localStorage['userID'];
  var customerid = 0;
  var BusinessUnit = 0;
    // this.showspin();
   this.Apiservice.myleadscreen(userid, branchid, customerid, BusinessUnit)
      .then((response:any)=> {
        // this.hidespin();
        var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
        console.log("---this.myleadscreenlist",response );
        this.myleadscreenlist = result;
        console.log(this.myleadscreenlist)


      })
      // .error(function(response) {
      //   this.hidespin();
      //   console.log(response);
      // });
  }

//start

  startmylead(obj)
{
  console.log(obj);
alert("You have started the Meeting")
    console.log(obj);
     var timestart = new Date();
    console.log(timestart);
    this.startleadtime = moment(timestart).format("h.mm s a");
    //    this.followuptime = moment(this.data.followuptime).format('h.mm a')
    //  this.startleadtime = $filter('date')(timestart, 'h.mm s a');
    console.log( this.startleadtime);
}



//End
async endNavigationleads(items){
  const modal = await this.modalController.create({
    component: FollowupleadmodalPage,
    componentProps: { Data: items,model: "endnavigation" }
    });
    return await modal.present();
}

//navigationmap
async startNavigationrootleads(items){
  const modal = await this.modalController.create({
    component: FollowupleadmodalPage,
    componentProps: { Data: items,model: "Navigationrootleads" }
    });
    return await modal.present();
}
}