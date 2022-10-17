import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-mywishprimarycustomer',
  templateUrl: './mywishprimarycustomer.page.html',
  styleUrls: ['./mywishprimarycustomer.page.scss'],
})
export class MywishprimarycustomerPage implements OnInit {
  Primarycust: any;
  primaryCustomers: any;

  constructor(private Apiservice:ApiServiceService) { }

  ngOnInit() {
    this.getPrimaryCustomers();
  }

  getPrimaryCustomers(){
    console.log("primaryCustomers")
    var UserId = window.localStorage['userID'];
    var BranchId = window.localStorage['branchID'];
    var wSTypes = "PC"
    console.log("primaryParams", UserId,BranchId,wSTypes)
    // this.showspin()
    this.Apiservice.Getprimarycustomer(UserId,BranchId,wSTypes).then((response:any)=>{
      // this.hidespin();
      // response = JSON.parse(response);
      console.log("response",response);
      var result = response.data;
      result = JSON.parse(result);
      result = JSON.parse(result);
      this.Primarycust = result;
      // response = JSON.parse(response);
      this.primaryCustomers = result;
      console.log("primary_customers:-",this.primaryCustomers)
      
    })
    // .error(function(response) {
    //   this.hidespin();
    //   console.log(response);
    // });
  }
}
