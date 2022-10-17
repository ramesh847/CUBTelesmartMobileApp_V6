import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';
import { ToastServiceService } from '../service/toast-service.service';
@Component({
  selector: 'app-unitvisitreport',
  templateUrl: './unitvisitreport.page.html',
  styleUrls: ['./unitvisitreport.page.scss'],
})
export class UnitvisitreportPage implements OnInit {
  allCusData: any;
  BranchID: string;
  userID: string;
Search={
  'SearchData':""
}
  constructor(private toast:ToastServiceService,private Apiservice:ApiServiceService,private router:Router) { 

    // this.BranchID = '1';
    // this.userID = '3442';
    //  localStorage.setItem("branchID","1");
    //  localStorage.setItem("userID","3442");
    // hot code need to change after login working

    
  }

  ngOnInit() {

    this.BranchID = localStorage.getItem('branchID');
    this.userID = localStorage.getItem("userID");
    var insertdata={
      BranchCode:this.BranchID,
      userid:this.userID
    }
 console.log(this.BranchID)
 console.log(this.userID)


    this.getAllCusData(insertdata);
    
  //   let data1 = {
  //     "BranchCode": "329"
  //   }
    
  //       this.Apiservice.login(data1).subscribe(res=>{
  //         console.log(res)
  //       });

  }

getAllCusData(insertdata:any){
  // let data = {
  //   "BranchCode": BranchID
  // }
  //this.toast.presentLoading('');
  this.Apiservice.uvrGetAllcustomerData(insertdata).then((res:any)=>{
    debugger
    console.log(res.data)
    if(res.data != null|| res.data != '' ){
      this.allCusData = JSON.parse(res.data);
     // this.toast.dismissLoading();
    }

  });
}

// change(data){
//   if(data.target.value != ''){
//     this.getAllCusData(this.BranchID);
//   }
// console.log(data.target.value)
// }


searchdosomthing(data){
if(!data.target.value){
  this.getAllCusData(this.BranchID);
}
}
  doSomething(){
    if(this.Search.SearchData != ''){
      this.allCusData = this.allCusData.filter((obj) => {
        return obj.CUSTOMERID === this.Search.SearchData;
      });
    }else if(this.Search.SearchData == ''){
      this.getAllCusData(this.BranchID);
    }
    console.log()
    // this.allCusData = this.allCusData.filter((obj) => {
    //   return obj.CUSTOMERID === this.Search.SearchData;
    // });
    // console.log(this.allCusData);
  }

  goUVRsection(sectionData){
    debugger
    console.log(sectionData)
     this.router.navigate(['uvrsection'],{ queryParams: sectionData});
  }
  goUVRHistorysection(sectionData){
    this.router.navigate(['uvrsectionhistory'],{ queryParams: sectionData});
  }
  goUVRpof(item){
    this.router.navigate(['uvrpof'],{ queryParams: item});
  }
}
