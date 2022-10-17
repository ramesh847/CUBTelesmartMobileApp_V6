import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-mywishconversions',
  templateUrl: './mywishconversions.page.html',
  styleUrls: ['./mywishconversions.page.scss'],
})
export class MywishconversionsPage implements OnInit {
  conversionsData: any;
  conversionsDataa: any;

  constructor(private Apiservice:ApiServiceService) { }

  ngOnInit() {
    this.getConversionsData();
  }
  getConversionsData(){
    var BranchId = window.localStorage['branchID'];
    var UserId = window.localStorage['userID'];
    // this.showspin();
    this.Apiservice.getconversiondata(UserId,BranchId).then((response:any)=>{
      var result = response.data;
      result = JSON.parse(result);
      result = JSON.parse(result);
      // this.hidespin();
      // console.log("conversionsData",response);
      this.conversionsData = result;
      // response = JSON.parse(response);
      this.conversionsDataa = result;
      console.log("conversionsData1",this.conversionsData);
    })
  }
}
