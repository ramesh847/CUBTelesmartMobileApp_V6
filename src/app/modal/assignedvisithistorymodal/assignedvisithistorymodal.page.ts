import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { AlertServiceService } from 'src/app/service/alert-service.service';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-assignedvisithistorymodal',
  templateUrl: './assignedvisithistorymodal.page.html',
  styleUrls: ['./assignedvisithistorymodal.page.scss'],
  providers:[DatePipe]
})
export class AssignedvisithistorymodalPage implements OnInit {
  cbscustomerId: any;
  assignedvisitshistorydata: any;
  firstWords: any[];
  firstname1: any;

  constructor(private datepipe:DatePipe,private AlertService:AlertServiceService,private navParams:NavParams,private Apiservice:ApiServiceService) { }

  ngOnInit() {
    let Cusdata = this.navParams.get('Data');


  
      // console.log(obj)
      // this.HistoryModal.show();
      var cbscustomerId = Cusdata.CBSCustomerID;
      this.cbscustomerId = Cusdata.CBSCustomerID;
      var BranchId = window.localStorage['branchID'];
  
     // this.showspin();
      this.Apiservice.gethistorydetails(cbscustomerId, BranchId)
        .then((response:any)=> {
         // this.hidespin();
         var result = response.data;
         result = JSON.parse(result);
         result = JSON.parse(result);
  
          this.assignedvisitshistorydata = result;
  
          var firstname = [];
          this.firstWords = [];
  
  
          for (let i = 0; i < this.assignedvisitshistorydata.length; i++) {
  
            firstname = this.assignedvisitshistorydata[i].CustomerName.split(" ");
            this.firstWords.push(firstname[0]);
  
            this.assignedvisitshistorydata[i].firstname = this.firstWords[i];
            this.firstname1 = this.assignedvisitshistorydata[i].firstname;
          }
          console.log(this.assignedvisitshistorydata)
        
  
          console.log(response);
  
        })
     
  
  
    };


  

}
