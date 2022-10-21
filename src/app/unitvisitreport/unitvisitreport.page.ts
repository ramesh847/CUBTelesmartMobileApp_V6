import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';
import { ToastServiceService } from '../service/toast-service.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-unitvisitreport',
  templateUrl: './unitvisitreport.page.html',
  styleUrls: ['./unitvisitreport.page.scss'],
})
export class UnitvisitreportPage implements OnInit {
  //location start
// Readable Address
address: string;

// Location coordinates
latitude: number;
longitude: number;
accuracy: number;

//Geocoder configuration
geoencoderOptions: NativeGeocoderOptions = {
  useLocale: true,
  maxResults: 5
};
//location end
  allCusData: any;
  BranchID: string;
  userID: string;
Search={
  'SearchData':""
}
  constructor(private toast:ToastServiceService,private Apiservice:ApiServiceService,private router:Router,private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) { 

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

  debugger

  this.getGeolocation()
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

getGeolocation() {
  debugger
this.geolocation.getCurrentPosition().then((resp) => {

  this.latitude = resp.coords.latitude;
  this.longitude = resp.coords.longitude;
  this.accuracy = resp.coords.accuracy;

  window.localStorage['latitude'] =this.latitude
  window.localStorage['longitude'] =this.longitude
  window.localStorage['accuracy'] =this.accuracy

  this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);

}).catch((error) => {
  alert('Error getting location' + JSON.stringify(error));
});
}

//geocoder method to fetch address from coordinates passed as arguments
getGeoencoder(latitude, longitude) {
  debugger
this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
  .then((result: NativeGeocoderResult[]) => {
    this.address = this.generateAddress(result[0]);
  })
  .catch((error: any) => {
    alert('Error getting location' + JSON.stringify(error));
  });
}

//Return Comma saperated address
generateAddress(addressObj) {
  debugger
let obj = [];
let address = "";
for (let key in addressObj) {
  obj.push(addressObj[key]);
}
obj.reverse();
for (let val in obj) {
  if (obj[val].length)
    address += obj[val] + ', ';
}
return address.slice(0, -2);
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
    debugger
    this.router.navigate(['uvrsectionhistory'],{ queryParams: sectionData});
  }
  goUVRpof(item){
    this.router.navigate(['uvrpof'],{ queryParams: item});
  }
}
