import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ExpressleadmodalPage } from '../modal/expressleadmodal/expressleadmodal.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-express-leads',
  templateUrl: './express-leads.page.html',
  styleUrls: ['./express-leads.page.scss'],
})
export class ExpressLeadsPage implements OnInit {
  expressleadscreenlist: any = [];
  ExpresleadCount: any;

  constructor(private modalController:ModalController,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    this.display();
  }
display() {
    // this.showspin();
    var branchid = window.localStorage['branchID'];
  var userid = window.localStorage['userID'];
  var campID = ' ';
  var name = ' ';
  var mobile = ' ';
    this.Apiservice.expressLeadscreen(name, branchid, campID, mobile, userid).then((response:any)=> {
        // this.hidespin();
        console.log(response);
        var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
        console.log("---this.expressLeadscreen",result );
        this.expressleadscreenlist = result;
        console.log("---resulScreen",this.expressleadscreenlist );

        this.ExpresleadCount = this.expressleadscreenlist.length;
        console.log(this.expressleadscreenlist)


      })
      // .error(function(response) {
      //   this.hidespin();
      //   console.log(response);
      // });
  }
  async customerActionModal(item) {
    const modal = await this.modalController.create({
    component: ExpressleadmodalPage,
    componentProps: { Data: item }
    });
    return await modal.present();
   }
}
