import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ModalController } from '@ionic/angular';
import { MywishsecondarymodalPage } from '../modal/mywishsecondarymodal/mywishsecondarymodal.page';
@Component({
  selector: 'app-mywishsecondarycustomer',
  templateUrl: './mywishsecondarycustomer.page.html',
  styleUrls: ['./mywishsecondarycustomer.page.scss'],
})
export class MywishsecondarycustomerPage implements OnInit {
  secondaryCustt: any;
  secondaryCustomers: any;

  constructor(private modalController:ModalController,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    this.getSecondaryCustomers();
  }
  getSecondaryCustomers(){
    var UserId = window.localStorage['userID'];
    var BranchId = window.localStorage['branchID'];
    var wSTypes = "SC";
    console.log("primaryParams", UserId,BranchId,wSTypes)
    // this.showspin()
    this.Apiservice.Getprimarycustomer(UserId,BranchId,wSTypes).then((response:any)=>{
      // this.hidespin();
      console.log("response",response);
      var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
      this.secondaryCustt = result;
      // response = JSON.parse(response);
      this.secondaryCustomers = result;
      console.log("recondary_cust",this.secondaryCustomers)
    })
    // .error(function(response) {
    //   this.hidespin();
    //   console.log(response);
    // });
  }

  async customerActionModal(item) {
    const modal = await this.modalController.create({
    component: MywishsecondarymodalPage,
    componentProps: { Data: item }
    });
    return await modal.present();
   }

}
