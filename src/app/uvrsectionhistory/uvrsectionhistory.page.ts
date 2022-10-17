import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { ApiServiceService } from '../service/api-service.service';
import { ToastServiceService } from '../service/toast-service.service';
@Component({
  selector: 'app-uvrsectionhistory',
  templateUrl: './uvrsectionhistory.page.html',
  styleUrls: ['./uvrsectionhistory.page.scss'],
})
export class UvrsectionhistoryPage implements OnInit {
  SectionHeaderdata:any;
  dropDateData: any;
  selectInputShow: boolean=false;
  HistoryData: any=[];
  HistoryDatamachinary: any=[];
  HistoryDatamachinary_insurance:any=[];
  HistoryFinancial_performance: any=[];
  HistoryStock_Insurance:any=[];
  HistoryGenral_obser_visit:any=[];
  Historyaboutunit_performance:any=[];
  PhotoData: any=[];
  Historyaboutfinancial_performance:any=[];
  Historycommodity:any=[];
  Data: any=[];
  data: string;
  data1: string;
  Banking_Arrangement: string;
  About_unit_machinary: string;
  Machinery_Insurance: string;
  Financial_performance: string;
  Stock_Insurance: string;
  Genral_obser_visit: string;
  Photo: string;
  dateValue: string;
  abouttheunit: string;
  aboutfinancialperformance: string;
  commodity: string;
  
  
  constructor(private toast:ToastServiceService,private ApiService:ApiServiceService,private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe((params) => {
      this.SectionHeaderdata = params;
      console.log(params);
    });
  }

  ngOnInit() {
    let data = {
      "custid": this.SectionHeaderdata.CUSTOMERID
    }
   
    this.ApiService.UVRgetHistoryDATEData(data).then((res:any)=>{
      
      if(res != null){
        res.forEach(element => {
          if(element.visit_id == 2){
            console.log(element)
//             if(element){
// console.log(element)
//             }
            this.Data.push(element);
console.log(this.Data)
            // if(this.Data){
              
            // }
          }
        //   if(element.)
        // });
      //   if(res)
      //    this.dropDateData = res;
      //    console.log(this.dropDateData);
         
         this.selectInputShow = true;
      // }
     
    });
      }
    });
  }
  SelectedEvent(event){
    debugger
    console.log(event.target.value)
   this.Data.forEach(element =>{
    if(element.CreatedOn == event.target.value){
      this.dateValue = element.visit_id
    }
   });


    let data = {
      "custid": this.SectionHeaderdata.CUSTOMERID,
      "visitid": this.dateValue 
    }
    // this.toast.presentLoading('');
    this.ApiService.UVRgetHistoryData(data).then((res:any)=>{
      // this.toast.dismissLoading();
      if(res != null){
        console.log(res)
// this.HistoryData = res;

res.forEach((element:any) => {
  if (element.SectionName == "Banking Arrangement") {
    this.Banking_Arrangement = "Banking Arrangement";
    this.HistoryData.push(element)
    console.log(element)
  }
  else if (element.SectionName == "About the unit and Machinery") {
    this.About_unit_machinary = "About the unit and Machinery";
    this.HistoryDatamachinary.push(element)
  } else if (element.SectionName == "Machinery Insurance") {
    this.Machinery_Insurance = "Machinery Insurance";
    this.HistoryDatamachinary_insurance.push(element);
  }  else if (element.SectionName == "Machinery Insurance") {
    this.Machinery_Insurance = "Machinery Insurance";
    this.HistoryDatamachinary_insurance.push(element);
  }
  else if (element.SectionName == "About the unit") {
    this.abouttheunit = "About the unit";
    this.Historyaboutunit_performance.push(element);
  }else if (element.SectionName == "Stock Insurance") {
    this.Stock_Insurance = "Stock Insurance";
    this.HistoryStock_Insurance.push(element);
  } else if (element.SectionName == "About Financial Performance") {
    this.aboutfinancialperformance = "About Financial Performance";
    this.Historyaboutfinancial_performance.push(element);
  } 
  else if (element.SectionName == "General observations during the visit") {
    this.Genral_obser_visit = "General observations during the visit";
    this.HistoryGenral_obser_visit.push(element);
  }else if (element.SectionName == "photos") {
    this.Photo = "Photos";
    this.PhotoData.push(element);
  } else if(element.SectionName=="Nature of Commodity/Business"){
    this.commodity="Nature of Commodity/Business"
    this.Historycommodity.push(element);
  }

  
// if(element.SectionName == "Banking Arrangement"){
//   this.data = "Banking Arrangement";
// this.HistoryData.push(element)
// console.log(element)
// }
});
      }

    })
  }
}
