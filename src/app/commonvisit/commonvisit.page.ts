// import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterPipe } from 'ngx-filter-pipe';
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
  constructor(private Apiservice: ApiServiceService, private filterPipe: FilterPipe,
    private modalController: ModalController) { }

  ngOnInit() {
    debugger
    this.getpurpose()
  }
  callNumber(data){

  }
  commonvisitUpdateModal(data){
    
  }
  searchCommonVisits(id:any){

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

}
