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
  isbank:boolean=false
  iscommdity:boolean=false
  isunitmachinery:boolean=false
  ismachinery:boolean=false
  isaboutunit:boolean=false
  isfinancial:boolean=false
  isstock:boolean=false
  isgeneral:boolean=false
  isphoto:boolean=false
  emptydate: any;
  isemptydate:boolean=false
  constructor(private toast:ToastServiceService,private ApiService:ApiServiceService,private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe((params) => {
      this.SectionHeaderdata = params;
      console.log(params);
    });
  }

  ngOnInit() {
    debugger
    let data = {
      "custid": this.SectionHeaderdata.CUSTOMERID
    }
   
    this.ApiService.UVRgetHistoryDATEData(data).then((res:any)=>{
      debugger
      
      if(JSON.parse(res.data).length != '0'  ){
        JSON.parse(res.data).forEach(element => {
   
            this.Data.push(element);
console.log(this.Data)
              
         this.selectInputShow = true;
      // }
     
    });
      }else{
        this.isemptydate=true
      }
    });
  }
  SelectedEvent(event){
    debugger
    console.log(event.target.value)  //visitid
    let datavalue=this.dateValue //date
    this.dateValue=datavalue
  //  this.Data.forEach(element =>{
  //   if(element.CreatedOn == event.target.value){
  //     this.dateValue = element.visit_id
  //   }
  //  });




    let data = {
      "custid": this.SectionHeaderdata.CUSTOMERID,
      "visitid": this.dateValue 
    }
    // this.toast.presentLoading('');
    this.ApiService.UVRgetHistoryData(data).then((res:any)=>{
      // this.toast.dismissLoading();
      debugger
      var getres=JSON.parse(res.data)
      if(getres != null){
        console.log(getres)
// this.HistoryData = res;

getres.forEach((element:any) => {
  debugger
  if (element.SectionName == "Banking Arrangement") {
    this.isbank=true
    this.Banking_Arrangement = "Banking Arrangement";
    this.HistoryData.push(element)
    console.log(element)
  }
  else if (element.SectionName == "About the unit and Machinery") {
    this.isunitmachinery=true
    this.About_unit_machinary = "About the unit and Machinery";
    this.HistoryDatamachinary.push(element)
  } else if (element.SectionName == "Machinery Insurance") {
    this.Machinery_Insurance = "Machinery Insurance";
    this.HistoryDatamachinary_insurance.push(element);
  }  else if (element.SectionName == "Machinery Insurance") {
    this.ismachinery=true
    this.Machinery_Insurance = "Machinery Insurance";
    this.HistoryDatamachinary_insurance.push(element);
  }
  else if (element.SectionName == "About the unit") {
    this.isaboutunit=true
    this.abouttheunit = "About the unit";
    this.Historyaboutunit_performance.push(element);
  }else if (element.SectionName == "Stock Insurance") {
    this.isstock=true
    this.Stock_Insurance = "Stock Insurance";
    this.HistoryStock_Insurance.push(element);
  } else if (element.SectionName == "About Financial Performance") {
    this.isfinancial=true
    this.aboutfinancialperformance = "About Financial Performance";
    this.Historyaboutfinancial_performance.push(element);
  } 
  else if (element.SectionName == "General observations during the visit") {
    this.isgeneral=true
    this.Genral_obser_visit = "General observations during the visit";
    this.HistoryGenral_obser_visit.push(element);
  }else if (element.SectionName == "photos") {
    this.isphoto=true
    this.Photo = "Photos";
    this.PhotoData.push(element);
  } else if(element.SectionName=="Nature of Commodity/Business"){
    this.iscommdity=true
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
