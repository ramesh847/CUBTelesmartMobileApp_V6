import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';
import { ToastServiceService } from '../service/toast-service.service';
@Component({
  selector: 'app-uvrpof',
  templateUrl: './uvrpof.page.html',
  styleUrls: ['./uvrpof.page.scss'],
})
export class UvrpofPage implements OnInit {
  SectionHeaderdata:any;
  PofData: any={};
  PofDataShow: boolean = false;
  constructor(private toast:ToastServiceService,private ApiService:ApiServiceService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.SectionHeaderdata = params;
      console.log(params);
    });



    
   }

  ngOnInit() {
    let data = {
      "custId": this.SectionHeaderdata.CUSTOMERID
     }
this.toast.presentLoading('');
     this.ApiService.UVRgetPositionoffacilities(data).then((res:any)=>{
      this.toast.dismissLoading();
       if(res.length != 0){
        this.toast.dismissLoading();
         this.PofData = res[0];
         this.PofDataShow = true;
         console.log(this.PofData)
       }
     });
   
    // this.SectionHeaderdata.array.forEach(element => {
    //   if(element.CUSTOMERID)
    // });
  }

}
