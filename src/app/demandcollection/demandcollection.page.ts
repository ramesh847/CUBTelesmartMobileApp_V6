import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { DemandcollectionmodalPage } from '../modal/demandcollectionmodal/demandcollectionmodal.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-demandcollection',
  templateUrl: './demandcollection.page.html',
  styleUrls: ['./demandcollection.page.scss'],
})
export class DemandcollectionPage implements OnInit {
 demandcollectioncustomers:any;
 tot_demandcustomers:any;
 tot_amount_tobecollected = 0;
  branchid: string;
  callerid: string;
  mode: string;
  constructor(private modalController:ModalController,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    this.branchid = localStorage.getItem('branchID');
    this.callerid = localStorage.getItem('userID');
    this.mode = 'S';


    this.getdemandcollectionCustomers();
  }
 async customerActionModal(items){
    const modal = await this.modalController.create({
      component: DemandcollectionmodalPage,
      componentProps: { Data: items }
      });
      return await modal.present();
  }

getdemandcollectionCustomers(){
    this.Apiservice.DemandCollectionCust(this.callerid,this.branchid,this.mode).then((res:any)=> {
            // console.log(JSON.parse(res));
            var result = res.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
            this.demandcollectioncustomers = result 
            this.tot_demandcustomers = this.demandcollectioncustomers.length;
            this.demandcollectioncustomers.forEach(element => {
                this.tot_amount_tobecollected += (element.ToBeCollectedAmount)
            });
            console.log(this.tot_amount_tobecollected, this.tot_demandcustomers);

        })
}

}
