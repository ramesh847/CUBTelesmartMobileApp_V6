import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-insurancecustomer',
  templateUrl: './insurancecustomer.page.html',
  styleUrls: ['./insurancecustomer.page.scss'],
})
export class InsurancecustomerPage implements OnInit {
  insurCustDataaa: any;
  insuranceCustomerData: any;

  constructor(private Apiservice:ApiServiceService) { }

  ngOnInit() {
    this.insuranceGetCustomersData();
  }
  insuranceGetCustomersData(){
    var BranchId = window.localStorage['branchID'];
    var UserId = window.localStorage['userID'];
    // this.showspin();
    this.Apiservice.getInsurancesearch(UserId,BranchId).then((response:any)=>{
      // this.hidespin();
      console.log("insuranceData", response);
      var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
      this.insurCustDataaa =  result;
      // response = JSON.parse(response);
      this.insuranceCustomerData = result;
      console.log("customerInsuranceData",this.insuranceCustomerData )

    })
  }

  

  

}
