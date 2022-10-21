import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';
import { Camera, CameraOptions, PictureSourceType } from '@awesome-cordova-plugins/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { DomSanitizer,SafeResourceUrl,SafeUrl } from '@angular/platform-browser';
import { ToastServiceService } from '../service/toast-service.service';
import { AlertServiceService } from '../service/alert-service.service';
import { timeStamp } from 'console';

import { Pipe, PipeTransform } from "@angular/core";
// import { Base64 } from '@ionic-native/base64/ngx';
// import { element } from 'protractor';
@Pipe({
    name: 'actStatusPipe'
  })
@Component({
  selector: 'app-uvrallsection',
  templateUrl: './uvrallsection.page.html',
  styleUrls: ['./uvrallsection.page.scss'],
})
export class UvrallsectionPage implements OnInit {
    xyzzzzz:any;
  reductionnoticedboolean:boolean=false
  isgoodpoorboolean:boolean=false
  isvisible:boolean=true
  sectionEvent: string;
  BankArrShowHide: any;
  val_of_stk_showinputF: any;
  Machinery_finance_SHOW: any;
  EB_paid_regular: any;
  Bank_cause_show: any;
  question:any;
  lat=10;
  long=15;
  manuF_abt_manu_natureofcommodity:any={
   "natureofcommodity":""
  }
  bankingData:any={"bngarrmnt":"","bankname":"","exposurecub":"","totalexposurecub":"","crdit_facility":"","exposure_other_bngname":"","exposure_other_bngTotal":"","status_account":""}
  manuF_abt_manu_machnary:any={
  "loctn_unit":"","distance_unit":"","loctnl_advantge":"","num_emp_unit":"","num_unit":"","exposure_bnk_total":"",
  "unit_instald_capcity":"","oprating_capacity":"","oprating_capacity_list":"","value_stock":"",
  "Fill_details":"","wther_basic_infra":"","machinery_finance":"", "machinery_teext_show":"",
  "totl_machinary_installed":"","wher_EB_paid":"","EB_paid_regular_show":"","last_EB_paid":"","installed_capacity":"","installed_capacity_list":"","producttext":"","last_EB_paid_date":""
  }

  manuF_machnary_insurance:any={
    "whetr_macinary_insur":"","IF_value_insur":"","Name_insur_cmpny":"","duedate":""
  }
  manuF__insur_perf:any={
    "Salses_project":"","crrnt_gst_fill":"","wher_sales_reduct":"","conct_unit":"","latest_audited":"","latest_audited_comment":"","crrnt_gst_fill_comment":"","wher_sales_reduct_comment":"","conct_unit_comment":""
  }
  gentral_observat_vist:any={
    "Disply_bankName ":"","whter_cus_ERV":"","specific_visit1":"","official_staffID":"","official_name":""
  }


  trading_optn1_Data:any={
    "loctn_unit":"","distance_unit":"","locational_advant":"","num_emp_wrk_unit":"","num_unit":""
  }
  trading_optn2_Data:any={
  "whdr_QIS_submission_comment":"","due_date_insurance":"","date_insurance_stock":"", "receivable_beyond_Expecteddate":"","valueofstock":"","dateofstock":"", "receivable_OS":"","receivable_beyond":"","amnt_insur":"","Wher_bnk_clause":"","bnk_clause_show":"","name_insur_cmpny":"","whdr_QIS_submission":"","balance_prev_month_end":""
  }
  trading_optn3_Data:any={
    "sale_projt_FY":"","curnt_year_GST":"","wher_sales_reduc_notic":"","condct_firm_r_unit":""
  }
  trading_optn4_Data:any={
    "Display_bnk_name":"","cus_family_ERV":"","specific_visit_find":"","visit_staff_id":"","visit_official_name":""
  }


  Othr_optn1_Data = {
    "sales_projt_FY":"","curnt_year_GST":"","wher_sales_reduc_notic":"","conct_firm_unit":""
  }
  Othr_optn2_Data = {
    "Display_bnk_name":"","cus_family_ERV":"","specific_visit_find":"","visit_staff_id":"","visit_official_name":""
  }

  IsVisible:boolean=false;
  private photoArray = [];
  questionid151:any=[]
  // date:Date;
  // selectedFrontImage_OCR?: SafeUrl;
  FifthPhoto: any;
  FifthPhoto_base64: string;
  ForthPhoto: any;
  ForthPhoto_base64: string;
  ThirdPhoto: any;
  ThirdPhoto_base64: string;
  //SecondPhoto?: SafeUrl;
  SecondPhoto_base64: string;
  FirstPhoto:any ;
  SecondPhoto:any;
  FirstPhoto_base64: string;
  sectionID: any;
  cusData: any;
  cusID: any;
  cusName: any;
  date:string;
  BranchID: string;
  userID: string;
  getanycredit: any;
  newquestionid: any={};
  getyear: any;
  getreduce: any;
  getsalesdropdown: any;
  responseArray: any;
  getinsurancedone: any;
  getqisubmission1: any;
//   questionid48: any;
//   questionid49: any;
//   questionid50: any;
//   questionid51: any;
//   questionid52: any;
  questionid1: any=[];
  questionid1c:any=[];
  questionid3:any=[];
  questionid4:any=[];
  questionid5:any=[];
  questionid6:any=[];
  questionid421=[];
 questionid411=[];
 questionid401=[];
 questionid391=[];
  questionid73=[];
 questionid341=[];
 questionid74:any=[]
   questionid371=[];
questionid161=[];
  questionid181=[];
   questionid201=[];

   questionid2=[];

   questionid7=[];
  questionid8=[];
  questionid9 = [];
  questionid10 = [];
  questionid11 = [];
  questionid12=[];
  questionid13=[];
  questionid14=[];
  questionid15=[];
questionid16=[];
  questionid17=[];
  questionid18=[];
 questionid19=[];
  questionid20=[];
  questionid21=[];
  questionid22=[];
 questionid23=[];
 questionid24=[];
  questionid25=[];
  questionid26=[];
 questionid27=[];
  questionid28=[];
  questionid29=[];
  questionid30=[];
  questionid31=[];
  questionid32=[];
 questionid33=[];
  questionid34=[];
   questionid35=[];
  questionid36=[];
  questionid37=[];
  questionid38=[];
 questionid39=[];
  questionid40=[];
   questionid41=[];
 questionid42=[];
 questionid43=[];
 questionid44=[];
  questionid45=[];
  questionid46=[];
  questionid47=[];
  questionid48:any;
questionid49:any;
questionid50:any;
questionid51:any;
questionid52:any;
questionid48array=[];
  questionid49array=[];
   questionid50array=[];
   questionid51array=[];
   questionid52array=[];
   questionid53=[];
   questionid54=[];
   questionid55=[];
   questionid56=[];
 questionid57=[];
 questionid75=[];
 questionid741=[];
    getdata: any;
  constructor(private toast:ToastServiceService,private sanitizer:DomSanitizer,private actionSheetController:ActionSheetController,private camera:Camera,private apiservice:ApiServiceService,private activatedRoute:ActivatedRoute,private AlertService:AlertServiceService) { 
    debugger
    // this.toast.presentToast('Saved')
    this.BranchID = localStorage.getItem('branchID');
    this.userID = localStorage.getItem("userID");
    
    
    this.date = new Date().toISOString();
    console.log(this.date)
    this.activatedRoute.queryParams.subscribe((res)=>{
      debugger
      this.getdata=res.data
     // this.sectionEvent=getdata
     // this.sectionEvent = getdata;
      this.sectionID = res.sectionID;
        this.cusID = res.cusID; 
        this.cusName = res.cusName;
      console.log(res);

  });





 
  }

  ngOnInit() {
      debugger



   this. sectionEvent=this.getdata
    let getanswer = {
      "leadid": this.cusID,
      "sectid": this.sectionID
    }
  this.getAnswer_uvr(getanswer);
  }

  anycredit(event:any){
      debugger
this.getanycredit=event
  }

getAnswer_uvr(data){
  debugger
  //this.toast.presentLoading('');
  if(this.sectionID=='38') {
    debugger
    this.apiservice.getupdatefetch(data).then( (resp:any)=> {
        debugger
        var respdata=JSON.parse(resp.data)
        for(let i=0; i< respdata.length; i++) {
            if(respdata[i].QuestionID == 48) {
               
                this.questionid48array.push(respdata[i].FIELD_VALUE)
            }
            for (let i = 0; i < this.questionid48array.length; i++) {
                debugger
                var xyz = this.questionid48array.length

                var abc = this.questionid48array[xyz - 1]
                console.log('test',abc.split(',')[1])
               this.FirstPhoto=btoa(abc)
               this.photoArray[0] = { Photo1: this.FirstPhoto }
            //    this.picarray['inputPicture1'] =this.inputPicture1;
             //  this.ishidephoto1=true;
               debugger

            }

            if(respdata[i].QuestionID == 49) {
                this.questionid49array.push(respdata[i].FIELD_VALUE)
            }
            for (let i = 0; i < this.questionid49array.length; i++) {
                debugger
                var xyz = this.questionid49array.length

                var abc = this.questionid49array[xyz - 1]
              
               this.SecondPhoto=abc;
              this.photoArray[1] = { Photo2: this.SecondPhoto }
              // this.ishidephoto2=true;
               debugger

            }

            if(respdata[i].QuestionID == 50) {
                this.questionid50array.push(respdata[i].FIELD_VALUE)
            }
            for (let i = 0; i < this.questionid50array.length; i++) {
                debugger
                var xyz = this.questionid50array.length

                var abc = this.questionid50array[xyz - 1]
               
               this.ThirdPhoto=abc
               this.photoArray[2] = { Photo3:this.ThirdPhoto }
               //this.ishidephoto3=true;
               debugger

            }

            if(respdata[i].QuestionID == 51) {
                this.questionid51array.push(respdata[i].FIELD_VALUE)
            }
            for (let i = 0; i < this.questionid51array.length; i++) {
                debugger
                var xyz = this.questionid51array.length

                var abc = this.questionid51array[xyz - 1]
               
               this.ForthPhoto=abc
              this.photoArray[3] = { Photo4: this.ForthPhoto }
              // this.ishidephoto4=true;
               debugger

            }

            if(respdata[i].QuestionID == 52) {
                this.questionid52array.push(respdata[i].FIELD_VALUE)
            }
            for (let i = 0; i < this.questionid52array.length; i++) {
                debugger
                var xyz = this.questionid52array.length

                var abc = this.questionid52array[xyz - 1]
               
               this.FifthPhoto=abc
              this.photoArray[4] = { Photo5: this.FifthPhoto }
             //  this.ishidephoto5=true;
               debugger

            }
        }
//         var imageRecieve = [];
//         imageRecieve.push(resp.data)
//   console.log(imageRecieve);
      
    
})
}else{
 
  this.apiservice.getupdatefetch(data).then((res:any)=>{
      debugger
if(res.data){
    var getresdata=JSON.parse(res.data)
 
for(let i=0;i<getresdata.length;i++) {
  if(this.sectionID=='32'){
      debugger
  if(getresdata[i].QuestionID == 1){
debugger
    this.questionid1.push(getresdata[i].FIELD_VALUE)

   
  }
  var xyz=this.questionid1.length
  var abc0=this.questionid1[xyz-1]

  if(abc0=='Multiple' || abc0=='Consortium'){
 this.bankingData.bngarrmnt = abc0;
 let getcommentJSONtmp = { Customerid: this.cusID };
 // let getcommentJSON = angular.extend(tokenJSON, getcommentJSONtmp);
 console.log(getcommentJSONtmp);
 this.apiservice.getDropDownComments(getcommentJSONtmp).then( (resp:any) =>{
debugger
if(JSON.parse(resp.data).length==0){
this.bankingData.bankname=''
}else{

for(let i=0;i<JSON.parse(resp.data).length;i++){
if(JSON.parse(resp.data)[i].questionid=='2'){
this.questionid1c.push(JSON.parse(resp.data)[i].comments)
//document.getElementById('nameofbank').value= res.data[i].comments
}else{
  this.bankingData.bankname=''
}
}
if(this.questionid1c.length>0){

var xyz1 = this.questionid1c.length

var abc1 = this.questionid1c[xyz1 - 1]
this.bankingData.bankname=abc1
}else{
  this.bankingData.bankname=''
}
}

 })
}
 else{
    this.bankingData.bngarrmnt=abc0
  }

  if (getresdata[i].QuestionID == '3') {
    this.questionid3.push(getresdata[i].FIELD_VALUE)

}

for (let i = 0; i < this.questionid3.length; i++) {
    var xyz = this.questionid3.length

    var abc = this.questionid3[xyz - 1]
   this.bankingData.exposurecub = abc

}

if (getresdata[i].QuestionID == '4') {
    this.questionid4.push(getresdata[i].FIELD_VALUE)

}

for (let i = 0; i < this.questionid4.length; i++) {
    var xyz = this.questionid4.length

    var abc = this.questionid4[xyz - 1]
   this. bankingData.totalexposurecub = abc

}
if (getresdata[i].QuestionID == '5') {
    this.questionid5.push(getresdata[i].FIELD_VALUE)

}


    var xyz = this.questionid5.length

    var abc = this.questionid5[xyz - 1]

    if(abc=='Yes'){
       this.bankingData.crdit_facility= abc
       // this.showbanknamecount=true;
        let getcommentJSONtmp = { Customerid: this.cusID };
        // let getcommentJSON = angular.extend(tokenJSON, getcommentJSONtmp);
        console.log(getcommentJSONtmp);
        this.apiservice.getDropDownComments(getcommentJSONtmp).then( (resp:any)=> {
    debugger

    if(JSON.parse(resp.data).length==0){
        this.bankingData.exposure_other_bngname=''
        this.bankingData.exposure_other_bngTotal=''
    }else{
        for(let i=0;i<JSON.parse(resp.data).length;i++){
            if(JSON.parse(resp.data)[i].questionid=='6'){
           this.questionid6.push(JSON.parse(resp.data)[i].comments)
            //document.getElementById('nameofbank').value= res.data[i].comments
            }else{
              this.bankingData.exposure_other_bngname=''
            }
            if(JSON.parse(resp.data)[i].questionid=='7'){
                this.questionid7.push(JSON.parse(resp.data)[i].comments)
                 //document.getElementById('nameofbank').value= res.data[i].comments
                 }else{
                  this.bankingData.exposure_other_bngTotal=''
                 }

            }
if( this.questionid6.length>0){
var xyz1 = this.questionid6.length

var abc1 = this.questionid6[xyz1 - 1]
this.bankingData.exposure_other_bngname=abc1
}else{
  this.bankingData.exposure_other_bngname=''
}
          
             if( this.questionid7.length>0)  {
           
                var xyz2 = this.questionid7.length

                var abc2 = this.questionid7[xyz1 - 1]
                this.bankingData.exposure_other_bngTotal=abc2
             }else{
              this.bankingData.exposure_other_bngTotal=''  
             } 
    }


    
    
        })
    }else{
      this.bankingData.crdit_facility = abc
    }

if (getresdata[i].QuestionID == '8') {
    this.questionid8.push(getresdata[i].FIELD_VALUE)

}

for (let i = 0; i < this.questionid8.length; i++) {
    var xyz1 = this.questionid8.length

    var abc = this.questionid8[xyz1 - 1]
   this. bankingData.status_account = abc

}




}else if(this.sectionID=='33'){
    debugger
  if (getresdata[i].QuestionID == '9') {
    this.questionid9.push(getresdata[i].FIELD_VALUE)

}

for (let i = 0; i < this.questionid9.length; i++) {
    var xyz1 = this.questionid9.length

    var abc = this.questionid9[xyz1 - 1]
    this.manuF_abt_manu_machnary.loctn_unit = abc

}

if (getresdata[i].QuestionID == '10') {
    this.questionid10.push(getresdata[i].FIELD_VALUE)

}
for (let i = 0; i < this.questionid10.length; i++) {
    var xyz1 = this.questionid10.length

    var abc = this.questionid10[xyz1 - 1]
   this.manuF_abt_manu_machnary.distance_unit = abc

}

if (getresdata[i].QuestionID == '11') {
    debugger
    this.questionid11.push(getresdata[i].FIELD_VALUE)

}
for (let i = 0; i < this.questionid11.length; i++) {
    var xyz1 = this.questionid11.length

    var abc = this.questionid11[xyz1 - 1]
    this.manuF_abt_manu_machnary.loctnl_advantge= abc

}

if (getresdata[i].QuestionID == '12') {
    this.questionid12.push(getresdata[i].FIELD_VALUE)

}
for (let i = 0; i < this.questionid12.length; i++) {
    var xyz1 = this.questionid12.length

    var abc = this.questionid12[xyz1 - 1]
   this.manuF_abt_manu_machnary.num_emp_unit = abc

}

if (getresdata[i].QuestionID == '13') {
    this.questionid13.push(getresdata[i].FIELD_VALUE)

}
for (let i = 0; i < this.questionid13.length; i++) {
    var xyz1 = this.questionid13.length

    var abc = this.questionid13[xyz1 - 1]
    this.manuF_abt_manu_machnary.num_unit = abc

}

if (getresdata[i].QuestionID == '14') {
    this.questionid14.push(getresdata[i].FIELD_VALUE)
    console.log('questionid14',this.questionid14)

}

    var xyz1 = this.questionid14.length

    var abc = this.questionid14[xyz1 - 1]
    console.log('abc',abc)
   this.manuF_abt_manu_machnary.unit_instald_capcity= abc



debugger
if(getresdata[i].QuestionID=='74'){
this.questionid74.push(getresdata[i].FIELD_VALUE)
}
debugger
var xyz = this.questionid74.length

var abc = this.questionid74[xyz - 1]
console.log('abc',abc)
this.manuF_abt_manu_machnary.installed_capacity = abc
let getcommentJSONtmp1 = { Customerid: this.cusID };
debugger
this.apiservice.getDropDownComments(getcommentJSONtmp1).then( (resp:any) =>{
debugger
console.log('ramesh',JSON.parse(resp.data))
if(JSON.parse(resp.data).length==0)  {
    debugger
this.manuF_abt_manu_machnary.installed_capacity_list=''  
} else{
   
    debugger
for(let i=0;i<JSON.parse(resp.data).length;i++){
if(JSON.parse(resp.data)[i].questionid=='74'){
    debugger
this.questionid741.push(JSON.parse(resp.data)[i].comments)
}else{
this.manuF_abt_manu_machnary.installed_capacity_list=''  
}



}
if( this.questionid741.length>0){
    debugger
var xyz1 = this.questionid741.length

var abc1 = this.questionid741[xyz1 - 1]
this.manuF_abt_manu_machnary.installed_capacity_list=abc1
}else{
  this.manuF_abt_manu_machnary.installed_capacity_list=''
}
}
})




if (getresdata[i].QuestionID == '15') {
    this.questionid15.push(getresdata[i].FIELD_VALUE)

}
// for (let i = 0; i < this.questionid15.length; i++) {
    var xyz1 = this.questionid15.length

    var abc = this.questionid15[xyz - 1]
   this.manuF_abt_manu_machnary.oprating_capacity = abc
    let getcommentJSONtmp = { Customerid:this.cusID };
    this.apiservice.getDropDownComments(getcommentJSONtmp).then( (resp:any) =>{
        debugger

if(JSON.parse(resp.data).length==0){
this.manuF_abt_manu_machnary.oprating_capacity_list=''
}else{
for(let i=0;i<JSON.parse(resp.data).length;i++){
if(JSON.parse(resp.data)[i].questionid=='15'){
this.questionid151.push(JSON.parse(resp.data)[i].comments)
//document.getElementById('nameofbank').value= res.data[i].comments
}else{
this.manuF_abt_manu_machnary.oprating_capacity_list='' 
}
}
if( this.questionid151.length>0){

var xyz1 = this.questionid151.length

var abc1 = this.questionid151[xyz1 - 1]
this.manuF_abt_manu_machnary.oprating_capacity_list=abc1
}else{
this.manuF_abt_manu_machnary.oprating_capacity_list='' 
}
}
})
debugger
if (getresdata[i].QuestionID == '16') {

this.questionid16.push(getresdata[i].FIELD_VALUE)

}
debugger
var xyz1 = this.questionid16.length

var abc = this.questionid16[xyz1 - 1]

if(abc=='Yes'){
   
    debugger
this.manuF_abt_manu_machnary.value_stock = abc
// this.showproduct=true;
let getcommentJSONtmp = { Customerid: this.cusID };
// let getcommentJSON = angular.extend(tokenJSON, getcommentJSONtmp);
console.log(getcommentJSONtmp);
this.apiservice.getDropDownComments(getcommentJSONtmp).then( (resp:any) =>{
debugger



if(JSON.parse(resp.data).length==0){
this.manuF_abt_manu_machnary.producttext=''
}else{
    debugger
for(let i=0;i<JSON.parse(resp.data).length;i++){
if(JSON.parse(resp.data)[i].questionid=='16'){
this.questionid161.push(JSON.parse(resp.data)[i].comments)
//document.getElementById('nameofbank').value= res.data[i].comments
}else{
 this. manuF_abt_manu_machnary.producttext=''
}
}
if( this.questionid161.length>0){



var xyz1 = this.questionid161.length

var abc1 = this.questionid161[xyz1 - 1]
this.manuF_abt_manu_machnary.producttext=abc1
}else{
this.manuF_abt_manu_machnary.producttext=''
}
}






})
}else{
this.manuF_abt_manu_machnary.value_stock = abc
}

if (getresdata[i].QuestionID == '17') {
    this.questionid17.push(getresdata[i].FIELD_VALUE)

}
for (let i = 0; i < this.questionid17.length; i++) {
    var xyz1 = this.questionid17.length

    var abc = this.questionid17[xyz1 - 1]
   this.manuF_abt_manu_machnary.wther_basic_infra= abc

}

if (getresdata[i].QuestionID == '18') {
    this.questionid18.push(getresdata[i].FIELD_VALUE)

}

    var xyz1 = this.questionid18.length

    var abc = this.questionid18[xyz1 - 1]


    if(abc=='Yes'){
        debugger
        this.manuF_abt_manu_machnary.machinery_finance = abc
        // this.showfinance=true;
        let getcommentJSONtmp = { Customerid:this.cusID };
        // let getcommentJSON = angular.extend(tokenJSON, getcommentJSONtmp);
        console.log(getcommentJSONtmp);
        this.apiservice.getDropDownComments(getcommentJSONtmp).then( (resp:any) =>{
    debugger
    var getresp=JSON.parse(resp.data)

if(getresp.length==0){
this.manuF_abt_manu_machnary.machinery_teext_show=''
}else{
for(let i=0;i<getresp.length;i++){
if(getresp[i].questionid=='18'){
this.questionid181.push(getresp[i].comments)
//document.getElementById('nameofbank').value= res.data[i].comments
}else{
this.manuF_abt_manu_machnary.machinery_teext_show=''
}
}
debugger
if(  this.questionid181.length>0){
var xyz1 = this.questionid181.length

var abc1 = this.questionid181[xyz1 - 1]
this.manuF_abt_manu_machnary.machinery_teext_show=abc1
}else{
  this.manuF_abt_manu_machnary.machinery_teext_show==''
}
}

   
   

    
    
        })
    }else{
      this.manuF_abt_manu_machnary.machinery_finance = abc
    }

   



if (getresdata[i].QuestionID == '19') {
    this.questionid19.push(getresdata[i].FIELD_VALUE)

}
for (let i = 0; i < this.questionid19.length; i++) {
    var xyz1 = this.questionid19.length

    var abc = this.questionid19[xyz1 - 1]
   this.manuF_abt_manu_machnary.totl_machinary_installed = abc

}

if (getresdata[i].QuestionID == '20') {
    this.questionid20.push(getresdata[i].FIELD_VALUE)

}

    var xyz1 = this.questionid20.length

    var abc = this.questionid20[xyz - 1]


    if(abc=='No'){
      this.manuF_abt_manu_machnary.wher_EB_paid = abc
        // this.showeb=true;
        let getcommentJSONtmp = { Customerid: this.cusID };
        // let getcommentJSON = angular.extend(tokenJSON, getcommentJSONtmp);
        console.log(getcommentJSONtmp);
        this.apiservice.getDropDownComments(getcommentJSONtmp).then( (resp:any)=> {
    debugger


if(JSON.parse(resp.data).length==0){
this.manuF_abt_manu_machnary.EB_paid_regular_show=''
}else{
for(let i=0;i<JSON.parse(resp.data).length;i++){
if(JSON.parse(resp.data)[i].questionid=='20'){
this.questionid201.push(JSON.parse(resp.data)[i].comments)
//document.getElementById('nameofbank').value= res.data[i].comments
}else{
this.manuF_abt_manu_machnary.EB_paid_regular_show=''
}
}

if( this.questionid201.length>0){
var xyz1 = this.questionid201.length

var abc1 = this.questionid201[xyz1 - 1]
this.manuF_abt_manu_machnary.EB_paid_regular_show=abc1
}
else{
this.manuF_abt_manu_machnary.EB_paid_regular_show=''
}
}

 
   

    
    
        })
    }else{
        this.manuF_abt_manu_machnary.wher_EB_paid = abc
    }

   



if (getresdata[i].QuestionID == '21') {
    this.questionid21.push(getresdata[i].FIELD_VALUE)

}
for (let i = 0; i < this.questionid21.length; i++) {
    var xyz1 = this.questionid21.length
console.log('billdate',xyz1)
    var abc = this.questionid21[xyz1 - 1]
    console.log('date',abc)
    this.manuF_abt_manu_machnary.last_EB_paid_date = abc

}

if (getresdata[i].QuestionID == '22') {
    this.questionid22.push(getresdata[i].FIELD_VALUE)

}
for (let i = 0; i < this.questionid22.length; i++) {
    var xyz1 = this.questionid22.length
console.log('billapaid',xyz)
    var abc = this.questionid22[xyz - 1]
    console.log('paidbill',abc)
  this.manuF_abt_manu_machnary.last_EB_paid = abc

}
}
else if(this.sectionID=='34'){
    if (getresdata[i].QuestionID == '23') {
        this.questionid23.push(getresdata[i].FIELD_VALUE)

    }
   
        var xyz1 = this.questionid23.length

        var abc = this.questionid23[xyz1 - 1]
        if(abc=='Yes'){
            this.IsVisible=true;
        }else{
            this.IsVisible=false; 
        }
        this.manuF_machnary_insurance.whetr_macinary_insur = abc

        

 

    if (getresdata[i].QuestionID == '24') {
        this.questionid24.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid24.length; i++) {
        var xyz1 = this.questionid24.length

        var abc = this.questionid24[xyz1 - 1]
       
        this.manuF_machnary_insurance.IF_value_insur= abc

    }

    if (getresdata[i].QuestionID == '25') {
        this.questionid25.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid25.length; i++) {
        var xyz1 = this.questionid25.length

        var abc = this.questionid25[xyz1 - 1]
       
       this.manuF_machnary_insurance.duedate = abc

    }

    if (getresdata[i].QuestionID == '26') {
        this.questionid26.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid26.length; i++) {
        var xyz1 = this.questionid26.length

        var abc = this.questionid26[xyz1 - 1]
       
      this.manuF_machnary_insurance.Name_insur_cmpny = abc

    }
}
else if(this.sectionID=='35'){
    if (getresdata[i].QuestionID == '38') {
        this.questionid38.push(getresdata[i].FIELD_VALUE)

    }
    // for (let i = 0; i < this.questionid38.length; i++) {
        var xyz1 = this.questionid38.length

        var abc = this.questionid38[xyz1 - 1]
       
       this. manuF__insur_perf.latest_audited = abc

    // }

    if (getresdata[i].QuestionID == '39') {
        this.questionid39.push(getresdata[i].FIELD_VALUE)

    }
    // for (let i = 0; i < this.questionid39.length; i++) {
        var xyz1 = this.questionid39.length

        var abc = this.questionid39[xyz1 - 1]
       
       

        if(abc=='No'){
           this.manuF__insur_perf.Salses_project = abc
           // this.salecomment=true;
            let getcommentJSONtmp = { Customerid:this.cusID };
            // let getcommentJSON = angular.extend(tokenJSON, Comments);
            console.log(getcommentJSONtmp);
            this.apiservice.getDropDownComments(getcommentJSONtmp).then( (resp:any)=> {
debugger

if(JSON.parse(resp.data).length==0){
this.manuF__insur_perf.latest_audited_comment = ''
}else{
for(let i=0;i<JSON.parse(resp.data).length;i++){
if(JSON.parse(resp.data)[i].questionid=='39'){
this.questionid391.push(JSON.parse(resp.data)[i].comments)
// document.getElementById('Comments').value= res.data[i].comments
}else{
    this.manuF__insur_perf.latest_audited_comment = ''
}
}

if(this.questionid391.length>0){
var xyz1=this.questionid391.length
var abc1=this.questionid391[xyz1-1]
this.manuF__insur_perf.latest_audited_comment = abc1
}else{
this.manuF__insur_perf.latest_audited_comment = ''
}
}





            })
           }else{
           this.manuF__insur_perf.Salses_project= abc
           }









    // }
    if (getresdata[i].QuestionID == '40') {
        this.questionid40.push(getresdata[i].FIELD_VALUE)

    }
    // for (let i = 0; i < this.questionid40.length; i++) {
        var xyz1 = this.questionid40.length

        var abc = this.questionid40[xyz1 - 1]
       
      debugger

        if(abc=='Yes'){
            this.manuF__insur_perf.crrnt_gst_fill= abc
           // this.currentyear=true;
            let getcommentJSONtmp = { Customerid: this.cusID };
            // let getcommentJSON = angular.extend(tokenJSON, Comments);
            console.log(getcommentJSONtmp);
            this.apiservice.getDropDownComments(getcommentJSONtmp).then( (resp:any) =>{
debugger

if(JSON.parse(resp.data).length==0){
this.manuF__insur_perf.crrnt_gst_fill_comment= ''
}else{
for(let i=0;i<JSON.parse(resp.data).length;i++){
if(JSON.parse(resp.data)[i].questionid=='40'){
this.questionid401.push(JSON.parse(resp.data)[i].comments)
// document.getElementById('Comments').value= res.data[i].comments
}else{
this.manuF__insur_perf.crrnt_gst_fill_comment= ''
}
}
if(  this.questionid401.length>0){

var xyz1=this.questionid401.length
var abc1=this.questionid401[xyz1-1]
this.manuF__insur_perf.crrnt_gst_fill_comment = abc1
}else{
this.manuF__insur_perf.crrnt_gst_fill_comment= ''
}
}



            })
           }else{
           this.manuF__insur_perf.crrnt_gst_fill= abc
           }



    // }

    if (getresdata[i].QuestionID == '41') {
        this.questionid41.push(getresdata[i].FIELD_VALUE)

    }
    // for (let i = 0; i < this.questionid41.length; i++) {
        var xyz1 = this.questionid41.length

        var abc = this.questionid41[xyz1 - 1]
       
       

        if(abc=='Yes'){
            this.manuF__insur_perf.wher_sales_reduct = abc
           // this.reductionnoticedboolean=true;
            let getcommentJSONtmp = { Customerid:this.cusID };
            // let getcommentJSON = angular.extend(tokenJSON, Comments);
            console.log(getcommentJSONtmp);
            this.apiservice.getDropDownComments(getcommentJSONtmp).then( (resp:any) =>{
debugger


if(JSON.parse(resp.data).length==0){
this.manuF__insur_perf.wher_sales_reduct_comment= ''
}else{
for(let i=0;i<JSON.parse(resp.data).length;i++){
if(JSON.parse(resp.data)[i].questionid=='41'){
this.questionid411.push(JSON.parse(resp.data)[i].comments)
// document.getElementById('Comments').value= res.data[i].comments
}
}
if(this.questionid411.length>0){
var xyz1=this.questionid411.length
var abc1=this.questionid411[xyz1-1]
this.manuF__insur_perf.wher_sales_reduct_comment = abc1
}else{
    this.manuF__insur_perf.wher_sales_reduct_comment = ''
}
}



            })
           }else{
           this.manuF__insur_perf.wher_sales_reduct= abc
           }



    // }

    if (getresdata[i].QuestionID == '42') {
        this.questionid42.push(getresdata[i].FIELD_VALUE)

    }
    // for (let i = 0; i < this.questionid42.length; i++) {
        var xyz1 = this.questionid42.length

        var abc = this.questionid42[xyz1 - 1]
       
     
        if(abc=='Closed' || abc=='Poor'){
            this.manuF__insur_perf.conct_unit = abc

           // this.goodpoorboolean=true;
            let getcommentJSONtmp = { Customerid: this.cusID };
            // let getcommentJSON = angular.extend(tokenJSON, Comments);
            console.log(getcommentJSONtmp);
            this.apiservice.getDropDownComments(getcommentJSONtmp).then( (resp:any) =>{
debugger

if(JSON.parse(resp.data).length==0){
this.manuF__insur_perf.conct_unit_comment = ''
}else{
for(let i=0;i<JSON.parse(resp.data).length;i++){
if(JSON.parse(resp.data)[i].questionid=='42'){
this.questionid421.push(JSON.parse(resp.data)[i].comments)
// document.getElementById('Comments').value= res.data[i].comments
}else{
this.manuF__insur_perf.conct_unit_comment = ''
}
}
if( this.questionid421.length>0){
var xyz1=this.questionid421.length
var abc1=this.questionid421[xyz1-1]
this.manuF__insur_perf.conct_unit_comment = abc1
}
else{
this.manuF__insur_perf.conct_unit_comment = ''
}
}




            })
           }else{
            this.manuF__insur_perf.conct_unit  = abc

           }




    // }
}
else if(this.sectionID=='39'){
    if (getresdata[i].QuestionID == '53') {
        this.questionid53.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid53.length; i++) {
        var xyz1 = this.questionid53.length

        var abc = this.questionid53[xyz1 - 1]
       
        this.trading_optn1_Data.loctn_unit = abc

    }

    if (getresdata[i].QuestionID == '54') {
        this.questionid54.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid54.length; i++) {
        var xyz1 = this.questionid54.length

        var abc = this.questionid54[xyz1 - 1]
       
        this.trading_optn1_Data.distance_unit = abc

    }

    if (getresdata[i].QuestionID == '55') {
        this.questionid55.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid55.length; i++) {
        var xyz1 = this.questionid55.length

        var abc = this.questionid55[xyz1 - 1]
       
      this.trading_optn1_Data.locational_advant = abc

    }
    if (getresdata[i].QuestionID == '56') {
        this.questionid56.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid56.length; i++) {
        var xyz1 = this.questionid56.length

        var abc = this.questionid56[xyz1 - 1]
       
       this.trading_optn1_Data.num_emp_wrk_unit = abc

    }

    if (getresdata[i].QuestionID == '57') {
        this.questionid57.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid57.length; i++) {
        var xyz1 = this.questionid57.length

        var abc = this.questionid57[xyz1 - 1]
       
        this.trading_optn1_Data.num_unit = abc

    }
}
else if(this.sectionID=='36'){
    debugger
    if (getresdata[i].QuestionID == '27') {
        this.questionid27.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid27.length; i++) {
        var xyz1 = this.questionid27.length

        var abc = this.questionid27[xyz1 - 1]
       
        this.trading_optn2_Data.dateofstock = abc

    }

    if (getresdata[i].QuestionID == '28') {
        this.questionid28.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid28.length; i++) {
        var xyz1 = this.questionid28.length

        var abc = this.questionid28[xyz1 - 1]
       
        this.trading_optn2_Data.receivable_OS = abc

    }

    if (getresdata[i].QuestionID == '29') {
        this.questionid29.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid29.length; i++) {
        var xyz1 = this.questionid29.length

        var abc = this.questionid29[xyz1 - 1]
       
        this.trading_optn2_Data.receivable_beyond = abc

    }

    if (getresdata[i].QuestionID == '30') {
        this.questionid30.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid30.length; i++) {
        var xyz1 = this.questionid30.length

        var abc = this.questionid30[xyz1 - 1]
       
       this.trading_optn2_Data.receivable_beyond_Expecteddate = abc

    }

    if (getresdata[i].QuestionID == '31') {
        this.questionid31.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid31.length; i++) {
        var xyz1 = this.questionid31.length

        var abc = this.questionid31[xyz1 - 1]
       
        this.trading_optn2_Data.date_insurance_stock= abc

    }

    if (getresdata[i].QuestionID == '32') {
        this.questionid32.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid32.length; i++) {
        var xyz1 = this.questionid32.length

        var abc = this.questionid32[xyz1 - 1]
       
        this.trading_optn2_Data.amnt_insur = abc

    }

    if (getresdata[i].QuestionID == '33') {
        this.questionid33.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid33.length; i++) {
        var xyz1 = this.questionid33.length

        var abc = this.questionid33[xyz1 - 1]
       
        this.trading_optn2_Data.due_date_insurance = abc

    }
debugger
    if (getresdata[i].QuestionID == '34') {
        this.questionid34.push(getresdata[i].FIELD_VALUE)

    }
   
        var xyz1 = this.questionid34.length

        var abc = this.questionid34[xyz1 - 1]
        debugger
       if(abc=='Yes'){
       this.trading_optn2_Data.Wher_bnk_clause = abc
       // this.ishidecomments=true;
        let getcommentJSONtmp = { Customerid: this.cusID };
        // let getcommentJSON = angular.extend(tokenJSON, Comments);
        console.log(getcommentJSONtmp);
        this.apiservice.getDropDownComments(getcommentJSONtmp).then( (resp:any) =>{
debugger


if(JSON.parse(resp.data).length==0){
this.trading_optn2_Data.bnk_clause_show = ''
}else{
for(let i=0;i<JSON.parse(resp.data).length;i++){
if(JSON.parse(resp.data)[i].questionid=='34'){
this.questionid341.push(JSON.parse(resp.data)[i].comments)
// document.getElementById('Comments').value= res.data[i].comments
}else{
this.trading_optn2_Data.bnk_clause_show = ''
}
}

if(this.questionid341.length>0){
var xyz1=this.questionid341.length
var abc1=this.questionid341[xyz1-1]
this.trading_optn2_Data.bnk_clause_show = abc1
}else{
this.trading_optn2_Data.bnk_clause_show = ''
}
}



        })
       }else{
        this.trading_optn2_Data.Wher_bnk_clause = abc
       }
      

  

  

    if (getresdata[i].QuestionID == '35') {
        this.questionid35.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid35.length; i++) {
        var xyz1 = this.questionid35.length

        var abc = this.questionid35[xyz1 - 1]
       
       this.trading_optn2_Data.name_insur_cmpny = abc

    }

    if (getresdata[i].QuestionID == '73') {
        this.questionid73.push(getresdata[i].FIELD_VALUE)

    }
   
        var xyz1 = this.questionid73.length

        var abc = this.questionid73[xyz1 - 1]
       
       this.trading_optn2_Data.valueofstock = abc

 


    if (getresdata[i].QuestionID == '36') {
        this.questionid36.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid36.length; i++) {
        var xyz1 = this.questionid36.length

        var abc = this.questionid36[xyz1 - 1]
       
        this.trading_optn2_Data.balance_prev_month_end = abc

    }
debugger
    if (getresdata[i].QuestionID == '37') {
        this.questionid37.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid37.length; i++) {
        var xyz1 = this.questionid37.length

        var abc = this.questionid37[xyz1 - 1]
        if(abc=='Yes'){
            this.trading_optn2_Data.whdr_QIS_submission= abc
           // this.ishidedate=true;
            let getcommentJSONtmp = { Customerid: this.cusID };
            // let getcommentJSON = angular.extend(tokenJSON, Comments);
            console.log(getcommentJSONtmp);
            this.apiservice.getDropDownComments(getcommentJSONtmp).then( (resp:any)=> {
debugger

if(JSON.parse(resp.data).length==0){
this.trading_optn2_Data.whdr_QIS_submission_comment = ''
}else{
for(let i=0;i<JSON.parse(resp.data).length;i++){
if(JSON.parse(resp.data)[i].questionid=='37'){
this.questionid371.push(JSON.parse(resp.data)[i].comments)
// document.getElementById('Comments').value= res.data[i].comments
}else{
    this.trading_optn2_Data.whdr_QIS_submission_comment = ''
}
}
if( this.questionid371.length>0){
var xyz1=this.questionid371.length
var abc1=this.questionid371[xyz1-1]
this.trading_optn2_Data.whdr_QIS_submission_comment = abc1
}
else{
    this.trading_optn2_Data.whdr_QIS_submission_comment = '' 
}
}




            })
           }else{
            this.trading_optn2_Data.whdr_QIS_submission = abc
           }


       

    }

}
else if(this.sectionID=='37'){
    debugger
    if (getresdata[i].QuestionID == '43') {
        this.questionid43.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid43.length; i++) {
        var xyz1 = this.questionid43.length

        var abc = this.questionid43[xyz1 - 1]
       
       this.gentral_observat_vist.Disply_bankName = abc

    }

    if (getresdata[i].QuestionID == '44') {
        this.questionid44.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid44.length; i++) {
        var xyz1 = this.questionid44.length

        var abc = this.questionid44[xyz1 - 1]
       
       this.gentral_observat_vist.whter_cus_ERV = abc

    }

    if (getresdata[i].QuestionID == '45') {
        this.questionid45.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid45.length; i++) {
        var xyz1 = this.questionid45.length

        var abc = this.questionid45[xyz1 - 1]
       
       this.gentral_observat_vist.specific_visit1 = abc

    }

    if (getresdata[i].QuestionID == '46') {
        this.questionid46.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid46.length; i++) {
        var xyz1 = this.questionid46.length

        var abc = this.questionid46[xyz - 1]
       
      this.gentral_observat_vist.official_staffID= abc

    }

    if (getresdata[i].QuestionID == '47') {
        this.questionid47.push(getresdata[i].FIELD_VALUE)

    }
    for (let i = 0; i < this.questionid47.length; i++) {
        var xyz1 = this.questionid47.length

        var abc = this.questionid47[xyz - 1]
       
       this.gentral_observat_vist.official_name = abc

    }

}
else if(this.sectionID=='40'){
    debugger
    if (getresdata[i].QuestionID == '75') {
        this.questionid75.push(getresdata[i].FIELD_VALUE)

    } 
    var xyz1 = this.questionid75.length

    var abc = this.questionid75[xyz1 - 1]
   
  this.manuF_abt_manu_natureofcommodity.natureofcommodity = abc

}

}

}
  
});
this.toast.dismissLoading();


}
}








  banking(data,data1){
  console.log(data);
  console.log(data1.target.value)
  }





  bankingARR(event){
    this.BankArrShowHide = event.target.value;

  }
  val_of_stk_showinput(event){
    this.val_of_stk_showinputF = event.target.value;
  }
  machinery_finance(event){
    this.Machinery_finance_SHOW = event.target.value;
  }
  EB_paid_reg(event){
    this.EB_paid_regular = event.target.value;
  }
  Bank_cause(event){
    this.Bank_cause_show = event.target.value;
  }

 






  

  uvrBankSubmit(){
      debugger
    var finaltodayDate=new Date();
//     console.log(this.bankingData.bngarrmnt)
//     if(this.bankingData.bngarrmnt == ''  || this.bankingData.exposurecub == ''
//     ||this.bankingData.totalexposurecub == '' || this.bankingData.crdit_facility == '' || this.bankingData.exposure_other_bngname == ''
//     || this.bankingData.exposure_other_bngTotal == '' || this.bankingData.status_account == ''){
// alert('please fill all field')
//     }else 


if(this.bankingData.bngarrmnt==''){
  alert('Please fill Banking Arrangement ');
}else 
if(this.bankingData.bngarrmnt=="Multiple" || this.bankingData.bngarrmnt=="Consortium"){
  if(this.bankingData.bankname==''){
    alert('Please fill Name of the bank');
  } else if(this.bankingData.crdit_facility==''){
    alert('Select Any credit facility');
  } else 
  if(this.bankingData.crdit_facility=='Yes'){
    if(this.bankingData.exposure_other_bngname=='' || this.bankingData.exposure_other_bngTotal==''){
      if(this.bankingData.exposure_other_bngname==''){
        alert('Please Fill Exposure with other Bank Name');
      }else{
        alert('Please Fill Exposure with other Bank Total');
      }
    }
  else if(this.bankingData.status_account==''){
    alert('Select Status of the account');
  }else{
    let bankarrangementarray = [{
      "FunctionID": "1",
      "questionID": "1",
      "Answer": this.bankingData.bngarrmnt,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
      "userid": this.userID,
      "createdDate": this.date,
      "catagoryPK1": 0
    },
    {
      "FunctionID": "1",
          "questionID": "2",
          "Answer": this.bankingData.bankname,
          "sectionID": this.sectionID,
          "partyID": 0,
          "leadID": this.cusID,
          "branchid": this.BranchID,
    "userid": this.userID,
          "createdDate": this.date,
          "catagoryPK1": 0
    },
    {
      "FunctionID": "1",
      "questionID": "3",
      "Answer": this.bankingData.exposurecub,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
  "userid": this.userID,
      "createdDate": this.date,
      "catagoryPK1": 0
    },
    {
      "FunctionID": "1",
        "questionID": "4",
        "Answer": this.bankingData.totalexposurecub,
        "sectionID": this.sectionID,
        "partyID": 0,
        "leadID": this.cusID,
        "branchid": this.BranchID,
    "userid": this.userID,
        "createdDate": this.date,
        "catagoryPK1": 0
    },
    {
      "FunctionID": "1",
        "questionID": "5",
        "Answer": this.bankingData.crdit_facility,
        "sectionID": this.sectionID,
        "partyID": 0,
        "leadID": this.cusID,
        "branchid": this.BranchID,
    "userid": this.userID,
        "createdDate": this.date,
        "catagoryPK1": 0

    },
    {
      "FunctionID": "1",
      "questionID": "6",
      "Answer": this.bankingData.exposure_other_bngname,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
  "userid": this.userID,
      "createdDate": this.date,
      "catagoryPK1": 0 
    },
    {
      "FunctionID": "1",
      "questionID": "7",
      "Answer": this.bankingData.exposure_other_bngTotal,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
  "userid": this.userID,
      "createdDate":this.date,
      "catagoryPK1": 0
    },{
      "FunctionID": "1",
      "questionID": "8",
      "Answer": this.bankingData.status_account,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
  "userid": this.userID,
      "createdDate": this.date,
      "catagoryPK1": 0
    }

  ]
  for (let i = 0; i < bankarrangementarray.length; i++) {
    var res = i;
    // if (bankingarrangement != "Sole" ) {
    if (bankarrangementarray[i].questionID == '2' || bankarrangementarray[i].questionID == '6' || bankarrangementarray[i].questionID == '7') {
        var datasertest =
        {
            'Customerid': this.cusID,
            'FunctionID': bankarrangementarray[i].FunctionID,
            'questionid': bankarrangementarray[i].questionID,
            'comments': bankarrangementarray[i].Answer,
            'CreateDate': finaltodayDate,
            'updateddate': finaltodayDate,
            'createdby': this.userID,
            'updatedby': this.userID,
            'control_ID': 'T'
        }
        
        this.apiservice.saveComments(datasertest).then( (resp:any)=> {
            debugger
         
            // alert('inserted');
            console.log(resp.data);
        });
    }
    // }
     if (bankarrangementarray[i].questionID != '2' || bankarrangementarray[i].questionID != '6' || bankarrangementarray[i].questionID != '7' || bankarrangementarray[i].questionID == '2' || bankarrangementarray[i].questionID == '6' || bankarrangementarray[i].questionID == '7') {

if(bankarrangementarray[i].questionID == '2'){
this.newquestionid='100'
}else if(bankarrangementarray[i].questionID == '6'){
this.newquestionid='101'
}else if(bankarrangementarray[i].questionID == '7'){
this.newquestionid='102'
}
else{
this.newquestionid=bankarrangementarray[i].questionID
}


       var datasertest1 =
        {
            'FunctionID': bankarrangementarray[i].FunctionID,
            'questionID': this.newquestionid,
            'Answer': bankarrangementarray[i].Answer,
            'sectionID': bankarrangementarray[i].sectionID,
            'partyID': 0,
            'leadID': bankarrangementarray[i].leadID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        }
      
        this.apiservice.appformdetailinsert(datasertest1).then( (resp:any)=> {
            debugger
            // alert('inserted');
            console.log(resp.data);
        });
        let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '32', Status: 'A' };
        //let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
        debugger
        this.apiservice.saveMandValidation(getdataJSONtmp).then(function (resp) {
            debugger
            console.log(resp.data);
        })
    }
}
if (bankarrangementarray.length - 1 == res) {
  debugger
 //this.IsDisabled=false;
 //this.toast.presentToast('saved Successfully');
 this.AlertService.presentAlert("Alert","saved Successfully")
 return false;
 //alert("saved Successfully")
  // alert("saved succesfully");

}

}//this.BankingApiInsert(answer8);

  } else{
    if(this.bankingData.status_account==''){
      alert('Select Status of the account');
    } else{
      let bankarrangementarray = [{
        "FunctionID": "1",
        "questionID": "1",
        "Answer": this.bankingData.bngarrmnt,
        "sectionID": this.sectionID,
        "partyID": 0,
        "leadID": this.cusID,
        "branchid": this.BranchID,
        "userid": this.userID,
        "createdDate": this.date,
        "catagoryPK1": 0
      },
      {
        "FunctionID": "1",
            "questionID": "2",
            "Answer": this.bankingData.bankname,
            "sectionID": this.sectionID,
            "partyID": 0,
            "leadID": this.cusID,
            "branchid": this.BranchID,
      "userid": this.userID,
            "createdDate": this.date,
            "catagoryPK1": 0
      },
      {
        "FunctionID": "1",
        "questionID": "3",
        "Answer": this.bankingData.exposurecub,
        "sectionID": this.sectionID,
        "partyID": 0,
        "leadID": this.cusID,
        "branchid": this.BranchID,
    "userid": this.userID,
        "createdDate": this.date,
        "catagoryPK1": 0
      },
      {
        "FunctionID": "1",
          "questionID": "4",
          "Answer": this.bankingData.totalexposurecub,
          "sectionID": this.sectionID,
          "partyID": 0,
          "leadID": this.cusID,
          "branchid": this.BranchID,
      "userid": this.userID,
          "createdDate": this.date,
          "catagoryPK1": 0
      },
      {
        "FunctionID": "1",
          "questionID": "5",
          "Answer": this.bankingData.crdit_facility,
          "sectionID": this.sectionID,
          "partyID": 0,
          "leadID": this.cusID,
          "branchid": this.BranchID,
      "userid": this.userID,
          "createdDate": this.date,
          "catagoryPK1": 0
  
      },
      {
        "FunctionID": "1",
        "questionID": "6",
        "Answer": this.bankingData.exposure_other_bngname,
        "sectionID": this.sectionID,
        "partyID": 0,
        "leadID": this.cusID,
        "branchid": this.BranchID,
    "userid": this.userID,
        "createdDate": this.date,
        "catagoryPK1": 0 
      },
      {
        "FunctionID": "1",
        "questionID": "7",
        "Answer": this.bankingData.exposure_other_bngTotal,
        "sectionID": this.sectionID,
        "partyID": 0,
        "leadID": this.cusID,
        "branchid": this.BranchID,
    "userid": this.userID,
        "createdDate":this.date,
        "catagoryPK1": 0
      },{
        "FunctionID": "1",
        "questionID": "8",
        "Answer": this.bankingData.status_account,
        "sectionID": this.sectionID,
        "partyID": 0,
        "leadID": this.cusID,
        "branchid": this.BranchID,
    "userid": this.userID,
        "createdDate": this.date,
        "catagoryPK1": 0
      }
  
    ]
    for (let i = 0; i < bankarrangementarray.length; i++) {
      var res = i;
      // if (bankingarrangement != "Sole" ) {
      if (bankarrangementarray[i].questionID == '2' || bankarrangementarray[i].questionID == '6' || bankarrangementarray[i].questionID == '7') {
          var datasertest =
          {
              'Customerid': this.cusID,
              'FunctionID': bankarrangementarray[i].FunctionID,
              'questionid': bankarrangementarray[i].questionID,
              'comments': bankarrangementarray[i].Answer,
              'CreateDate': finaltodayDate,
              'updateddate': finaltodayDate,
              'createdby': this.userID,
              'updatedby': this.userID,
              'control_ID': 'T'
          }
          
          this.apiservice.saveComments(datasertest).then( (resp:any)=> {
              debugger
           
              // alert('inserted');
              console.log(resp);
          }, function (resp) {
              console.log(resp);
  
          });
      }
      // }
       if (bankarrangementarray[i].questionID != '2' || bankarrangementarray[i].questionID != '6' || bankarrangementarray[i].questionID != '7' || bankarrangementarray[i].questionID == '2' || bankarrangementarray[i].questionID == '6' || bankarrangementarray[i].questionID == '7') {
  
  if(bankarrangementarray[i].questionID == '2'){
  this.newquestionid='100'
  }else if(bankarrangementarray[i].questionID == '6'){
  this.newquestionid='101'
  }else if(bankarrangementarray[i].questionID == '7'){
  this.newquestionid='102'
  }
  else{
  this.newquestionid=bankarrangementarray[i].questionID
  }
  
  
         var datasertest1 =
          {
              'FunctionID': bankarrangementarray[i].FunctionID,
              'questionID': this.newquestionid,
              'Answer': bankarrangementarray[i].Answer,
              'sectionID': bankarrangementarray[i].sectionID,
              'partyID': 0,
              'leadID': bankarrangementarray[i].leadID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          }
        
          this.apiservice.appformdetailinsert(datasertest1).then( (resp:any)=> {
              debugger
              // alert('inserted');
              console.log(resp.data);
          });
          let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '32', Status: 'A' };
          //let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
          debugger
          this.apiservice.saveMandValidation(getdataJSONtmp).then(function (resp) {
              debugger
              console.log(resp.data);
          })
      }
  }
  if (bankarrangementarray.length - 1 == res) {
    debugger
   //this.IsDisabled=false;
  // this.toast.presentToast('saved Successfully');
   this.AlertService.presentAlert("Alert","saved Successfully")
   return false;
  // alert("saved Successfully")
    // alert("saved succesfully");
  
  }
    }
  }
} else {
  if(this.bankingData.crdit_facility==''){
    alert('Select Any credit facility');
  } else 
  if(this.bankingData.crdit_facility=='Yes'){
    if(this.bankingData.exposure_other_bngname=='' || this.bankingData.exposure_other_bngTotal==''){
      if(this.bankingData.exposure_other_bngname==''){
        alert('Please Fill Exposure with other Bank Name');
      }else{
        alert('Please Fill Exposure with other Bank Total');
      }
    }
  else if(this.bankingData.status_account==''){
    alert('Select Status of the account');
  }else{
    let bankarrangementarray = [{
      "FunctionID": "1",
      "questionID": "1",
      "Answer": this.bankingData.bngarrmnt,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
      "userid": this.userID,
      "createdDate": this.date,
      "catagoryPK1": 0
    },
    {
      "FunctionID": "1",
          "questionID": "2",
          "Answer": this.bankingData.bankname,
          "sectionID": this.sectionID,
          "partyID": 0,
          "leadID": this.cusID,
          "branchid": this.BranchID,
    "userid": this.userID,
          "createdDate": this.date,
          "catagoryPK1": 0
    },
    {
      "FunctionID": "1",
      "questionID": "3",
      "Answer": this.bankingData.exposurecub,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
  "userid": this.userID,
      "createdDate": this.date,
      "catagoryPK1": 0
    },
    {
      "FunctionID": "1",
        "questionID": "4",
        "Answer": this.bankingData.totalexposurecub,
        "sectionID": this.sectionID,
        "partyID": 0,
        "leadID": this.cusID,
        "branchid": this.BranchID,
    "userid": this.userID,
        "createdDate": this.date,
        "catagoryPK1": 0
    },
    {
      "FunctionID": "1",
        "questionID": "5",
        "Answer": this.bankingData.crdit_facility,
        "sectionID": this.sectionID,
        "partyID": 0,
        "leadID": this.cusID,
        "branchid": this.BranchID,
    "userid": this.userID,
        "createdDate": this.date,
        "catagoryPK1": 0

    },
    {
      "FunctionID": "1",
      "questionID": "6",
      "Answer": this.bankingData.exposure_other_bngname,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
  "userid": this.userID,
      "createdDate": this.date,
      "catagoryPK1": 0 
    },
    {
      "FunctionID": "1",
      "questionID": "7",
      "Answer": this.bankingData.exposure_other_bngTotal,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
  "userid": this.userID,
      "createdDate":this.date,
      "catagoryPK1": 0
    },{
      "FunctionID": "1",
      "questionID": "8",
      "Answer": this.bankingData.status_account,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
  "userid": this.userID,
      "createdDate": this.date,
      "catagoryPK1": 0
    }

  ]
  for (let i = 0; i < bankarrangementarray.length; i++) {
    var res = i;
    // if (bankingarrangement != "Sole" ) {
    if (bankarrangementarray[i].questionID == '2' || bankarrangementarray[i].questionID == '6' || bankarrangementarray[i].questionID == '7') {
        var datasertest =
        {
            'Customerid': this.cusID,
            'FunctionID': bankarrangementarray[i].FunctionID,
            'questionid': bankarrangementarray[i].questionID,
            'comments': bankarrangementarray[i].Answer,
            'CreateDate': finaltodayDate,
            'updateddate': finaltodayDate,
            'createdby': this.userID,
            'updatedby': this.userID,
            'control_ID': 'T'
        }
        
        this.apiservice.saveComments(datasertest).then( (resp:any)=> {
            debugger
         
            // alert('inserted');
            console.log(resp.data);
        });
    }
    // }
     if (bankarrangementarray[i].questionID != '2' || bankarrangementarray[i].questionID != '6' || bankarrangementarray[i].questionID != '7' || bankarrangementarray[i].questionID == '2' || bankarrangementarray[i].questionID == '6' || bankarrangementarray[i].questionID == '7') {

if(bankarrangementarray[i].questionID == '2'){
this.newquestionid='100'
}else if(bankarrangementarray[i].questionID == '6'){
this.newquestionid='101'
}else if(bankarrangementarray[i].questionID == '7'){
this.newquestionid='102'
}
else{
this.newquestionid=bankarrangementarray[i].questionID
}


       var datasertest1 =
        {
            'FunctionID': bankarrangementarray[i].FunctionID,
            'questionID': this.newquestionid,
            'Answer': bankarrangementarray[i].Answer,
            'sectionID': bankarrangementarray[i].sectionID,
            'partyID': 0,
            'leadID': bankarrangementarray[i].leadID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        }
      
        this.apiservice.appformdetailinsert(datasertest1).then( (resp:any)=> {
            debugger
            // alert('inserted');
            console.log(resp.data);
        });
        let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '32', Status: 'A' };
        //let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
        debugger
        this.apiservice.saveMandValidation(getdataJSONtmp).then(function (resp) {
            debugger
            console.log(resp.data);
        })
    }
}
if (bankarrangementarray.length - 1 == res) {
  debugger
 //this.IsDisabled=false;
// this.toast.presentToast('saved Successfully');
 this.AlertService.presentAlert("Alert","saved Successfully")
 return false;
// alert("saved Successfully")
  // alert("saved succesfully");

}
  }
}else{
  if(this.bankingData.status_account==''){
    alert('Select Status of the account');
  }else{
    let bankarrangementarray = [{
      "FunctionID": "1",
      "questionID": "1",
      "Answer": this.bankingData.bngarrmnt,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
      "userid": this.userID,
      "createdDate": this.date,
      "catagoryPK1": 0
    },
    {
      "FunctionID": "1",
          "questionID": "2",
          "Answer": this.bankingData.bankname,
          "sectionID": this.sectionID,
          "partyID": 0,
          "leadID": this.cusID,
          "branchid": this.BranchID,
    "userid": this.userID,
          "createdDate": this.date,
          "catagoryPK1": 0
    },
    {
      "FunctionID": "1",
      "questionID": "3",
      "Answer": this.bankingData.exposurecub,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
  "userid": this.userID,
      "createdDate": this.date,
      "catagoryPK1": 0
    },
    {
      "FunctionID": "1",
        "questionID": "4",
        "Answer": this.bankingData.totalexposurecub,
        "sectionID": this.sectionID,
        "partyID": 0,
        "leadID": this.cusID,
        "branchid": this.BranchID,
    "userid": this.userID,
        "createdDate": this.date,
        "catagoryPK1": 0
    },
    {
      "FunctionID": "1",
        "questionID": "5",
        "Answer": this.bankingData.crdit_facility,
        "sectionID": this.sectionID,
        "partyID": 0,
        "leadID": this.cusID,
        "branchid": this.BranchID,
    "userid": this.userID,
        "createdDate": this.date,
        "catagoryPK1": 0

    },
    {
      "FunctionID": "1",
      "questionID": "6",
      "Answer": this.bankingData.exposure_other_bngname,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
  "userid": this.userID,
      "createdDate": this.date,
      "catagoryPK1": 0 
    },
    {
      "FunctionID": "1",
      "questionID": "7",
      "Answer": this.bankingData.exposure_other_bngTotal,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
  "userid": this.userID,
      "createdDate":this.date,
      "catagoryPK1": 0
    },{
      "FunctionID": "1",
      "questionID": "8",
      "Answer": this.bankingData.status_account,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
  "userid": this.userID,
      "createdDate": this.date,
      "catagoryPK1": 0
    }

  ]
  for (let i = 0; i < bankarrangementarray.length; i++) {
    var res = i;
    // if (bankingarrangement != "Sole" ) {
    if (bankarrangementarray[i].questionID == '2' || bankarrangementarray[i].questionID == '6' || bankarrangementarray[i].questionID == '7') {
        var datasertest =
        {
            'Customerid':this.cusID,
            'FunctionID': bankarrangementarray[i].FunctionID,
            'questionid': bankarrangementarray[i].questionID,
            'comments': bankarrangementarray[i].Answer,
            'CreateDate': finaltodayDate,
            'updateddate': finaltodayDate,
            'createdby': this.userID,
            'updatedby': this.userID,
            'control_ID': 'T'
        }
        
        this.apiservice.saveComments(datasertest).then( (resp:any)=> {
            debugger
         
            // alert('inserted');
            console.log(resp.data);
        });
    }
    // }
     if (bankarrangementarray[i].questionID != '2' || bankarrangementarray[i].questionID != '6' || bankarrangementarray[i].questionID != '7' || bankarrangementarray[i].questionID == '2' || bankarrangementarray[i].questionID == '6' || bankarrangementarray[i].questionID == '7') {

if(bankarrangementarray[i].questionID == '2'){
this.newquestionid='100'
}else if(bankarrangementarray[i].questionID == '6'){
this.newquestionid='101'
}else if(bankarrangementarray[i].questionID == '7'){
this.newquestionid='102'
}
else{
this.newquestionid=bankarrangementarray[i].questionID
}


       var datasertest1 =
        {
            'FunctionID': bankarrangementarray[i].FunctionID,
            'questionID': this.newquestionid,
            'Answer': bankarrangementarray[i].Answer,
            'sectionID': bankarrangementarray[i].sectionID,
            'partyID': 0,
            'leadID': bankarrangementarray[i].leadID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        }
      
        this.apiservice.appformdetailinsert(datasertest1).then( (resp:any)=> {
            debugger
            // alert('inserted');
            console.log(resp.data);
        });
        let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '32', Status: 'A' };
        //let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
        debugger
        this.apiservice.saveMandValidation(getdataJSONtmp).then(function (resp) {
            debugger
            console.log(resp.data);
        })
    }
}
if (bankarrangementarray.length - 1 == res) {
  debugger
 //this.IsDisabled=false;
 //this.toast.presentToast('saved Successfully');
 this.AlertService.presentAlert("Alert","saved Successfully")
 return false;
 //alert("saved Successfully")
  // alert("saved succesfully");

}
  }
}

}

   
   
   
  }



///Manufacturing Nature of Commodity
uvrNatureofcommoditySubmit(){
    debugger
  var finaltodayDate=new Date();
  if(this.manuF_abt_manu_natureofcommodity.natureofcommodity==''){
    this.AlertService.presentAlert("Alert","Please fill Nature of Commodity")
 return false;
    //alert('Please fill Nature of Commodity');
  }else{
    var commodityjson = 
        {
            'FunctionID': '1',
            'questionID': '75',
            'Answer': this.manuF_abt_manu_natureofcommodity.natureofcommodity,
            'sectionID': '40',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        }
        this.apiservice.appformdetailinsert(commodityjson).then((resp:any)=> {
            debugger
            // alert('inserted');
            console.log(resp.data);
        });
        let getdataJSONtmpp = { Customerid: this.cusID, Sctionid: '40', Status: 'A' };
       // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmpp);
        this.apiservice.saveMandValidation(getdataJSONtmpp).then((resp:any) =>{
            debugger
            console.log(resp.data);
        })
       // this.toast.presentToast('saved Successfully');
        this.AlertService.presentAlert("Alert","saved Successfully")
        return false;
       // alert("saved Successfully")
  }
}




///  Manufacturing ___ About machinary submit

uvrManuf_abut_machinarySubmit(){
    debugger
  var finaltodayDate=new Date();
if(this.manuF_abt_manu_machnary.loctn_unit==''){
  this.AlertService.presentAlert("Alert","Please fill Location Unit")
  return false;
} else if(this.manuF_abt_manu_machnary.distance_unit==''){
  this.AlertService.presentAlert("Alert","Please fill Distance of the unit from the branch")
  return false;
} else if(this.manuF_abt_manu_machnary.loctnl_advantge==''){
  this.AlertService.presentAlert("Alert","Please fill Locational Advantages")
  return false;
} else if(this.manuF_abt_manu_machnary.num_emp_unit==''){
  this.AlertService.presentAlert("Alert","Please fill No of Employees working in unit/Trading place")
  return false;
} else if(this.manuF_abt_manu_machnary.num_unit==''){
  this.AlertService.presentAlert("Alert","Please fill No of Units")
  return false;
} else if(this.manuF_abt_manu_machnary.unit_instald_capcity==''){
  this.AlertService.presentAlert("Alert","Please select Unit Functioning Status")
  return false;
} else if (this.manuF_abt_manu_machnary.installed_capacity==''){
  this.AlertService.presentAlert("Alert","Please Fill Installed Capacity")
  return false;
} else if (this.manuF_abt_manu_machnary.installed_capacity_list==''){
  this.AlertService.presentAlert("Alert","Please Fill Installed Capacity comments")
  return false;
} else if (this.manuF_abt_manu_machnary.oprating_capacity==''){
  this.AlertService.presentAlert("Alert","Please Fill operating Capacity ")
  return false;
} else if (this.manuF_abt_manu_machnary.oprating_capacity_list==''){
  this.AlertService.presentAlert("Alert","Please Fill operating Capacity comment ")
  return false;
} else if (this.manuF_abt_manu_machnary.value_stock==''){
  this.AlertService.presentAlert("Alert","Select Value of Stock ")
  return false;
} else if (this.manuF_abt_manu_machnary.value_stock=='Yes'){
 if(this.manuF_abt_manu_machnary.producttext==''){
  this.AlertService.presentAlert("Alert","Please Fill Value of Stock Comment ")
  return false;
 } else if(this.manuF_abt_manu_machnary.wther_basic_infra==''){
  this.AlertService.presentAlert("Alert","Please Fill basic infrstructure ")
  return false;
 } else if(this.manuF_abt_manu_machnary.machinery_finance==''){
  this.AlertService.presentAlert("Alert","Select Machinery finance ")
  return false;
 } else if(this.manuF_abt_manu_machnary.machinery_finance=='Yes'){
   if(this.manuF_abt_manu_machnary.machinery_teext_show==''){
    this.AlertService.presentAlert("Alert","Please fill Machinery finance comment ")
    return false;
   } else if(this.manuF_abt_manu_machnary.totl_machinary_installed==''){
    this.AlertService.presentAlert("Alert","Please fill Total value of Machineries ")
    return false;
   } else if(this.manuF_abt_manu_machnary.wher_EB_paid==''){
    this.AlertService.presentAlert("Alert","Select Whether EB bill paid regular ")
    return false;
   } else if(this.manuF_abt_manu_machnary.wher_EB_paid=='No'){
     if(this.manuF_abt_manu_machnary.EB_paid_regular_show==''){
      this.AlertService.presentAlert("Alert","Please fill Whether EB bill paid regular comment")
      return false;
     } else if (this.manuF_abt_manu_machnary.last_EB_paid_date==''){
      this.AlertService.presentAlert("Alert","Please fill Last EB bill paid date")
      return false;
     } else if(this.manuF_abt_manu_machnary.last_EB_paid==''){
      this.AlertService.presentAlert("Alert","Please fill Last EB bill paid amount")
      return false;
    }else{
      var questionarray = [
        {
            'FunctionID': '1',
            'questionID': '9',
            'Answer': this.manuF_abt_manu_machnary.loctn_unit,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '10',
            'Answer': this.manuF_abt_manu_machnary.distance_unit,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '11',
            'Answer': this.manuF_abt_manu_machnary.loctnl_advantge,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '12',
            'Answer': this.manuF_abt_manu_machnary.num_emp_unit,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '13',
            'Answer': this.manuF_abt_manu_machnary.num_unit,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '14',
            'Answer': this.manuF_abt_manu_machnary.unit_instald_capcity,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
// new filed added
{
'FunctionID': '1',
'questionID': '74',
'Answer': this.manuF_abt_manu_machnary.installed_capacity,
'sectionID': '33',
'partyID': 0,
'leadID': this.cusID,
'branchid': this.BranchID,
'userid': this.userID,
'createdDate': finaltodayDate,
'catagoryPK1': 0
},
{
'FunctionID': '1',
'questionID': '74',
'comments': this.manuF_abt_manu_machnary.installed_capacity_list,
'sectionID': '33',
'partyID': 0,
'leadID': this.cusID,
'branchid': this.BranchID,
'userid': this.userID,
'createdDate': finaltodayDate,
'catagoryPK1': 0
},
// end

        {
            'FunctionID': '1',
            'questionID': '15',
            'Answer': this.manuF_abt_manu_machnary.oprating_capacity,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.cusID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '15',
            'comments': this.manuF_abt_manu_machnary.oprating_capacity_list,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '16',
            'Answer': this.manuF_abt_manu_machnary.value_stock,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '16',
            'comments': this.manuF_abt_manu_machnary.producttext ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '17',
            'Answer': this.manuF_abt_manu_machnary. wther_basic_infra,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '18',
            'Answer': this.manuF_abt_manu_machnary.machinery_finance ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '18',
            'comments': this.manuF_abt_manu_machnary.machinery_teext_show ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '19',
            'Answer': this.manuF_abt_manu_machnary.totl_machinary_installed ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '20',
            'Answer': this.manuF_abt_manu_machnary.wher_EB_paid ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '20',
            'comments': this.manuF_abt_manu_machnary. EB_paid_regular_show ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '21',
            'Answer':this.manuF_abt_manu_machnary. last_EB_paid_date,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '22',
            'Answer': this.manuF_abt_manu_machnary. last_EB_paid,
            'sectionID': '33',
            'partyID': 0,
            'leadID':this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
    ];


    for (let i = 0; i <= questionarray.length; i++) {

        var res = i
        if (questionarray[i].questionID == '74' && questionarray[i].comments || questionarray[i].questionID == '15' && questionarray[i].comments || questionarray[i].questionID == '16' && questionarray[i].comments || questionarray[i].questionID == '18' && questionarray[i].comments || questionarray[i].questionID == '20' && questionarray[i].comments) {
           var datasertest =
            {
                'Customerid': this.cusID,
                'FunctionID': questionarray[i].FunctionID,
                'questionid': questionarray[i].questionID,
                'comments': questionarray[i].comments,
                'CreateDate': finaltodayDate,
                'updateddate': finaltodayDate,
                'createdby': this.userID,
                'updatedby': this.userID,
                'control_ID': 'D'
            }

            this.apiservice.saveComments(datasertest).then( (resp:any) =>{
                console.log(resp);
            }, function (error) {
                console.log(error);
            })
        }


if(questionarray[i].questionID == '74' && questionarray[i].comments || questionarray[i].questionID == '15' && questionarray[i].comments || questionarray[i].questionID == '16' && questionarray[i].comments || questionarray[i].questionID == '18' && questionarray[i].comments || questionarray[i].questionID == '20' && questionarray[i].comments){

if(questionarray[i].questionID == '15'){
this.newquestionid='103'
}else if(questionarray[i].questionID == '16'){
this.newquestionid='104'
}else if(questionarray[i].questionID == '18'){
this.newquestionid='105'
} else if(questionarray[i].questionID == '20'){
this.newquestionid='106'
} else if(questionarray[i].questionID == '74'){
this.newquestionid='113'
}else{
this.newquestionid=questionarray[i].questionID
}


var datasertest1 =
{
'FunctionID': questionarray[i].FunctionID,
'questionID': this.newquestionid,
'Answer': questionarray[i].comments,
'sectionID': questionarray[i].sectionID,
'partyID': 0,
'leadID': questionarray[i].leadID,
'branchid': this.BranchID,
'userid': this.userID,
'createdDate': finaltodayDate,
'catagoryPK1': 0
}

this.apiservice.appformdetailinsert(datasertest1).then( (resp:any)=> {
debugger
// alert('inserted');
console.log(resp);
}, function (resp) {
console.log(resp);

});
let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '33', Status: 'A' };
//let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
console.log(resp);
}, function (err) {
console.log(err);
})
} 


         if (questionarray[i].Answer) {
           var datasertest2 =
            {
                'FunctionID': questionarray[i].FunctionID,
                'questionID': questionarray[i].questionID,
                'Answer': questionarray[i].Answer,
                'sectionID': questionarray[i].sectionID,
                'partyID': 0,
                'leadID': questionarray[i].leadID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }

            this.apiservice.appformdetailinsert(datasertest2).then((resp:any)=> {
                debugger
                // alert('inserted');
                console.log(resp);
            }, function (resp) {
                console.log(resp);

            });
            let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '33', Status: 'A' };
           // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
            this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                console.log(resp);
            }, function (err) {
                console.log(err);
            })

            if (questionarray.length - 1 == res) {
              //this.toast.presentToast('saved Successfully');
              this.AlertService.presentAlert("Alert","saved Successfully")
              return false;

                // setTimeout(() => {
                //     this.IsDisabled=true;
                // }, 2000);

            }
        }





       
    }
    }
   } else{
    if (this.manuF_abt_manu_machnary.last_EB_paid_date==''){
      this.AlertService.presentAlert("Alert","Please fill Last EB bill paid date")
      return false;
     } else if(this.manuF_abt_manu_machnary.last_EB_paid==''){
      this.AlertService.presentAlert("Alert","Please fill Last EB bill paid amount")
      return false;
    }else{
      var questionarray = [
        {
            'FunctionID': '1',
            'questionID': '9',
            'Answer': this.manuF_abt_manu_machnary.loctn_unit,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '10',
            'Answer': this.manuF_abt_manu_machnary.distance_unit,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '11',
            'Answer': this.manuF_abt_manu_machnary.loctnl_advantge,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '12',
            'Answer': this.manuF_abt_manu_machnary.num_emp_unit,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '13',
            'Answer': this.manuF_abt_manu_machnary.num_unit,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '14',
            'Answer': this.manuF_abt_manu_machnary.unit_instald_capcity,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
// new filed added
{
'FunctionID': '1',
'questionID': '74',
'Answer': this.manuF_abt_manu_machnary.installed_capacity,
'sectionID': '33',
'partyID': 0,
'leadID': this.cusID,
'branchid': this.BranchID,
'userid': this.userID,
'createdDate': finaltodayDate,
'catagoryPK1': 0
},
{
'FunctionID': '1',
'questionID': '74',
'comments': this.manuF_abt_manu_machnary.installed_capacity_list,
'sectionID': '33',
'partyID': 0,
'leadID': this.cusID,
'branchid': this.BranchID,
'userid': this.userID,
'createdDate': finaltodayDate,
'catagoryPK1': 0
},
// end

        {
            'FunctionID': '1',
            'questionID': '15',
            'Answer': this.manuF_abt_manu_machnary.oprating_capacity,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.cusID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '15',
            'comments': this.manuF_abt_manu_machnary.oprating_capacity_list,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '16',
            'Answer': this.manuF_abt_manu_machnary.value_stock,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '16',
            'comments': this.manuF_abt_manu_machnary.producttext ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '17',
            'Answer': this.manuF_abt_manu_machnary. wther_basic_infra,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '18',
            'Answer': this.manuF_abt_manu_machnary.machinery_finance ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '18',
            'comments': this.manuF_abt_manu_machnary.machinery_teext_show ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '19',
            'Answer': this.manuF_abt_manu_machnary.totl_machinary_installed ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '20',
            'Answer': this.manuF_abt_manu_machnary.wher_EB_paid ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '20',
            'comments': this.manuF_abt_manu_machnary. EB_paid_regular_show ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '21',
            'Answer':this.manuF_abt_manu_machnary. last_EB_paid_date,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '22',
            'Answer': this.manuF_abt_manu_machnary. last_EB_paid,
            'sectionID': '33',
            'partyID': 0,
            'leadID':this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
    ];


    for (let i = 0; i <= questionarray.length; i++) {

        var res = i
        if (questionarray[i].questionID == '74' && questionarray[i].comments || questionarray[i].questionID == '15' && questionarray[i].comments || questionarray[i].questionID == '16' && questionarray[i].comments || questionarray[i].questionID == '18' && questionarray[i].comments || questionarray[i].questionID == '20' && questionarray[i].comments) {
           var datasertest =
            {
                'Customerid': this.cusID,
                'FunctionID': questionarray[i].FunctionID,
                'questionid': questionarray[i].questionID,
                'comments': questionarray[i].comments,
                'CreateDate': finaltodayDate,
                'updateddate': finaltodayDate,
                'createdby': this.userID,
                'updatedby': this.userID,
                'control_ID': 'D'
            }

            this.apiservice.saveComments(datasertest).then( (resp:any) =>{
                console.log(resp);
            }, function (error) {
                console.log(error);
            })
        }


if(questionarray[i].questionID == '74' && questionarray[i].comments || questionarray[i].questionID == '15' && questionarray[i].comments || questionarray[i].questionID == '16' && questionarray[i].comments || questionarray[i].questionID == '18' && questionarray[i].comments || questionarray[i].questionID == '20' && questionarray[i].comments){

if(questionarray[i].questionID == '15'){
this.newquestionid='103'
}else if(questionarray[i].questionID == '16'){
this.newquestionid='104'
}else if(questionarray[i].questionID == '18'){
this.newquestionid='105'
} else if(questionarray[i].questionID == '20'){
this.newquestionid='106'
} else if(questionarray[i].questionID == '74'){
this.newquestionid='113'
}else{
this.newquestionid=questionarray[i].questionID
}


var datasertest1 =
{
'FunctionID': questionarray[i].FunctionID,
'questionID': this.newquestionid,
'Answer': questionarray[i].comments,
'sectionID': questionarray[i].sectionID,
'partyID': 0,
'leadID': questionarray[i].leadID,
'branchid': this.BranchID,
'userid': this.userID,
'createdDate': finaltodayDate,
'catagoryPK1': 0
}

this.apiservice.appformdetailinsert(datasertest1).then( (resp:any)=> {
debugger
// alert('inserted');
console.log(resp);
}, function (resp) {
console.log(resp);

});
let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '33', Status: 'A' };
//let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
console.log(resp);
}, function (err) {
console.log(err);
})
} 


         if (questionarray[i].Answer) {
           var datasertest2 =
            {
                'FunctionID': questionarray[i].FunctionID,
                'questionID': questionarray[i].questionID,
                'Answer': questionarray[i].Answer,
                'sectionID': questionarray[i].sectionID,
                'partyID': 0,
                'leadID': questionarray[i].leadID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }

            this.apiservice.appformdetailinsert(datasertest2).then((resp:any)=> {
                debugger
                // alert('inserted');
                console.log(resp);
            }, function (resp) {
                console.log(resp);

            });
            let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '33', Status: 'A' };
           // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
            this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                console.log(resp);
            }, function (err) {
                console.log(err);
            })

            if (questionarray.length - 1 == res) {
             // this.toast.presentToast('saved Successfully');
              this.AlertService.presentAlert("Alert","saved Successfully")
              return false;

                // setTimeout(() => {
                //     this.IsDisabled=true;
                // }, 2000);

            }
        }





       
    }
    }
   }
 } else{
  if(this.manuF_abt_manu_machnary.totl_machinary_installed==''){
    this.AlertService.presentAlert("Alert","Please fill Total value of Machineries ")
    return false;
   } else if(this.manuF_abt_manu_machnary.wher_EB_paid==''){
    this.AlertService.presentAlert("Alert","Select Whether EB bill paid regular ")
    return false;
   } else if(this.manuF_abt_manu_machnary.wher_EB_paid=='No'){
     if(this.manuF_abt_manu_machnary.EB_paid_regular_show==''){
      this.AlertService.presentAlert("Alert","Please fill Whether EB bill paid regular comment")
      return false;
     } else if (this.manuF_abt_manu_machnary.last_EB_paid_date==''){
      this.AlertService.presentAlert("Alert","Please fill Last EB bill paid date")
      return false;
     } else if(this.manuF_abt_manu_machnary.last_EB_paid==''){
      this.AlertService.presentAlert("Alert","Please fill Last EB bill paid amount")
      return false;
    } else{
      var questionarray = [
        {
            'FunctionID': '1',
            'questionID': '9',
            'Answer': this.manuF_abt_manu_machnary.loctn_unit,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '10',
            'Answer': this.manuF_abt_manu_machnary.distance_unit,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '11',
            'Answer': this.manuF_abt_manu_machnary.loctnl_advantge,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '12',
            'Answer': this.manuF_abt_manu_machnary.num_emp_unit,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '13',
            'Answer': this.manuF_abt_manu_machnary.num_unit,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '14',
            'Answer': this.manuF_abt_manu_machnary.unit_instald_capcity,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
// new filed added
{
'FunctionID': '1',
'questionID': '74',
'Answer': this.manuF_abt_manu_machnary.installed_capacity,
'sectionID': '33',
'partyID': 0,
'leadID': this.cusID,
'branchid': this.BranchID,
'userid': this.userID,
'createdDate': finaltodayDate,
'catagoryPK1': 0
},
{
'FunctionID': '1',
'questionID': '74',
'comments': this.manuF_abt_manu_machnary.installed_capacity_list,
'sectionID': '33',
'partyID': 0,
'leadID': this.cusID,
'branchid': this.BranchID,
'userid': this.userID,
'createdDate': finaltodayDate,
'catagoryPK1': 0
},
// end

        {
            'FunctionID': '1',
            'questionID': '15',
            'Answer': this.manuF_abt_manu_machnary.oprating_capacity,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.cusID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '15',
            'comments': this.manuF_abt_manu_machnary.oprating_capacity_list,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '16',
            'Answer': this.manuF_abt_manu_machnary.value_stock,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '16',
            'comments': this.manuF_abt_manu_machnary.producttext ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '17',
            'Answer': this.manuF_abt_manu_machnary. wther_basic_infra,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '18',
            'Answer': this.manuF_abt_manu_machnary.machinery_finance ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '18',
            'comments': this.manuF_abt_manu_machnary.machinery_teext_show ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '19',
            'Answer': this.manuF_abt_manu_machnary.totl_machinary_installed ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '20',
            'Answer': this.manuF_abt_manu_machnary.wher_EB_paid ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '20',
            'comments': this.manuF_abt_manu_machnary. EB_paid_regular_show ,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '21',
            'Answer':this.manuF_abt_manu_machnary. last_EB_paid_date,
            'sectionID': '33',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '22',
            'Answer': this.manuF_abt_manu_machnary. last_EB_paid,
            'sectionID': '33',
            'partyID': 0,
            'leadID':this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
    ];


    for (let i = 0; i <= questionarray.length; i++) {

        var res = i
        if (questionarray[i].questionID == '74' && questionarray[i].comments || questionarray[i].questionID == '15' && questionarray[i].comments || questionarray[i].questionID == '16' && questionarray[i].comments || questionarray[i].questionID == '18' && questionarray[i].comments || questionarray[i].questionID == '20' && questionarray[i].comments) {
           var datasertest =
            {
                'Customerid': this.cusID,
                'FunctionID': questionarray[i].FunctionID,
                'questionid': questionarray[i].questionID,
                'comments': questionarray[i].comments,
                'CreateDate': finaltodayDate,
                'updateddate': finaltodayDate,
                'createdby': this.userID,
                'updatedby': this.userID,
                'control_ID': 'D'
            }

            this.apiservice.saveComments(datasertest).then( (resp:any) =>{
                console.log(resp);
            }, function (error) {
                console.log(error);
            })
        }


if(questionarray[i].questionID == '74' && questionarray[i].comments || questionarray[i].questionID == '15' && questionarray[i].comments || questionarray[i].questionID == '16' && questionarray[i].comments || questionarray[i].questionID == '18' && questionarray[i].comments || questionarray[i].questionID == '20' && questionarray[i].comments){

if(questionarray[i].questionID == '15'){
this.newquestionid='103'
}else if(questionarray[i].questionID == '16'){
this.newquestionid='104'
}else if(questionarray[i].questionID == '18'){
this.newquestionid='105'
} else if(questionarray[i].questionID == '20'){
this.newquestionid='106'
} else if(questionarray[i].questionID == '74'){
this.newquestionid='113'
}else{
this.newquestionid=questionarray[i].questionID
}


var datasertest1 =
{
'FunctionID': questionarray[i].FunctionID,
'questionID': this.newquestionid,
'Answer': questionarray[i].comments,
'sectionID': questionarray[i].sectionID,
'partyID': 0,
'leadID': questionarray[i].leadID,
'branchid': this.BranchID,
'userid': this.userID,
'createdDate': finaltodayDate,
'catagoryPK1': 0
}

this.apiservice.appformdetailinsert(datasertest1).then( (resp:any)=> {
debugger
// alert('inserted');
console.log(resp);
}, function (resp) {
console.log(resp);

});
let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '33', Status: 'A' };
//let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
console.log(resp);
}, function (err) {
console.log(err);
})
} 


         if (questionarray[i].Answer) {
           var datasertest2 =
            {
                'FunctionID': questionarray[i].FunctionID,
                'questionID': questionarray[i].questionID,
                'Answer': questionarray[i].Answer,
                'sectionID': questionarray[i].sectionID,
                'partyID': 0,
                'leadID': questionarray[i].leadID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }

            this.apiservice.appformdetailinsert(datasertest2).then((resp:any)=> {
                debugger
                // alert('inserted');
                console.log(resp);
            }, function (resp) {
                console.log(resp);

            });
            let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '33', Status: 'A' };
           // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
            this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                console.log(resp);
            }, function (err) {
                console.log(err);
            })

            if (questionarray.length - 1 == res) {
             // this.toast.presentToast('saved Successfully');
              this.AlertService.presentAlert("Alert","saved Successfully")
              return false;

                // setTimeout(() => {
                //     this.IsDisabled=true;
                // }, 2000);

            }
        }





       
    }
    }
 } else{
  if (this.manuF_abt_manu_machnary.last_EB_paid_date==''){
    this.AlertService.presentAlert("Alert","Please fill Last EB bill paid date")
    return false;
   } else if(this.manuF_abt_manu_machnary.last_EB_paid==''){
    this.AlertService.presentAlert("Alert","Please fill Last EB bill paid amount")
    return false;
  }else{
    var questionarray = [
      {
          'FunctionID': '1',
          'questionID': '9',
          'Answer': this.manuF_abt_manu_machnary.loctn_unit,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '10',
          'Answer': this.manuF_abt_manu_machnary.distance_unit,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '11',
          'Answer': this.manuF_abt_manu_machnary.loctnl_advantge,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '12',
          'Answer': this.manuF_abt_manu_machnary.num_emp_unit,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '13',
          'Answer': this.manuF_abt_manu_machnary.num_unit,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '14',
          'Answer': this.manuF_abt_manu_machnary.unit_instald_capcity,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
// new filed added
{
'FunctionID': '1',
'questionID': '74',
'Answer': this.manuF_abt_manu_machnary.installed_capacity,
'sectionID': '33',
'partyID': 0,
'leadID': this.cusID,
'branchid': this.BranchID,
'userid': this.userID,
'createdDate': finaltodayDate,
'catagoryPK1': 0
},
{
'FunctionID': '1',
'questionID': '74',
'comments': this.manuF_abt_manu_machnary.installed_capacity_list,
'sectionID': '33',
'partyID': 0,
'leadID': this.cusID,
'branchid': this.BranchID,
'userid': this.userID,
'createdDate': finaltodayDate,
'catagoryPK1': 0
},
// end

      {
          'FunctionID': '1',
          'questionID': '15',
          'Answer': this.manuF_abt_manu_machnary.oprating_capacity,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.cusID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '15',
          'comments': this.manuF_abt_manu_machnary.oprating_capacity_list,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '16',
          'Answer': this.manuF_abt_manu_machnary.value_stock,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '16',
          'comments': this.manuF_abt_manu_machnary.  producttext ,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '17',
          'Answer': this.manuF_abt_manu_machnary. wther_basic_infra,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '18',
          'Answer': this.manuF_abt_manu_machnary.machinery_finance ,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '18',
          'comments': this.manuF_abt_manu_machnary.machinery_teext_show ,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '19',
          'Answer': this.manuF_abt_manu_machnary.totl_machinary_installed ,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '20',
          'Answer': this.manuF_abt_manu_machnary.wher_EB_paid ,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '20',
          'comments': this.manuF_abt_manu_machnary. EB_paid_regular_show ,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '21',
          'Answer':this.manuF_abt_manu_machnary. last_EB_paid_date,
          'sectionID': '33',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '22',
          'Answer': this.manuF_abt_manu_machnary. last_EB_paid,
          'sectionID': '33',
          'partyID': 0,
          'leadID':this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
  ];


  for (let i = 0; i <= questionarray.length; i++) {

      var res = i
      if (questionarray[i].questionID == '74' && questionarray[i].comments || questionarray[i].questionID == '15' && questionarray[i].comments || questionarray[i].questionID == '16' && questionarray[i].comments || questionarray[i].questionID == '18' && questionarray[i].comments || questionarray[i].questionID == '20' && questionarray[i].comments) {
         var datasertest =
          {
              'Customerid': this.cusID,
              'FunctionID': questionarray[i].FunctionID,
              'questionid': questionarray[i].questionID,
              'comments': questionarray[i].comments,
              'CreateDate': finaltodayDate,
              'updateddate': finaltodayDate,
              'createdby': this.userID,
              'updatedby': this.userID,
              'control_ID': 'D'
          }

          this.apiservice.saveComments(datasertest).then( (resp:any) =>{
              console.log(resp);
          }, function (error) {
              console.log(error);
          })
      }


if(questionarray[i].questionID == '74' && questionarray[i].comments || questionarray[i].questionID == '15' && questionarray[i].comments || questionarray[i].questionID == '16' && questionarray[i].comments || questionarray[i].questionID == '18' && questionarray[i].comments || questionarray[i].questionID == '20' && questionarray[i].comments){

if(questionarray[i].questionID == '15'){
this.newquestionid='103'
}else if(questionarray[i].questionID == '16'){
this.newquestionid='104'
}else if(questionarray[i].questionID == '18'){
this.newquestionid='105'
} else if(questionarray[i].questionID == '20'){
this.newquestionid='106'
} else if(questionarray[i].questionID == '74'){
this.newquestionid='113'
}else{
this.newquestionid=questionarray[i].questionID
}


var datasertest1 =
{
'FunctionID': questionarray[i].FunctionID,
'questionID': this.newquestionid,
'Answer': questionarray[i].comments,
'sectionID': questionarray[i].sectionID,
'partyID': 0,
'leadID': questionarray[i].leadID,
'branchid': this.BranchID,
'userid': this.userID,
'createdDate': finaltodayDate,
'catagoryPK1': 0
}

this.apiservice.appformdetailinsert(datasertest1).then( (resp:any)=> {
debugger
// alert('inserted');
console.log(resp);
}, function (resp) {
console.log(resp);

});
let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '33', Status: 'A' };
//let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
console.log(resp);
}, function (err) {
console.log(err);
})
} 


       if (questionarray[i].Answer) {
         var datasertest2 =
          {
              'FunctionID': questionarray[i].FunctionID,
              'questionID': questionarray[i].questionID,
              'Answer': questionarray[i].Answer,
              'sectionID': questionarray[i].sectionID,
              'partyID': 0,
              'leadID': questionarray[i].leadID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          }

          this.apiservice.appformdetailinsert(datasertest2).then((resp:any)=> {
              debugger
              // alert('inserted');
              console.log(resp);
          }, function (resp) {
              console.log(resp);

          });
          let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '33', Status: 'A' };
         // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
          this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
              console.log(resp);
          }, function (err) {
              console.log(err);
          })

          if (questionarray.length - 1 == res) {
           // this.toast.presentToast('saved Successfully');
            this.AlertService.presentAlert("Alert","saved Successfully")
            return false;

              // setTimeout(() => {
              //     this.IsDisabled=true;
              // }, 2000);

          }
      }





     
  }
  }
 }
}
} else{
  if(this.manuF_abt_manu_machnary.wther_basic_infra==''){
    this.AlertService.presentAlert("Alert","Please Fill basic infrstructure ")
    return false;
   } else if(this.manuF_abt_manu_machnary.machinery_finance==''){
    this.AlertService.presentAlert("Alert","Select Machinery finance ")
    return false;
   } else if(this.manuF_abt_manu_machnary.machinery_finance=='Yes'){
     if(this.manuF_abt_manu_machnary.machinery_teext_show==''){
      this.AlertService.presentAlert("Alert","Please fill Machinery finance comment ")
      return false;
     } else if(this.manuF_abt_manu_machnary.totl_machinary_installed==''){
      this.AlertService.presentAlert("Alert","Please fill Total value of Machineries ")
      return false;
     } else if(this.manuF_abt_manu_machnary.wher_EB_paid==''){
      this.AlertService.presentAlert("Alert","Select Whether EB bill paid regular ")
      return false;
     } else if(this.manuF_abt_manu_machnary.wher_EB_paid=='No'){
       if(this.manuF_abt_manu_machnary.EB_paid_regular_show==''){
        this.AlertService.presentAlert("Alert","Please fill Whether EB bill paid regular comment")
        return false;
       } else if (this.manuF_abt_manu_machnary.last_EB_paid_date==''){
        this.AlertService.presentAlert("Alert","Please fill Last EB bill paid date")
        return false;
       } else if(this.manuF_abt_manu_machnary.last_EB_paid==''){
        this.AlertService.presentAlert("Alert","Please fill Last EB bill paid amount")
        return false;
      } else{
        var questionarray = [
          {
              'FunctionID': '1',
              'questionID': '9',
              'Answer': this.manuF_abt_manu_machnary.loctn_unit,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '10',
              'Answer': this.manuF_abt_manu_machnary.distance_unit,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '11',
              'Answer': this.manuF_abt_manu_machnary.loctnl_advantge,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '12',
              'Answer': this.manuF_abt_manu_machnary.num_emp_unit,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '13',
              'Answer': this.manuF_abt_manu_machnary.num_unit,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '14',
              'Answer': this.manuF_abt_manu_machnary.unit_instald_capcity,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
  // new filed added
  {
  'FunctionID': '1',
  'questionID': '74',
  'Answer': this.manuF_abt_manu_machnary.installed_capacity,
  'sectionID': '33',
  'partyID': 0,
  'leadID': this.cusID,
  'branchid': this.BranchID,
  'userid': this.userID,
  'createdDate': finaltodayDate,
  'catagoryPK1': 0
  },
  {
  'FunctionID': '1',
  'questionID': '74',
  'comments': this.manuF_abt_manu_machnary.installed_capacity_list,
  'sectionID': '33',
  'partyID': 0,
  'leadID': this.cusID,
  'branchid': this.BranchID,
  'userid': this.userID,
  'createdDate': finaltodayDate,
  'catagoryPK1': 0
  },
  // end
  
          {
              'FunctionID': '1',
              'questionID': '15',
              'Answer': this.manuF_abt_manu_machnary.oprating_capacity,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.cusID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '15',
              'comments': this.manuF_abt_manu_machnary.oprating_capacity_list,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '16',
              'Answer': this.manuF_abt_manu_machnary.value_stock,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '16',
              'comments': this.manuF_abt_manu_machnary.  producttext ,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '17',
              'Answer': this.manuF_abt_manu_machnary. wther_basic_infra,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '18',
              'Answer': this.manuF_abt_manu_machnary.machinery_finance ,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '18',
              'comments': this.manuF_abt_manu_machnary.machinery_teext_show ,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '19',
              'Answer': this.manuF_abt_manu_machnary.totl_machinary_installed ,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '20',
              'Answer': this.manuF_abt_manu_machnary.wher_EB_paid ,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '20',
              'comments': this.manuF_abt_manu_machnary. EB_paid_regular_show ,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '21',
              'Answer':this.manuF_abt_manu_machnary. last_EB_paid_date,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '22',
              'Answer': this.manuF_abt_manu_machnary. last_EB_paid,
              'sectionID': '33',
              'partyID': 0,
              'leadID':this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
      ];
  
  
      for (let i = 0; i <= questionarray.length; i++) {
  
          var res = i
          if (questionarray[i].questionID == '74' && questionarray[i].comments || questionarray[i].questionID == '15' && questionarray[i].comments || questionarray[i].questionID == '16' && questionarray[i].comments || questionarray[i].questionID == '18' && questionarray[i].comments || questionarray[i].questionID == '20' && questionarray[i].comments) {
             var datasertest =
              {
                  'Customerid': this.cusID,
                  'FunctionID': questionarray[i].FunctionID,
                  'questionid': questionarray[i].questionID,
                  'comments': questionarray[i].comments,
                  'CreateDate': finaltodayDate,
                  'updateddate': finaltodayDate,
                  'createdby': this.userID,
                  'updatedby': this.userID,
                  'control_ID': 'D'
              }
  
              this.apiservice.saveComments(datasertest).then( (resp:any) =>{
                  console.log(resp);
              }, function (error) {
                  console.log(error);
              })
          }
  
  
  if(questionarray[i].questionID == '74' && questionarray[i].comments || questionarray[i].questionID == '15' && questionarray[i].comments || questionarray[i].questionID == '16' && questionarray[i].comments || questionarray[i].questionID == '18' && questionarray[i].comments || questionarray[i].questionID == '20' && questionarray[i].comments){
  
  if(questionarray[i].questionID == '15'){
  this.newquestionid='103'
  }else if(questionarray[i].questionID == '16'){
  this.newquestionid='104'
  }else if(questionarray[i].questionID == '18'){
  this.newquestionid='105'
  } else if(questionarray[i].questionID == '20'){
  this.newquestionid='106'
  } else if(questionarray[i].questionID == '74'){
  this.newquestionid='113'
  }else{
  this.newquestionid=questionarray[i].questionID
  }
  
  
  var datasertest1 =
  {
  'FunctionID': questionarray[i].FunctionID,
  'questionID': this.newquestionid,
  'Answer': questionarray[i].comments,
  'sectionID': questionarray[i].sectionID,
  'partyID': 0,
  'leadID': questionarray[i].leadID,
  'branchid': this.BranchID,
  'userid': this.userID,
  'createdDate': finaltodayDate,
  'catagoryPK1': 0
  }
  
  this.apiservice.appformdetailinsert(datasertest1).then( (resp:any)=> {
  debugger
  // alert('inserted');
  console.log(resp);
  }, function (resp) {
  console.log(resp);
  
  });
  let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '33', Status: 'A' };
  //let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
  this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
  console.log(resp);
  }, function (err) {
  console.log(err);
  })
  } 
  
  
           if (questionarray[i].Answer) {
             var datasertest2 =
              {
                  'FunctionID': questionarray[i].FunctionID,
                  'questionID': questionarray[i].questionID,
                  'Answer': questionarray[i].Answer,
                  'sectionID': questionarray[i].sectionID,
                  'partyID': 0,
                  'leadID': questionarray[i].leadID,
                  'branchid': this.BranchID,
                  'userid': this.userID,
                  'createdDate': finaltodayDate,
                  'catagoryPK1': 0
              }
  
              this.apiservice.appformdetailinsert(datasertest2).then((resp:any)=> {
                  debugger
                  // alert('inserted');
                  console.log(resp);
              }, function (resp) {
                  console.log(resp);
  
              });
              let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '33', Status: 'A' };
             // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
              this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                  console.log(resp);
              }, function (err) {
                  console.log(err);
              })
  
              if (questionarray.length - 1 == res) {
               // this.toast.presentToast('saved Successfully');
                this.AlertService.presentAlert("Alert","saved Successfully")
                return false;
  
                  // setTimeout(() => {
                  //     this.IsDisabled=true;
                  // }, 2000);
  
              }
          }
  
  
  
  
  
         
      }
      }
}

   } else{
    if(this.manuF_abt_manu_machnary.totl_machinary_installed==''){
      this.AlertService.presentAlert("Alert","Please fill Total value of Machineries ")
      return false;
     } else if(this.manuF_abt_manu_machnary.wher_EB_paid==''){
      this.AlertService.presentAlert("Alert","Select Whether EB bill paid regular ")
      return false;
     } else if(this.manuF_abt_manu_machnary.wher_EB_paid=='No'){
       if(this.manuF_abt_manu_machnary.EB_paid_regular_show==''){
        this.AlertService.presentAlert("Alert","Please fill Whether EB bill paid regular comment")
        return false;
       } else if (this.manuF_abt_manu_machnary.last_EB_paid_date==''){
        this.AlertService.presentAlert("Alert","Please fill Last EB bill paid date")
        return false;
       } else if(this.manuF_abt_manu_machnary.last_EB_paid==''){
        this.AlertService.presentAlert("Alert","Please fill Last EB bill paid amount")
        return false;
      } else{
        var questionarray = [
          {
              'FunctionID': '1',
              'questionID': '9',
              'Answer': this.manuF_abt_manu_machnary.loctn_unit,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '10',
              'Answer': this.manuF_abt_manu_machnary.distance_unit,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '11',
              'Answer': this.manuF_abt_manu_machnary.loctnl_advantge,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '12',
              'Answer': this.manuF_abt_manu_machnary.num_emp_unit,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '13',
              'Answer': this.manuF_abt_manu_machnary.num_unit,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '14',
              'Answer': this.manuF_abt_manu_machnary.unit_instald_capcity,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
  // new filed added
  {
  'FunctionID': '1',
  'questionID': '74',
  'Answer': this.manuF_abt_manu_machnary.installed_capacity,
  'sectionID': '33',
  'partyID': 0,
  'leadID': this.cusID,
  'branchid': this.BranchID,
  'userid': this.userID,
  'createdDate': finaltodayDate,
  'catagoryPK1': 0
  },
  {
  'FunctionID': '1',
  'questionID': '74',
  'comments': this.manuF_abt_manu_machnary.installed_capacity_list,
  'sectionID': '33',
  'partyID': 0,
  'leadID': this.cusID,
  'branchid': this.BranchID,
  'userid': this.userID,
  'createdDate': finaltodayDate,
  'catagoryPK1': 0
  },
  // end
  
          {
              'FunctionID': '1',
              'questionID': '15',
              'Answer': this.manuF_abt_manu_machnary.oprating_capacity,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.cusID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '15',
              'comments': this.manuF_abt_manu_machnary.oprating_capacity_list,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '16',
              'Answer': this.manuF_abt_manu_machnary.value_stock,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '16',
              'comments': this.manuF_abt_manu_machnary.  producttext ,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '17',
              'Answer': this.manuF_abt_manu_machnary. wther_basic_infra,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '18',
              'Answer': this.manuF_abt_manu_machnary.machinery_finance ,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '18',
              'comments': this.manuF_abt_manu_machnary.machinery_teext_show ,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '19',
              'Answer': this.manuF_abt_manu_machnary.totl_machinary_installed ,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '20',
              'Answer': this.manuF_abt_manu_machnary.wher_EB_paid ,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '20',
              'comments': this.manuF_abt_manu_machnary. EB_paid_regular_show ,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '21',
              'Answer':this.manuF_abt_manu_machnary. last_EB_paid_date,
              'sectionID': '33',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '22',
              'Answer': this.manuF_abt_manu_machnary. last_EB_paid,
              'sectionID': '33',
              'partyID': 0,
              'leadID':this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
      ];
  
  
      for (let i = 0; i <= questionarray.length; i++) {
  
          var res = i
          if (questionarray[i].questionID == '74' && questionarray[i].comments || questionarray[i].questionID == '15' && questionarray[i].comments || questionarray[i].questionID == '16' && questionarray[i].comments || questionarray[i].questionID == '18' && questionarray[i].comments || questionarray[i].questionID == '20' && questionarray[i].comments) {
             var datasertest =
              {
                  'Customerid': this.cusID,
                  'FunctionID': questionarray[i].FunctionID,
                  'questionid': questionarray[i].questionID,
                  'comments': questionarray[i].comments,
                  'CreateDate': finaltodayDate,
                  'updateddate': finaltodayDate,
                  'createdby': this.userID,
                  'updatedby': this.userID,
                  'control_ID': 'D'
              }
  
              this.apiservice.saveComments(datasertest).then( (resp:any) =>{
                  console.log(resp);
              }, function (error) {
                  console.log(error);
              })
          }
  
  
  if(questionarray[i].questionID == '74' && questionarray[i].comments || questionarray[i].questionID == '15' && questionarray[i].comments || questionarray[i].questionID == '16' && questionarray[i].comments || questionarray[i].questionID == '18' && questionarray[i].comments || questionarray[i].questionID == '20' && questionarray[i].comments){
  
  if(questionarray[i].questionID == '15'){
  this.newquestionid='103'
  }else if(questionarray[i].questionID == '16'){
  this.newquestionid='104'
  }else if(questionarray[i].questionID == '18'){
  this.newquestionid='105'
  } else if(questionarray[i].questionID == '20'){
  this.newquestionid='106'
  } else if(questionarray[i].questionID == '74'){
  this.newquestionid='113'
  }else{
  this.newquestionid=questionarray[i].questionID
  }
  
  
  var datasertest1 =
  {
  'FunctionID': questionarray[i].FunctionID,
  'questionID': this.newquestionid,
  'Answer': questionarray[i].comments,
  'sectionID': questionarray[i].sectionID,
  'partyID': 0,
  'leadID': questionarray[i].leadID,
  'branchid': this.BranchID,
  'userid': this.userID,
  'createdDate': finaltodayDate,
  'catagoryPK1': 0
  }
  
  this.apiservice.appformdetailinsert(datasertest1).then( (resp:any)=> {
  debugger
  // alert('inserted');
  console.log(resp);
  }, function (resp) {
  console.log(resp);
  
  });
  let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '33', Status: 'A' };
  //let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
  this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
  console.log(resp);
  }, function (err) {
  console.log(err);
  })
  } 
  
  
           if (questionarray[i].Answer) {
             var datasertest2 =
              {
                  'FunctionID': questionarray[i].FunctionID,
                  'questionID': questionarray[i].questionID,
                  'Answer': questionarray[i].Answer,
                  'sectionID': questionarray[i].sectionID,
                  'partyID': 0,
                  'leadID': questionarray[i].leadID,
                  'branchid': this.BranchID,
                  'userid': this.userID,
                  'createdDate': finaltodayDate,
                  'catagoryPK1': 0
              }
  
              this.apiservice.appformdetailinsert(datasertest2).then((resp:any)=> {
                  debugger
                  // alert('inserted');
                  console.log(resp);
              }, function (resp) {
                  console.log(resp);
  
              });
              let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '33', Status: 'A' };
             // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
              this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                  console.log(resp);
              }, function (err) {
                  console.log(err);
              })
  
              if (questionarray.length - 1 == res) {
               // this.toast.presentToast('saved Successfully');
                this.AlertService.presentAlert("Alert","saved Successfully")
                return false;
  
                  // setTimeout(() => {
                  //     this.IsDisabled=true;
                  // }, 2000);
  
              }
          }
  
  
  
  
        }
         
      }
      }else{
        if (this.manuF_abt_manu_machnary.last_EB_paid_date==''){
          this.AlertService.presentAlert("Alert","Please fill Last EB bill paid date")
          return false;
         } else if(this.manuF_abt_manu_machnary.last_EB_paid==''){
          this.AlertService.presentAlert("Alert","Please fill Last EB bill paid amount")
          return false;
        } else{
          var questionarray = [
            {
                'FunctionID': '1',
                'questionID': '9',
                'Answer': this.manuF_abt_manu_machnary.loctn_unit,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '10',
                'Answer': this.manuF_abt_manu_machnary.distance_unit,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '11',
                'Answer': this.manuF_abt_manu_machnary.loctnl_advantge,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '12',
                'Answer': this.manuF_abt_manu_machnary.num_emp_unit,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '13',
                'Answer': this.manuF_abt_manu_machnary.num_unit,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '14',
                'Answer': this.manuF_abt_manu_machnary.unit_instald_capcity,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
    // new filed added
    {
    'FunctionID': '1',
    'questionID': '74',
    'Answer': this.manuF_abt_manu_machnary.installed_capacity,
    'sectionID': '33',
    'partyID': 0,
    'leadID': this.cusID,
    'branchid': this.BranchID,
    'userid': this.userID,
    'createdDate': finaltodayDate,
    'catagoryPK1': 0
    },
    {
    'FunctionID': '1',
    'questionID': '74',
    'comments': this.manuF_abt_manu_machnary.installed_capacity_list,
    'sectionID': '33',
    'partyID': 0,
    'leadID': this.cusID,
    'branchid': this.BranchID,
    'userid': this.userID,
    'createdDate': finaltodayDate,
    'catagoryPK1': 0
    },
    // end
    
            {
                'FunctionID': '1',
                'questionID': '15',
                'Answer': this.manuF_abt_manu_machnary.oprating_capacity,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.cusID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '15',
                'comments': this.manuF_abt_manu_machnary.oprating_capacity_list,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '16',
                'Answer': this.manuF_abt_manu_machnary.value_stock,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '16',
                'comments': this.manuF_abt_manu_machnary.  producttext ,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '17',
                'Answer': this.manuF_abt_manu_machnary. wther_basic_infra,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '18',
                'Answer': this.manuF_abt_manu_machnary.machinery_finance ,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '18',
                'comments': this.manuF_abt_manu_machnary.machinery_teext_show ,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '19',
                'Answer': this.manuF_abt_manu_machnary.totl_machinary_installed ,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '20',
                'Answer': this.manuF_abt_manu_machnary.wher_EB_paid ,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '20',
                'comments': this.manuF_abt_manu_machnary. EB_paid_regular_show ,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '21',
                'Answer':this.manuF_abt_manu_machnary. last_EB_paid_date,
                'sectionID': '33',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '22',
                'Answer': this.manuF_abt_manu_machnary. last_EB_paid,
                'sectionID': '33',
                'partyID': 0,
                'leadID':this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
        ];
    
    
        for (let i = 0; i <= questionarray.length; i++) {
    
            var res = i
            if (questionarray[i].questionID == '74' && questionarray[i].comments || questionarray[i].questionID == '15' && questionarray[i].comments || questionarray[i].questionID == '16' && questionarray[i].comments || questionarray[i].questionID == '18' && questionarray[i].comments || questionarray[i].questionID == '20' && questionarray[i].comments) {
               var datasertest =
                {
                    'Customerid': this.cusID,
                    'FunctionID': questionarray[i].FunctionID,
                    'questionid': questionarray[i].questionID,
                    'comments': questionarray[i].comments,
                    'CreateDate': finaltodayDate,
                    'updateddate': finaltodayDate,
                    'createdby': this.userID,
                    'updatedby': this.userID,
                    'control_ID': 'D'
                }
    
                this.apiservice.saveComments(datasertest).then( (resp:any) =>{
                    console.log(resp);
                }, function (error) {
                    console.log(error);
                })
            }
    
    
    if(questionarray[i].questionID == '74' && questionarray[i].comments || questionarray[i].questionID == '15' && questionarray[i].comments || questionarray[i].questionID == '16' && questionarray[i].comments || questionarray[i].questionID == '18' && questionarray[i].comments || questionarray[i].questionID == '20' && questionarray[i].comments){
    
    if(questionarray[i].questionID == '15'){
    this.newquestionid='103'
    }else if(questionarray[i].questionID == '16'){
    this.newquestionid='104'
    }else if(questionarray[i].questionID == '18'){
    this.newquestionid='105'
    } else if(questionarray[i].questionID == '20'){
    this.newquestionid='106'
    } else if(questionarray[i].questionID == '74'){
    this.newquestionid='113'
    }else{
    this.newquestionid=questionarray[i].questionID
    }
    
    
    var datasertest1 =
    {
    'FunctionID': questionarray[i].FunctionID,
    'questionID': this.newquestionid,
    'Answer': questionarray[i].comments,
    'sectionID': questionarray[i].sectionID,
    'partyID': 0,
    'leadID': questionarray[i].leadID,
    'branchid': this.BranchID,
    'userid': this.userID,
    'createdDate': finaltodayDate,
    'catagoryPK1': 0
    }
    
    this.apiservice.appformdetailinsert(datasertest1).then( (resp:any)=> {
    debugger
    // alert('inserted');
    console.log(resp);
    }, function (resp) {
    console.log(resp);
    
    });
    let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '33', Status: 'A' };
    //let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
    this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
    console.log(resp);
    }, function (err) {
    console.log(err);
    })
    } 
    
    
             if (questionarray[i].Answer) {
               var datasertest2 =
                {
                    'FunctionID': questionarray[i].FunctionID,
                    'questionID': questionarray[i].questionID,
                    'Answer': questionarray[i].Answer,
                    'sectionID': questionarray[i].sectionID,
                    'partyID': 0,
                    'leadID': questionarray[i].leadID,
                    'branchid': this.BranchID,
                    'userid': this.userID,
                    'createdDate': finaltodayDate,
                    'catagoryPK1': 0
                }
    
                this.apiservice.appformdetailinsert(datasertest2).then((resp:any)=> {
                    debugger
                    // alert('inserted');
                    console.log(resp);
                }, function (resp) {
                    console.log(resp);
    
                });
                let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '33', Status: 'A' };
               // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
                this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                    console.log(resp);
                }, function (err) {
                    console.log(err);
                })
    
                if (questionarray.length - 1 == res) {
                 // this.toast.presentToast('saved Successfully');
                  this.AlertService.presentAlert("Alert","saved Successfully")
                  return false;
    
                    // setTimeout(() => {
                    //     this.IsDisabled=true;
                    // }, 2000);
    
                }
            }
    
    
    
    
    
           
        }
        }
      }
   }
  }




}


///  Manufacturing ___  machinary Insurance submit
machineryselect(event:any){
  var getval=this.manuF_machnary_insurance.whetr_macinary_insur
  if(getval=='Yes'){
    this.isvisible=true
  }else if(getval=='No' || getval=='NA'){
    this.isvisible=false
  }else{
    this.isvisible=true
  }
}

uvrManuf_machinaryInsuranceSubmit(){
  var finaltodayDate=new Date();
  if(this.manuF_machnary_insurance.whetr_macinary_insur==''){
    this.AlertService.presentAlert("Alert","Select Whether the Machinery")
  } else if(this.manuF_machnary_insurance.whetr_macinary_insur=='Yes'){
    if(this.manuF_machnary_insurance.IF_value_insur==''){
      this.AlertService.presentAlert("Alert","Please fill IF so value of Insurance")
    } else if(this.manuF_machnary_insurance.duedate==''){
      this.AlertService.presentAlert("Alert","Please fill Due date of the policy")
    } else if(this.manuF_machnary_insurance.Name_insur_cmpny==''){
      this.AlertService.presentAlert("Alert","Please fill Name of the insurance company")
    } else{
      var machineryinsurancearray = [
        {
            'FunctionID': '1',
            'questionID': '23',
            'Answer': this.manuF_machnary_insurance.whetr_macinary_insur,
            'sectionID': '34',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '2',
            'questionID': '24',
            'Answer': this.manuF_machnary_insurance.IF_value_insur,
            'sectionID': '34',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '25',
            'Answer': this.manuF_machnary_insurance.duedate,
            'sectionID': '34',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '26',
            'Answer': this.manuF_machnary_insurance.Name_insur_cmpny,
            'sectionID': '34',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        }
    ]

    for (let i = 0; i < machineryinsurancearray.length; i++) {

        var res = i;


       var  datasertest =
        {
            'FunctionID': machineryinsurancearray[i].FunctionID,
            'questionID': machineryinsurancearray[i].questionID,
            'Answer': machineryinsurancearray[i].Answer,
            'sectionID': machineryinsurancearray[i].sectionID,
            'partyID': 0,
            'leadID': machineryinsurancearray[i].leadID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        }
        this.apiservice.appformdetailinsert(datasertest).then(function (resp) {
            // alert('inserted');
            debugger
            console.log(resp);
        }, function (resp) {
            console.log(resp);

        });
        let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '34', Status: 'A' };
      //  let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
        this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
            console.log(resp);
        }, function (err) {
            console.log(err);
        })
    }

    if (machineryinsurancearray.length > res) {
      this.AlertService.presentAlert("Alert","saved Successfully")
        return false;
        // alert("saved succesfully");
        // this.myForm.$setUntouched()
        // this.myForm.$setPristine();
        // this.myForm = {};
    }

    }
  } else{
    var machineryinsurancearray = [
      {
          'FunctionID': '1',
          'questionID': '23',
          'Answer': this.manuF_machnary_insurance.whetr_macinary_insur,
          'sectionID': '34',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '2',
          'questionID': '24',
          'Answer': this.manuF_machnary_insurance.IF_value_insur,
          'sectionID': '34',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '25',
          'Answer': this.manuF_machnary_insurance.duedate,
          'sectionID': '34',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '26',
          'Answer': this.manuF_machnary_insurance.Name_insur_cmpny,
          'sectionID': '34',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      }
  ]

  for (let i = 0; i < machineryinsurancearray.length; i++) {

      var res = i;


     var  datasertest =
      {
          'FunctionID': machineryinsurancearray[i].FunctionID,
          'questionID': machineryinsurancearray[i].questionID,
          'Answer': machineryinsurancearray[i].Answer,
          'sectionID': machineryinsurancearray[i].sectionID,
          'partyID': 0,
          'leadID': machineryinsurancearray[i].leadID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      }
      this.apiservice.appformdetailinsert(datasertest).then(function (resp) {
          // alert('inserted');
          debugger
          console.log(resp);
      }, function (resp) {
          console.log(resp);

      });
      let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '34', Status: 'A' };
    //  let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
      this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
          console.log(resp);
      }, function (err) {
          console.log(err);
      })
  }

  if (machineryinsurancearray.length > res) {
    this.AlertService.presentAlert("Alert","saved Successfully")
      return false;
      // alert("saved succesfully");
      // this.myForm.$setUntouched()
      // this.myForm.$setPristine();
      // this.myForm = {};
  }
  }




}


conductformmethod(){
  var getitem=this.manuF__insur_perf.conct_unit
  if(getitem=='Closed' || getitem=='Poor'){
    this.isgoodpoorboolean=true
  }else{
    this.isgoodpoorboolean=false
  }

}
reductiondropdown(){
  this. getreduce=this.manuF__insur_perf.wher_sales_reduct
  if(this.getreduce=="Yes"){
    this.reductionnoticedboolean=true
  }else{
    this.reductionnoticedboolean=false
  }
}
currentyeardropdown(){
this.getyear=this.manuF__insur_perf.crrnt_gst_fill
}
salesdropdown(){
 this.getsalesdropdown= this.manuF__insur_perf.Salses_project
}
//// Manufacturing ___About finacial performance
uvrManuf_insur_perf_Submit(){
    debugger
  var finaltodayDate=new Date();
if(this.manuF__insur_perf.latest_audited==''){
  this.AlertService.presentAlert("Alert","Please fill Whether the machineries insured comprehensively with Bank Clause")
  return false;
} else if(this.manuF__insur_perf.Salses_project==''){
  this.AlertService.presentAlert("Alert","Select Sales projected for FY has been achieved")
  return false;
} else if(this.manuF__insur_perf.Salses_project=='No'){
if(this.manuF__insur_perf.latest_audited_comment==''){
  this.AlertService.presentAlert("Alert","Please fill Sales projected for FY has been achieved comment")
  return false;
} else if(this.manuF__insur_perf.crrnt_gst_fill==''){
  this.AlertService.presentAlert("Alert","select current year sales GST filed")
  return false;
} else if(this.manuF__insur_perf.crrnt_gst_fill=='Yes'){
  if(this.manuF__insur_perf.crrnt_gst_fill_comment==''){
    this.AlertService.presentAlert("Alert","Please fill current year sales GST filed comment")
    return false;
  } else if(this.manuF__insur_perf.wher_sales_reduct==''){
    this.AlertService.presentAlert("Alert","Select Whether any sales reduction noticed")
    return false;
  } else if(this.manuF__insur_perf.wher_sales_reduct=='Yes'){
    if(this.manuF__insur_perf.wher_sales_reduct_comment==''){
      this.AlertService.presentAlert("Alert","Please fill Whether any sales reduction noticed comment")
      return false;
    } else if(this.manuF__insur_perf.conct_unit==''){
      this.AlertService.presentAlert("Alert","Select Conduct of the firm/unit")
      return false;
    } else if(this.manuF__insur_perf.conct_unit=='Closed' || this.manuF__insur_perf.conct_unit=='Poor'){
      if(this.manuF__insur_perf.conct_unit_comment==''){
        this.AlertService.presentAlert("Alert","Please fll Conduct of the firm/unit comment")
        return false;
      }else{
        var financialPerformancearray = [
          {
              'FunctionID': '1',
              'questionID': '38',
              'Answer': this.manuF__insur_perf.latest_audited,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '39',
              'Answer': this.manuF__insur_perf.Salses_project,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '39',
              'comments': this.manuF__insur_perf.latest_audited_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '40',
              'Answer': this.manuF__insur_perf.crrnt_gst_fill,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '40',
              'comments': this.manuF__insur_perf.crrnt_gst_fill_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '41',
              'Answer': this.manuF__insur_perf.wher_sales_reduct,
              'sectionID': '35',
              'partyID': 0,
              'leadID':this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '41',
              'comments': this.manuF__insur_perf.wher_sales_reduct_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '42',
              'Answer': this.manuF__insur_perf.conct_unit,
              'sectionID': '35',
              'partyID': 0,
              'leadID':this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '42',
              'comments': this.manuF__insur_perf.conct_unit_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          }
      ]
  
      for (let i = 0; i < financialPerformancearray.length; i++) {
          var res = i;
  
          if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
             var datasertest =
              {
                  'Customerid': this.cusID,
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionid': financialPerformancearray[i].questionID,
                  'comments': financialPerformancearray[i].comments,
                  'CreateDate': finaltodayDate,
                  'updateddate': finaltodayDate,
                  'createdby': this.userID,
                  'updatedby': this.userID,
                  'control_ID': 'D'
              }
  
              this.apiservice.saveComments(datasertest).then( (resp:any)=> {
                  console.log(resp);
              }, function (error) {
                  console.log(error);
              })
          }

          if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){

              if(financialPerformancearray[i].questionID == '39'){
this.newquestionid='107'
              }else  if(financialPerformancearray[i].questionID == '40'){
                  this.newquestionid='108'
              }else  if(financialPerformancearray[i].questionID == '41'){
                  this.newquestionid='109'
              }else  if(financialPerformancearray[i].questionID == '42'){
                  this.newquestionid='110'
              }else{
                  this.newquestionid=financialPerformancearray[i].questionID
              }





              var datasertest1 =
              {
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionID': this.newquestionid,
                  'Answer': financialPerformancearray[i].comments,
                  'sectionID': financialPerformancearray[i].sectionID,
                  'partyID': 0,
                  'leadID': financialPerformancearray[i].leadID,
                  'branchid': this.BranchID,
                  'userid': this.userID,
                  'createdDate': finaltodayDate,
                  'catagoryPK1': 0
              }
              this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
                  // alert('inserted');
                  debugger
                  console.log(resp);
              }, function (resp) {
                  console.log(resp);
  
              });
              let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
             // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
              this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
                  console.log(resp);
              }, function (err) {
                  console.log(err);
              })
          }


          if( financialPerformancearray[i].Answer){
              var datasertest2 =
              {
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionID': financialPerformancearray[i].questionID,
                  'Answer': financialPerformancearray[i].Answer,
                  'sectionID': financialPerformancearray[i].sectionID,
                  'partyID': 0,
                  'leadID': financialPerformancearray[i].leadID,
                  'branchid': this.BranchID,
                  'userid': this.userID,
                  'createdDate': finaltodayDate,
                  'catagoryPK1': 0
              }
              this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
                  // alert('inserted');
                  debugger
                  console.log(resp);
              }, function (resp) {
                  console.log(resp);
  
              });
              let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
             // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
              this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                  console.log(resp);
              }, function (err) {
                  console.log(err);
              })
          
         
      }
      if (financialPerformancearray.length - 1 == res) {
        this.AlertService.presentAlert("Alert","saved Successfully")
        return false;
      }
          }
      }
    }else{
      var financialPerformancearray = [
        {
            'FunctionID': '1',
            'questionID': '38',
            'Answer': this.manuF__insur_perf.latest_audited,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '39',
            'Answer': this.manuF__insur_perf.Salses_project,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '39',
            'comments': this.manuF__insur_perf.latest_audited_comment,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '40',
            'Answer': this.manuF__insur_perf.crrnt_gst_fill,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '40',
            'comments': this.manuF__insur_perf.crrnt_gst_fill_comment,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '41',
            'Answer': this.manuF__insur_perf.wher_sales_reduct,
            'sectionID': '35',
            'partyID': 0,
            'leadID':this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '41',
            'comments': this.manuF__insur_perf.wher_sales_reduct_comment,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '42',
            'Answer': this.manuF__insur_perf.conct_unit,
            'sectionID': '35',
            'partyID': 0,
            'leadID':this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '42',
            'comments': this.manuF__insur_perf.conct_unit_comment,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        }
    ]

    for (let i = 0; i < financialPerformancearray.length; i++) {
        var res = i;

        if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
           var datasertest =
            {
                'Customerid': this.cusID,
                'FunctionID': financialPerformancearray[i].FunctionID,
                'questionid': financialPerformancearray[i].questionID,
                'comments': financialPerformancearray[i].comments,
                'CreateDate': finaltodayDate,
                'updateddate': finaltodayDate,
                'createdby': this.userID,
                'updatedby': this.userID,
                'control_ID': 'D'
            }

            this.apiservice.saveComments(datasertest).then( (resp:any)=> {
                console.log(resp);
            }, function (error) {
                console.log(error);
            })
        }

        if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){

            if(financialPerformancearray[i].questionID == '39'){
this.newquestionid='107'
            }else  if(financialPerformancearray[i].questionID == '40'){
                this.newquestionid='108'
            }else  if(financialPerformancearray[i].questionID == '41'){
                this.newquestionid='109'
            }else  if(financialPerformancearray[i].questionID == '42'){
                this.newquestionid='110'
            }else{
                this.newquestionid=financialPerformancearray[i].questionID
            }





            var datasertest1 =
            {
                'FunctionID': financialPerformancearray[i].FunctionID,
                'questionID': this.newquestionid,
                'Answer': financialPerformancearray[i].comments,
                'sectionID': financialPerformancearray[i].sectionID,
                'partyID': 0,
                'leadID': financialPerformancearray[i].leadID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
            this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
                // alert('inserted');
                debugger
                console.log(resp);
            }, function (resp) {
                console.log(resp);

            });
            let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
           // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
            this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
                console.log(resp);
            }, function (err) {
                console.log(err);
            })
        }


        if( financialPerformancearray[i].Answer){
            var datasertest2 =
            {
                'FunctionID': financialPerformancearray[i].FunctionID,
                'questionID': financialPerformancearray[i].questionID,
                'Answer': financialPerformancearray[i].Answer,
                'sectionID': financialPerformancearray[i].sectionID,
                'partyID': 0,
                'leadID': financialPerformancearray[i].leadID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
            this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
                // alert('inserted');
                debugger
                console.log(resp);
            }, function (resp) {
                console.log(resp);

            });
            let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
           // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
            this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                console.log(resp);
            }, function (err) {
                console.log(err);
            })
        
       
    }
    if (financialPerformancearray.length - 1 == res) {
      this.AlertService.presentAlert("Alert","saved Successfully")
      return false;
    }
        }
    }
    
  } else{
    if(this.manuF__insur_perf.conct_unit==''){
      this.AlertService.presentAlert("Alert","Select Conduct of the firm/unit")
      return false;
    } else if(this.manuF__insur_perf.conct_unit=='Closed' || this.manuF__insur_perf.conct_unit=='Poor'){
      if(this.manuF__insur_perf.conct_unit_comment==''){
        this.AlertService.presentAlert("Alert","Please fll Conduct of the firm/unit comment")
        return false;
      }else{
        var financialPerformancearray = [
          {
              'FunctionID': '1',
              'questionID': '38',
              'Answer': this.manuF__insur_perf.latest_audited,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '39',
              'Answer': this.manuF__insur_perf.Salses_project,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '39',
              'comments': this.manuF__insur_perf.latest_audited_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '40',
              'Answer': this.manuF__insur_perf.crrnt_gst_fill,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '40',
              'comments': this.manuF__insur_perf.crrnt_gst_fill_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '41',
              'Answer': this.manuF__insur_perf.wher_sales_reduct,
              'sectionID': '35',
              'partyID': 0,
              'leadID':this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '41',
              'comments': this.manuF__insur_perf.wher_sales_reduct_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '42',
              'Answer': this.manuF__insur_perf.conct_unit,
              'sectionID': '35',
              'partyID': 0,
              'leadID':this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '42',
              'comments': this.manuF__insur_perf.conct_unit_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          }
      ]
  
      for (let i = 0; i < financialPerformancearray.length; i++) {
          var res = i;
  
          if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
             var datasertest =
              {
                  'Customerid': this.cusID,
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionid': financialPerformancearray[i].questionID,
                  'comments': financialPerformancearray[i].comments,
                  'CreateDate': finaltodayDate,
                  'updateddate': finaltodayDate,
                  'createdby': this.userID,
                  'updatedby': this.userID,
                  'control_ID': 'D'
              }
  
              this.apiservice.saveComments(datasertest).then( (resp:any)=> {
                  console.log(resp);
              }, function (error) {
                  console.log(error);
              })
          }

          if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){

              if(financialPerformancearray[i].questionID == '39'){
this.newquestionid='107'
              }else  if(financialPerformancearray[i].questionID == '40'){
                  this.newquestionid='108'
              }else  if(financialPerformancearray[i].questionID == '41'){
                  this.newquestionid='109'
              }else  if(financialPerformancearray[i].questionID == '42'){
                  this.newquestionid='110'
              }else{
                  this.newquestionid=financialPerformancearray[i].questionID
              }





              var datasertest1 =
              {
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionID': this.newquestionid,
                  'Answer': financialPerformancearray[i].comments,
                  'sectionID': financialPerformancearray[i].sectionID,
                  'partyID': 0,
                  'leadID': financialPerformancearray[i].leadID,
                  'branchid': this.BranchID,
                  'userid': this.userID,
                  'createdDate': finaltodayDate,
                  'catagoryPK1': 0
              }
              this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
                  // alert('inserted');
                  debugger
                  console.log(resp);
              }, function (resp) {
                  console.log(resp);
  
              });
              let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
             // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
              this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
                  console.log(resp);
              }, function (err) {
                  console.log(err);
              })
          }


          if( financialPerformancearray[i].Answer){
              var datasertest2 =
              {
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionID': financialPerformancearray[i].questionID,
                  'Answer': financialPerformancearray[i].Answer,
                  'sectionID': financialPerformancearray[i].sectionID,
                  'partyID': 0,
                  'leadID': financialPerformancearray[i].leadID,
                  'branchid': this.BranchID,
                  'userid': this.userID,
                  'createdDate': finaltodayDate,
                  'catagoryPK1': 0
              }
              this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
                  // alert('inserted');
                  debugger
                  console.log(resp);
              }, function (resp) {
                  console.log(resp);
  
              });
              let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
             // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
              this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                  console.log(resp);
              }, function (err) {
                  console.log(err);
              })
          
         
      }
      if (financialPerformancearray.length - 1 == res) {
        this.AlertService.presentAlert("Alert","saved Successfully")
        return false;
      }
          }
      }
    }else{
      var financialPerformancearray = [
        {
            'FunctionID': '1',
            'questionID': '38',
            'Answer': this.manuF__insur_perf.latest_audited,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '39',
            'Answer': this.manuF__insur_perf.Salses_project,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '39',
            'comments': this.manuF__insur_perf.latest_audited_comment,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '40',
            'Answer': this.manuF__insur_perf.crrnt_gst_fill,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '40',
            'comments': this.manuF__insur_perf.crrnt_gst_fill_comment,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '41',
            'Answer': this.manuF__insur_perf.wher_sales_reduct,
            'sectionID': '35',
            'partyID': 0,
            'leadID':this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '41',
            'comments': this.manuF__insur_perf.wher_sales_reduct_comment,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '42',
            'Answer': this.manuF__insur_perf.conct_unit,
            'sectionID': '35',
            'partyID': 0,
            'leadID':this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '42',
            'comments': this.manuF__insur_perf.conct_unit_comment,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        }
    ]

    for (let i = 0; i < financialPerformancearray.length; i++) {
        var res = i;

        if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
           var datasertest =
            {
                'Customerid': this.cusID,
                'FunctionID': financialPerformancearray[i].FunctionID,
                'questionid': financialPerformancearray[i].questionID,
                'comments': financialPerformancearray[i].comments,
                'CreateDate': finaltodayDate,
                'updateddate': finaltodayDate,
                'createdby': this.userID,
                'updatedby': this.userID,
                'control_ID': 'D'
            }

            this.apiservice.saveComments(datasertest).then( (resp:any)=> {
                console.log(resp);
            }, function (error) {
                console.log(error);
            })
        }

        if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){

            if(financialPerformancearray[i].questionID == '39'){
this.newquestionid='107'
            }else  if(financialPerformancearray[i].questionID == '40'){
                this.newquestionid='108'
            }else  if(financialPerformancearray[i].questionID == '41'){
                this.newquestionid='109'
            }else  if(financialPerformancearray[i].questionID == '42'){
                this.newquestionid='110'
            }else{
                this.newquestionid=financialPerformancearray[i].questionID
            }





            var datasertest1 =
            {
                'FunctionID': financialPerformancearray[i].FunctionID,
                'questionID': this.newquestionid,
                'Answer': financialPerformancearray[i].comments,
                'sectionID': financialPerformancearray[i].sectionID,
                'partyID': 0,
                'leadID': financialPerformancearray[i].leadID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
            this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
                // alert('inserted');
                debugger
                console.log(resp);
            }, function (resp) {
                console.log(resp);

            });
            let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
           // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
            this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
                console.log(resp);
            }, function (err) {
                console.log(err);
            })
        }


        if( financialPerformancearray[i].Answer){
            var datasertest2 =
            {
                'FunctionID': financialPerformancearray[i].FunctionID,
                'questionID': financialPerformancearray[i].questionID,
                'Answer': financialPerformancearray[i].Answer,
                'sectionID': financialPerformancearray[i].sectionID,
                'partyID': 0,
                'leadID': financialPerformancearray[i].leadID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
            this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
                // alert('inserted');
                debugger
                console.log(resp);
            }, function (resp) {
                console.log(resp);

            });
            let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
           // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
            this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                console.log(resp);
            }, function (err) {
                console.log(err);
            })
        
       
    }
    if (financialPerformancearray.length - 1 == res) {
      this.AlertService.presentAlert("Alert","saved Successfully")
      return false;
    }
        }
    }





  }
}else{
  if(this.manuF__insur_perf.wher_sales_reduct==''){
    this.AlertService.presentAlert("Alert","Select Whether any sales reduction noticed")
    return false;
  } else if(this.manuF__insur_perf.wher_sales_reduct=='Yes'){
    if(this.manuF__insur_perf.wher_sales_reduct_comment==''){
      this.AlertService.presentAlert("Alert","Please fill Whether any sales reduction noticed comment")
      return false;
    } else if(this.manuF__insur_perf.conct_unit==''){
      this.AlertService.presentAlert("Alert","Select Conduct of the firm/unit")
      return false;
    } else if(this.manuF__insur_perf.conct_unit=='Closed' || this.manuF__insur_perf.conct_unit=='Poor'){
      if(this.manuF__insur_perf.conct_unit_comment==''){
        this.AlertService.presentAlert("Alert","Please fll Conduct of the firm/unit comment")
        return false;
      }else{
        var financialPerformancearray = [
          {
              'FunctionID': '1',
              'questionID': '38',
              'Answer': this.manuF__insur_perf.latest_audited,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '39',
              'Answer': this.manuF__insur_perf.Salses_project,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '39',
              'comments': this.manuF__insur_perf.latest_audited_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '40',
              'Answer': this.manuF__insur_perf.crrnt_gst_fill,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '40',
              'comments': this.manuF__insur_perf.crrnt_gst_fill_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '41',
              'Answer': this.manuF__insur_perf.wher_sales_reduct,
              'sectionID': '35',
              'partyID': 0,
              'leadID':this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '41',
              'comments': this.manuF__insur_perf.wher_sales_reduct_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '42',
              'Answer': this.manuF__insur_perf.conct_unit,
              'sectionID': '35',
              'partyID': 0,
              'leadID':this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '42',
              'comments': this.manuF__insur_perf.conct_unit_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          }
      ]
  
      for (let i = 0; i < financialPerformancearray.length; i++) {
          var res = i;
  
          if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
             var datasertest =
              {
                  'Customerid': this.cusID,
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionid': financialPerformancearray[i].questionID,
                  'comments': financialPerformancearray[i].comments,
                  'CreateDate': finaltodayDate,
                  'updateddate': finaltodayDate,
                  'createdby': this.userID,
                  'updatedby': this.userID,
                  'control_ID': 'D'
              }
  
              this.apiservice.saveComments(datasertest).then( (resp:any)=> {
                  console.log(resp);
              }, function (error) {
                  console.log(error);
              })
          }

          if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){

              if(financialPerformancearray[i].questionID == '39'){
this.newquestionid='107'
              }else  if(financialPerformancearray[i].questionID == '40'){
                  this.newquestionid='108'
              }else  if(financialPerformancearray[i].questionID == '41'){
                  this.newquestionid='109'
              }else  if(financialPerformancearray[i].questionID == '42'){
                  this.newquestionid='110'
              }else{
                  this.newquestionid=financialPerformancearray[i].questionID
              }





              var datasertest1 =
              {
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionID': this.newquestionid,
                  'Answer': financialPerformancearray[i].comments,
                  'sectionID': financialPerformancearray[i].sectionID,
                  'partyID': 0,
                  'leadID': financialPerformancearray[i].leadID,
                  'branchid': this.BranchID,
                  'userid': this.userID,
                  'createdDate': finaltodayDate,
                  'catagoryPK1': 0
              }
              this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
                  // alert('inserted');
                  debugger
                  console.log(resp);
              }, function (resp) {
                  console.log(resp);
  
              });
              let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
             // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
              this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
                  console.log(resp);
              }, function (err) {
                  console.log(err);
              })
          }


          if( financialPerformancearray[i].Answer){
              var datasertest2 =
              {
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionID': financialPerformancearray[i].questionID,
                  'Answer': financialPerformancearray[i].Answer,
                  'sectionID': financialPerformancearray[i].sectionID,
                  'partyID': 0,
                  'leadID': financialPerformancearray[i].leadID,
                  'branchid': this.BranchID,
                  'userid': this.userID,
                  'createdDate': finaltodayDate,
                  'catagoryPK1': 0
              }
              this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
                  // alert('inserted');
                  debugger
                  console.log(resp);
              }, function (resp) {
                  console.log(resp);
  
              });
              let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
             // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
              this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                  console.log(resp);
              }, function (err) {
                  console.log(err);
              })
          
         
      }
      if (financialPerformancearray.length - 1 == res) {
        this.AlertService.presentAlert("Alert","saved Successfully")
        return false;
      }
          }
      }
    }else{
      var financialPerformancearray = [
        {
            'FunctionID': '1',
            'questionID': '38',
            'Answer': this.manuF__insur_perf.latest_audited,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '39',
            'Answer': this.manuF__insur_perf.Salses_project,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '39',
            'comments': this.manuF__insur_perf.latest_audited_comment,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '40',
            'Answer': this.manuF__insur_perf.crrnt_gst_fill,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '40',
            'comments': this.manuF__insur_perf.crrnt_gst_fill_comment,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '41',
            'Answer': this.manuF__insur_perf.wher_sales_reduct,
            'sectionID': '35',
            'partyID': 0,
            'leadID':this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '41',
            'comments': this.manuF__insur_perf.wher_sales_reduct_comment,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '42',
            'Answer': this.manuF__insur_perf.conct_unit,
            'sectionID': '35',
            'partyID': 0,
            'leadID':this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '42',
            'comments': this.manuF__insur_perf.conct_unit_comment,
            'sectionID': '35',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        }
    ]

    for (let i = 0; i < financialPerformancearray.length; i++) {
        var res = i;

        if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
           var datasertest =
            {
                'Customerid': this.cusID,
                'FunctionID': financialPerformancearray[i].FunctionID,
                'questionid': financialPerformancearray[i].questionID,
                'comments': financialPerformancearray[i].comments,
                'CreateDate': finaltodayDate,
                'updateddate': finaltodayDate,
                'createdby': this.userID,
                'updatedby': this.userID,
                'control_ID': 'D'
            }

            this.apiservice.saveComments(datasertest).then( (resp:any)=> {
                console.log(resp);
            }, function (error) {
                console.log(error);
            })
        }

        if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){

            if(financialPerformancearray[i].questionID == '39'){
this.newquestionid='107'
            }else  if(financialPerformancearray[i].questionID == '40'){
                this.newquestionid='108'
            }else  if(financialPerformancearray[i].questionID == '41'){
                this.newquestionid='109'
            }else  if(financialPerformancearray[i].questionID == '42'){
                this.newquestionid='110'
            }else{
                this.newquestionid=financialPerformancearray[i].questionID
            }





            var datasertest1 =
            {
                'FunctionID': financialPerformancearray[i].FunctionID,
                'questionID': this.newquestionid,
                'Answer': financialPerformancearray[i].comments,
                'sectionID': financialPerformancearray[i].sectionID,
                'partyID': 0,
                'leadID': financialPerformancearray[i].leadID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
            this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
                // alert('inserted');
                debugger
                console.log(resp);
            }, function (resp) {
                console.log(resp);

            });
            let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
           // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
            this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
                console.log(resp);
            }, function (err) {
                console.log(err);
            })
        }


        if( financialPerformancearray[i].Answer){
            var datasertest2 =
            {
                'FunctionID': financialPerformancearray[i].FunctionID,
                'questionID': financialPerformancearray[i].questionID,
                'Answer': financialPerformancearray[i].Answer,
                'sectionID': financialPerformancearray[i].sectionID,
                'partyID': 0,
                'leadID': financialPerformancearray[i].leadID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
            this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
                // alert('inserted');
                debugger
                console.log(resp);
            }, function (resp) {
                console.log(resp);

            });
            let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
           // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
            this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                console.log(resp);
            }, function (err) {
                console.log(err);
            })
        
       
    }
    if (financialPerformancearray.length - 1 == res) {
      this.AlertService.presentAlert("Alert","saved Successfully")
      return false;
    }
        }
    }
  }else{
    if(this.manuF__insur_perf.conct_unit==''){
      this.AlertService.presentAlert("Alert","Select Conduct of the firm/unit")
      return false;
    } else if(this.manuF__insur_perf.conct_unit=='Closed' || this.manuF__insur_perf.conct_unit=='Poor'){
      if(this.manuF__insur_perf.conct_unit_comment==''){
        this.AlertService.presentAlert("Alert","Please fll Conduct of the firm/unit comment")
        return false;
      }else{
        var financialPerformancearray = [
          {
              'FunctionID': '1',
              'questionID': '38',
              'Answer': this.manuF__insur_perf.latest_audited,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '39',
              'Answer': this.manuF__insur_perf.Salses_project,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '39',
              'comments': this.manuF__insur_perf.latest_audited_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '40',
              'Answer': this.manuF__insur_perf.crrnt_gst_fill,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '40',
              'comments': this.manuF__insur_perf.crrnt_gst_fill_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '41',
              'Answer': this.manuF__insur_perf.wher_sales_reduct,
              'sectionID': '35',
              'partyID': 0,
              'leadID':this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '41',
              'comments': this.manuF__insur_perf.wher_sales_reduct_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '42',
              'Answer': this.manuF__insur_perf.conct_unit,
              'sectionID': '35',
              'partyID': 0,
              'leadID':this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '42',
              'comments': this.manuF__insur_perf.conct_unit_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          }
      ]
  
      for (let i = 0; i < financialPerformancearray.length; i++) {
          var res = i;
  
          if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
             var datasertest =
              {
                  'Customerid': this.cusID,
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionid': financialPerformancearray[i].questionID,
                  'comments': financialPerformancearray[i].comments,
                  'CreateDate': finaltodayDate,
                  'updateddate': finaltodayDate,
                  'createdby': this.userID,
                  'updatedby': this.userID,
                  'control_ID': 'D'
              }
  
              this.apiservice.saveComments(datasertest).then( (resp:any)=> {
                  console.log(resp);
              }, function (error) {
                  console.log(error);
              })
          }

          if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){

              if(financialPerformancearray[i].questionID == '39'){
this.newquestionid='107'
              }else  if(financialPerformancearray[i].questionID == '40'){
                  this.newquestionid='108'
              }else  if(financialPerformancearray[i].questionID == '41'){
                  this.newquestionid='109'
              }else  if(financialPerformancearray[i].questionID == '42'){
                  this.newquestionid='110'
              }else{
                  this.newquestionid=financialPerformancearray[i].questionID
              }





              var datasertest1 =
              {
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionID': this.newquestionid,
                  'Answer': financialPerformancearray[i].comments,
                  'sectionID': financialPerformancearray[i].sectionID,
                  'partyID': 0,
                  'leadID': financialPerformancearray[i].leadID,
                  'branchid': this.BranchID,
                  'userid': this.userID,
                  'createdDate': finaltodayDate,
                  'catagoryPK1': 0
              }
              this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
                  // alert('inserted');
                  debugger
                  debugger
                  console.log(resp);
              }, function (resp) {
                  console.log(resp);
  
              });
              let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
             // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
              this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
                  console.log(resp);
              }, function (err) {
                  console.log(err);
              })
          }


          if( financialPerformancearray[i].Answer){
              var datasertest2 =
              {
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionID': financialPerformancearray[i].questionID,
                  'Answer': financialPerformancearray[i].Answer,
                  'sectionID': financialPerformancearray[i].sectionID,
                  'partyID': 0,
                  'leadID': financialPerformancearray[i].leadID,
                  'branchid': this.BranchID,
                  'userid': this.userID,
                  'createdDate': finaltodayDate,
                  'catagoryPK1': 0
              }
              this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
                  // alert('inserted');
                  debugger
                  console.log(resp);
              }, function (resp) {
                  console.log(resp);
  
              });
              let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
             // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
              this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                  console.log(resp);
              }, function (err) {
                  console.log(err);
              })
          
         
      }
      if (financialPerformancearray.length - 1 == res) {
        this.AlertService.presentAlert("Alert","saved Successfully")
        return false;
      }
          } 
      }

  }else{
    var financialPerformancearray = [
      {
          'FunctionID': '1',
          'questionID': '38',
          'Answer': this.manuF__insur_perf.latest_audited,
          'sectionID': '35',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '39',
          'Answer': this.manuF__insur_perf.Salses_project,
          'sectionID': '35',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '39',
          'comments': this.manuF__insur_perf.latest_audited_comment,
          'sectionID': '35',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '40',
          'Answer': this.manuF__insur_perf.crrnt_gst_fill,
          'sectionID': '35',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '40',
          'comments': this.manuF__insur_perf.crrnt_gst_fill_comment,
          'sectionID': '35',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '41',
          'Answer': this.manuF__insur_perf.wher_sales_reduct,
          'sectionID': '35',
          'partyID': 0,
          'leadID':this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '41',
          'comments': this.manuF__insur_perf.wher_sales_reduct_comment,
          'sectionID': '35',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '42',
          'Answer': this.manuF__insur_perf.conct_unit,
          'sectionID': '35',
          'partyID': 0,
          'leadID':this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'FunctionID': '1',
          'questionID': '42',
          'comments': this.manuF__insur_perf.conct_unit_comment,
          'sectionID': '35',
          'partyID': 0,
          'leadID': this.cusID,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      }
  ]

  for (let i = 0; i < financialPerformancearray.length; i++) {
      var res = i;

      if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
         var datasertest =
          {
              'Customerid': this.cusID,
              'FunctionID': financialPerformancearray[i].FunctionID,
              'questionid': financialPerformancearray[i].questionID,
              'comments': financialPerformancearray[i].comments,
              'CreateDate': finaltodayDate,
              'updateddate': finaltodayDate,
              'createdby': this.userID,
              'updatedby': this.userID,
              'control_ID': 'D'
          }

          this.apiservice.saveComments(datasertest).then( (resp:any)=> {
              console.log(resp);
          }, function (error) {
              console.log(error);
          })
      }

      if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){

          if(financialPerformancearray[i].questionID == '39'){
this.newquestionid='107'
          }else  if(financialPerformancearray[i].questionID == '40'){
              this.newquestionid='108'
          }else  if(financialPerformancearray[i].questionID == '41'){
              this.newquestionid='109'
          }else  if(financialPerformancearray[i].questionID == '42'){
              this.newquestionid='110'
          }else{
              this.newquestionid=financialPerformancearray[i].questionID
          }





          var datasertest1 =
          {
              'FunctionID': financialPerformancearray[i].FunctionID,
              'questionID': this.newquestionid,
              'Answer': financialPerformancearray[i].comments,
              'sectionID': financialPerformancearray[i].sectionID,
              'partyID': 0,
              'leadID': financialPerformancearray[i].leadID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          }
          this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
              // alert('inserted');
              console.log(resp);
          }, function (resp) {
              console.log(resp);

          });
          let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
         // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
          this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
              console.log(resp);
          }, function (err) {
              console.log(err);
          })
      }


      if( financialPerformancearray[i].Answer){
          var datasertest2 =
          {
              'FunctionID': financialPerformancearray[i].FunctionID,
              'questionID': financialPerformancearray[i].questionID,
              'Answer': financialPerformancearray[i].Answer,
              'sectionID': financialPerformancearray[i].sectionID,
              'partyID': 0,
              'leadID': financialPerformancearray[i].leadID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          }
          this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
              // alert('inserted');
              console.log(resp);
          }, function (resp) {
              console.log(resp);

          });
          let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
         // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
          this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
              console.log(resp);
          }, function (err) {
              console.log(err);
          })
      
     
  }
  if (financialPerformancearray.length - 1 == res) {
    this.AlertService.presentAlert("Alert","saved Successfully")
    return false;
  }
      }
  }

  }



}
} else{
  
  if(this.manuF__insur_perf.crrnt_gst_fill==''){
    this.AlertService.presentAlert("Alert","select current year sales GST filed")
    return false;
  } else if(this.manuF__insur_perf.crrnt_gst_fill=='Yes'){
    if(this.manuF__insur_perf.crrnt_gst_fill_comment==''){
      this.AlertService.presentAlert("Alert","Please fill current year sales GST filed comment")
      return false;
    } else if(this.manuF__insur_perf.wher_sales_reduct==''){
      this.AlertService.presentAlert("Alert","Select Whether any sales reduction noticed")
      return false;
    } else if(this.manuF__insur_perf.wher_sales_reduct=='Yes'){
      if(this.manuF__insur_perf.wher_sales_reduct_comment==''){
        this.AlertService.presentAlert("Alert","Please fill Whether any sales reduction noticed comment")
        return false;
      } else if(this.manuF__insur_perf.conct_unit==''){
        this.AlertService.presentAlert("Alert","Select Conduct of the firm/unit")
        return false;
      } else if(this.manuF__insur_perf.conct_unit=='Closed' || this.manuF__insur_perf.conct_unit=='Poor'){
        if(this.manuF__insur_perf.conct_unit_comment==''){
          this.AlertService.presentAlert("Alert","Please fll Conduct of the firm/unit comment")
          return false;
        }else{
          var financialPerformancearray = [
            {
                'FunctionID': '1',
                'questionID': '38',
                'Answer': this.manuF__insur_perf.latest_audited,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '39',
                'Answer': this.manuF__insur_perf.Salses_project,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '39',
                'comments': this.manuF__insur_perf.latest_audited_comment,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '40',
                'Answer': this.manuF__insur_perf.crrnt_gst_fill,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '40',
                'comments': this.manuF__insur_perf.crrnt_gst_fill_comment,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '41',
                'Answer': this.manuF__insur_perf.wher_sales_reduct,
                'sectionID': '35',
                'partyID': 0,
                'leadID':this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '41',
                'comments': this.manuF__insur_perf.wher_sales_reduct_comment,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '42',
                'Answer': this.manuF__insur_perf.conct_unit,
                'sectionID': '35',
                'partyID': 0,
                'leadID':this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '42',
                'comments': this.manuF__insur_perf.conct_unit_comment,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
        ]
    
        for (let i = 0; i < financialPerformancearray.length; i++) {
            var res = i;
    
            if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
               var datasertest =
                {
                    'Customerid': this.cusID,
                    'FunctionID': financialPerformancearray[i].FunctionID,
                    'questionid': financialPerformancearray[i].questionID,
                    'comments': financialPerformancearray[i].comments,
                    'CreateDate': finaltodayDate,
                    'updateddate': finaltodayDate,
                    'createdby': this.userID,
                    'updatedby': this.userID,
                    'control_ID': 'D'
                }
    
                this.apiservice.saveComments(datasertest).then( (resp:any)=> {
                    console.log(resp);
                }, function (error) {
                    console.log(error);
                })
            }
  
            if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
  
                if(financialPerformancearray[i].questionID == '39'){
  this.newquestionid='107'
                }else  if(financialPerformancearray[i].questionID == '40'){
                    this.newquestionid='108'
                }else  if(financialPerformancearray[i].questionID == '41'){
                    this.newquestionid='109'
                }else  if(financialPerformancearray[i].questionID == '42'){
                    this.newquestionid='110'
                }else{
                    this.newquestionid=financialPerformancearray[i].questionID
                }
  
  
  
  
  
                var datasertest1 =
                {
                    'FunctionID': financialPerformancearray[i].FunctionID,
                    'questionID': this.newquestionid,
                    'Answer': financialPerformancearray[i].comments,
                    'sectionID': financialPerformancearray[i].sectionID,
                    'partyID': 0,
                    'leadID': financialPerformancearray[i].leadID,
                    'branchid': this.BranchID,
                    'userid': this.userID,
                    'createdDate': finaltodayDate,
                    'catagoryPK1': 0
                }
                this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
                    // alert('inserted');
                    console.log(resp);
                }, function (resp) {
                    console.log(resp);
    
                });
                let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
               // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
                this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
                    console.log(resp);
                }, function (err) {
                    console.log(err);
                })
            }
  
  
            if( financialPerformancearray[i].Answer){
                var datasertest2 =
                {
                    'FunctionID': financialPerformancearray[i].FunctionID,
                    'questionID': financialPerformancearray[i].questionID,
                    'Answer': financialPerformancearray[i].Answer,
                    'sectionID': financialPerformancearray[i].sectionID,
                    'partyID': 0,
                    'leadID': financialPerformancearray[i].leadID,
                    'branchid': this.BranchID,
                    'userid': this.userID,
                    'createdDate': finaltodayDate,
                    'catagoryPK1': 0
                }
                this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
                    // alert('inserted');
                    console.log(resp);
                }, function (resp) {
                    console.log(resp);
    
                });
                let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
               // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
                this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                    console.log(resp);
                }, function (err) {
                    console.log(err);
                })
            
           
        }
        if (financialPerformancearray.length - 1 == res) {
          this.AlertService.presentAlert("Alert","saved Successfully")
          return false;
        }
            }
        }
      }
    }
  } else{
    if(this.manuF__insur_perf.wher_sales_reduct==''){
      this.AlertService.presentAlert("Alert","Select Whether any sales reduction noticed")
      return false;
    } else if(this.manuF__insur_perf.wher_sales_reduct=='Yes'){
      if(this.manuF__insur_perf.wher_sales_reduct_comment==''){
        this.AlertService.presentAlert("Alert","Please fill Whether any sales reduction noticed comment")
        return false;
      } else if(this.manuF__insur_perf.conct_unit==''){
        this.AlertService.presentAlert("Alert","Select Conduct of the firm/unit")
        return false;
      } else if(this.manuF__insur_perf.conct_unit=='Closed' || this.manuF__insur_perf.conct_unit=='Poor'){
        if(this.manuF__insur_perf.conct_unit_comment==''){
          this.AlertService.presentAlert("Alert","Please fll Conduct of the firm/unit comment")
          return false;
        }else{
          var financialPerformancearray = [
            {
                'FunctionID': '1',
                'questionID': '38',
                'Answer': this.manuF__insur_perf.latest_audited,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '39',
                'Answer': this.manuF__insur_perf.Salses_project,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '39',
                'comments': this.manuF__insur_perf.latest_audited_comment,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '40',
                'Answer': this.manuF__insur_perf.crrnt_gst_fill,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '40',
                'comments': this.manuF__insur_perf.crrnt_gst_fill_comment,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '41',
                'Answer': this.manuF__insur_perf.wher_sales_reduct,
                'sectionID': '35',
                'partyID': 0,
                'leadID':this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '41',
                'comments': this.manuF__insur_perf.wher_sales_reduct_comment,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '42',
                'Answer': this.manuF__insur_perf.conct_unit,
                'sectionID': '35',
                'partyID': 0,
                'leadID':this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '42',
                'comments': this.manuF__insur_perf.conct_unit_comment,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
        ]
    
        for (let i = 0; i < financialPerformancearray.length; i++) {
            var res = i;
    
            if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
               var datasertest =
                {
                    'Customerid': this.cusID,
                    'FunctionID': financialPerformancearray[i].FunctionID,
                    'questionid': financialPerformancearray[i].questionID,
                    'comments': financialPerformancearray[i].comments,
                    'CreateDate': finaltodayDate,
                    'updateddate': finaltodayDate,
                    'createdby': this.userID,
                    'updatedby': this.userID,
                    'control_ID': 'D'
                }
    
                this.apiservice.saveComments(datasertest).then( (resp:any)=> {
                    console.log(resp);
                }, function (error) {
                    console.log(error);
                })
            }
  
            if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
  
                if(financialPerformancearray[i].questionID == '39'){
  this.newquestionid='107'
                }else  if(financialPerformancearray[i].questionID == '40'){
                    this.newquestionid='108'
                }else  if(financialPerformancearray[i].questionID == '41'){
                    this.newquestionid='109'
                }else  if(financialPerformancearray[i].questionID == '42'){
                    this.newquestionid='110'
                }else{
                    this.newquestionid=financialPerformancearray[i].questionID
                }
  
  
  
  
  
                var datasertest1 =
                {
                    'FunctionID': financialPerformancearray[i].FunctionID,
                    'questionID': this.newquestionid,
                    'Answer': financialPerformancearray[i].comments,
                    'sectionID': financialPerformancearray[i].sectionID,
                    'partyID': 0,
                    'leadID': financialPerformancearray[i].leadID,
                    'branchid': this.BranchID,
                    'userid': this.userID,
                    'createdDate': finaltodayDate,
                    'catagoryPK1': 0
                }
                this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
                    // alert('inserted');
                    console.log(resp);
                }, function (resp) {
                    console.log(resp);
    
                });
                let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
               // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
                this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
                    console.log(resp);
                }, function (err) {
                    console.log(err);
                })
            }
  
  
            if( financialPerformancearray[i].Answer){
                var datasertest2 =
                {
                    'FunctionID': financialPerformancearray[i].FunctionID,
                    'questionID': financialPerformancearray[i].questionID,
                    'Answer': financialPerformancearray[i].Answer,
                    'sectionID': financialPerformancearray[i].sectionID,
                    'partyID': 0,
                    'leadID': financialPerformancearray[i].leadID,
                    'branchid': this.BranchID,
                    'userid': this.userID,
                    'createdDate': finaltodayDate,
                    'catagoryPK1': 0
                }
                this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
                    // alert('inserted');
                    console.log(resp);
                }, function (resp) {
                    console.log(resp);
    
                });
                let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
               // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
                this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                    console.log(resp);
                }, function (err) {
                    console.log(err);
                })
            
           
        }
        if (financialPerformancearray.length - 1 == res) {
          this.AlertService.presentAlert("Alert","saved Successfully")
          return false;
        }
            }
        }
      }else{
        var financialPerformancearray = [
          {
              'FunctionID': '1',
              'questionID': '38',
              'Answer': this.manuF__insur_perf.latest_audited,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '39',
              'Answer': this.manuF__insur_perf.Salses_project,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '39',
              'comments': this.manuF__insur_perf.latest_audited_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '40',
              'Answer': this.manuF__insur_perf.crrnt_gst_fill,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '40',
              'comments': this.manuF__insur_perf.crrnt_gst_fill_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '41',
              'Answer': this.manuF__insur_perf.wher_sales_reduct,
              'sectionID': '35',
              'partyID': 0,
              'leadID':this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '41',
              'comments': this.manuF__insur_perf.wher_sales_reduct_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '42',
              'Answer': this.manuF__insur_perf.conct_unit,
              'sectionID': '35',
              'partyID': 0,
              'leadID':this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '42',
              'comments': this.manuF__insur_perf.conct_unit_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          }
      ]
  
      for (let i = 0; i < financialPerformancearray.length; i++) {
          var res = i;
  
          if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
             var datasertest =
              {
                  'Customerid': this.cusID,
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionid': financialPerformancearray[i].questionID,
                  'comments': financialPerformancearray[i].comments,
                  'CreateDate': finaltodayDate,
                  'updateddate': finaltodayDate,
                  'createdby': this.userID,
                  'updatedby': this.userID,
                  'control_ID': 'D'
              }
  
              this.apiservice.saveComments(datasertest).then( (resp:any)=> {
                  console.log(resp);
              }, function (error) {
                  console.log(error);
              })
          }

          if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){

              if(financialPerformancearray[i].questionID == '39'){
this.newquestionid='107'
              }else  if(financialPerformancearray[i].questionID == '40'){
                  this.newquestionid='108'
              }else  if(financialPerformancearray[i].questionID == '41'){
                  this.newquestionid='109'
              }else  if(financialPerformancearray[i].questionID == '42'){
                  this.newquestionid='110'
              }else{
                  this.newquestionid=financialPerformancearray[i].questionID
              }





              var datasertest1 =
              {
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionID': this.newquestionid,
                  'Answer': financialPerformancearray[i].comments,
                  'sectionID': financialPerformancearray[i].sectionID,
                  'partyID': 0,
                  'leadID': financialPerformancearray[i].leadID,
                  'branchid': this.BranchID,
                  'userid': this.userID,
                  'createdDate': finaltodayDate,
                  'catagoryPK1': 0
              }
              this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
                  // alert('inserted');
                  console.log(resp);
              }, function (resp) {
                  console.log(resp);
  
              });
              let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
             // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
              this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
                  console.log(resp);
              }, function (err) {
                  console.log(err);
              })
          }


          if( financialPerformancearray[i].Answer){
              var datasertest2 =
              {
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionID': financialPerformancearray[i].questionID,
                  'Answer': financialPerformancearray[i].Answer,
                  'sectionID': financialPerformancearray[i].sectionID,
                  'partyID': 0,
                  'leadID': financialPerformancearray[i].leadID,
                  'branchid': this.BranchID,
                  'userid': this.userID,
                  'createdDate': finaltodayDate,
                  'catagoryPK1': 0
              }
              this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
                  // alert('inserted');
                  console.log(resp);
              }, function (resp) {
                  console.log(resp);
  
              });
              let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
             // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
              this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                  console.log(resp);
              }, function (err) {
                  console.log(err);
              })
          
         
      }
      if (financialPerformancearray.length - 1 == res) {
        this.AlertService.presentAlert("Alert","saved Successfully")
        return false;
      }
          }
      }
    }else{
      if(this.manuF__insur_perf.conct_unit==''){
        this.AlertService.presentAlert("Alert","Select Conduct of the firm/unit")
        return false;
      } else if(this.manuF__insur_perf.conct_unit=='Closed' || this.manuF__insur_perf.conct_unit=='Poor'){
        if(this.manuF__insur_perf.conct_unit_comment==''){
          this.AlertService.presentAlert("Alert","Please fll Conduct of the firm/unit comment")
          return false;
        }else{
          var financialPerformancearray = [
            {
                'FunctionID': '1',
                'questionID': '38',
                'Answer': this.manuF__insur_perf.latest_audited,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '39',
                'Answer': this.manuF__insur_perf.Salses_project,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '39',
                'comments': this.manuF__insur_perf.latest_audited_comment,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '40',
                'Answer': this.manuF__insur_perf.crrnt_gst_fill,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '40',
                'comments': this.manuF__insur_perf.crrnt_gst_fill_comment,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '41',
                'Answer': this.manuF__insur_perf.wher_sales_reduct,
                'sectionID': '35',
                'partyID': 0,
                'leadID':this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '41',
                'comments': this.manuF__insur_perf.wher_sales_reduct_comment,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '42',
                'Answer': this.manuF__insur_perf.conct_unit,
                'sectionID': '35',
                'partyID': 0,
                'leadID':this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '42',
                'comments': this.manuF__insur_perf.conct_unit_comment,
                'sectionID': '35',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
        ]
    
        for (let i = 0; i < financialPerformancearray.length; i++) {
            var res = i;
    
            if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
               var datasertest =
                {
                    'Customerid': this.cusID,
                    'FunctionID': financialPerformancearray[i].FunctionID,
                    'questionid': financialPerformancearray[i].questionID,
                    'comments': financialPerformancearray[i].comments,
                    'CreateDate': finaltodayDate,
                    'updateddate': finaltodayDate,
                    'createdby': this.userID,
                    'updatedby': this.userID,
                    'control_ID': 'D'
                }
    
                this.apiservice.saveComments(datasertest).then( (resp:any)=> {
                    console.log(resp);
                }, function (error) {
                    console.log(error);
                })
            }
  
            if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
  
                if(financialPerformancearray[i].questionID == '39'){
  this.newquestionid='107'
                }else  if(financialPerformancearray[i].questionID == '40'){
                    this.newquestionid='108'
                }else  if(financialPerformancearray[i].questionID == '41'){
                    this.newquestionid='109'
                }else  if(financialPerformancearray[i].questionID == '42'){
                    this.newquestionid='110'
                }else{
                    this.newquestionid=financialPerformancearray[i].questionID
                }
  
  
  
  
  
                var datasertest1 =
                {
                    'FunctionID': financialPerformancearray[i].FunctionID,
                    'questionID': this.newquestionid,
                    'Answer': financialPerformancearray[i].comments,
                    'sectionID': financialPerformancearray[i].sectionID,
                    'partyID': 0,
                    'leadID': financialPerformancearray[i].leadID,
                    'branchid': this.BranchID,
                    'userid': this.userID,
                    'createdDate': finaltodayDate,
                    'catagoryPK1': 0
                }
                this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
                    // alert('inserted');
                    console.log(resp);
                }, function (resp) {
                    console.log(resp);
    
                });
                let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
               // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
                this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
                    console.log(resp);
                }, function (err) {
                    console.log(err);
                })
            }
  
  
            if( financialPerformancearray[i].Answer){
                var datasertest2 =
                {
                    'FunctionID': financialPerformancearray[i].FunctionID,
                    'questionID': financialPerformancearray[i].questionID,
                    'Answer': financialPerformancearray[i].Answer,
                    'sectionID': financialPerformancearray[i].sectionID,
                    'partyID': 0,
                    'leadID': financialPerformancearray[i].leadID,
                    'branchid': this.BranchID,
                    'userid': this.userID,
                    'createdDate': finaltodayDate,
                    'catagoryPK1': 0
                }
                this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
                    // alert('inserted');
                    console.log(resp);
                }, function (resp) {
                    console.log(resp);
    
                });
                let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
               // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
                this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                    console.log(resp);
                }, function (err) {
                    console.log(err);
                })
            
           
        }
        if (financialPerformancearray.length - 1 == res) {
          this.AlertService.presentAlert("Alert","saved Successfully")
          return false;
        }
            }
        }
      }else{
        var financialPerformancearray = [
          {
              'FunctionID': '1',
              'questionID': '38',
              'Answer': this.manuF__insur_perf.latest_audited,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '39',
              'Answer': this.manuF__insur_perf.Salses_project,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '39',
              'comments': this.manuF__insur_perf.latest_audited_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '40',
              'Answer': this.manuF__insur_perf.crrnt_gst_fill,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '40',
              'comments': this.manuF__insur_perf.crrnt_gst_fill_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '41',
              'Answer': this.manuF__insur_perf.wher_sales_reduct,
              'sectionID': '35',
              'partyID': 0,
              'leadID':this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '41',
              'comments': this.manuF__insur_perf.wher_sales_reduct_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '42',
              'Answer': this.manuF__insur_perf.conct_unit,
              'sectionID': '35',
              'partyID': 0,
              'leadID':this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          },
          {
              'FunctionID': '1',
              'questionID': '42',
              'comments': this.manuF__insur_perf.conct_unit_comment,
              'sectionID': '35',
              'partyID': 0,
              'leadID': this.cusID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          }
      ]
  
      for (let i = 0; i < financialPerformancearray.length; i++) {
          var res = i;
  
          if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){
             var datasertest =
              {
                  'Customerid': this.cusID,
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionid': financialPerformancearray[i].questionID,
                  'comments': financialPerformancearray[i].comments,
                  'CreateDate': finaltodayDate,
                  'updateddate': finaltodayDate,
                  'createdby': this.userID,
                  'updatedby': this.userID,
                  'control_ID': 'D'
              }
  
              this.apiservice.saveComments(datasertest).then( (resp:any)=> {
                  console.log(resp);
              }, function (error) {
                  console.log(error);
              })
          }

          if(financialPerformancearray[i].questionID == '39' &&  financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='40' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='41' && financialPerformancearray[i].comments || financialPerformancearray[i].questionID=='42' && financialPerformancearray[i].comments){

              if(financialPerformancearray[i].questionID == '39'){
this.newquestionid='107'
              }else  if(financialPerformancearray[i].questionID == '40'){
                  this.newquestionid='108'
              }else  if(financialPerformancearray[i].questionID == '41'){
                  this.newquestionid='109'
              }else  if(financialPerformancearray[i].questionID == '42'){
                  this.newquestionid='110'
              }else{
                  this.newquestionid=financialPerformancearray[i].questionID
              }





              var datasertest1 =
              {
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionID': this.newquestionid,
                  'Answer': financialPerformancearray[i].comments,
                  'sectionID': financialPerformancearray[i].sectionID,
                  'partyID': 0,
                  'leadID': financialPerformancearray[i].leadID,
                  'branchid': this.BranchID,
                  'userid': this.userID,
                  'createdDate': finaltodayDate,
                  'catagoryPK1': 0
              }
              this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
                  // alert('inserted');
                  console.log(resp);
              }, function (resp) {
                  console.log(resp);
  
              });
              let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
             // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
              this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
                  console.log(resp);
              }, function (err) {
                  console.log(err);
              })
          }


          if( financialPerformancearray[i].Answer){
              var datasertest2 =
              {
                  'FunctionID': financialPerformancearray[i].FunctionID,
                  'questionID': financialPerformancearray[i].questionID,
                  'Answer': financialPerformancearray[i].Answer,
                  'sectionID': financialPerformancearray[i].sectionID,
                  'partyID': 0,
                  'leadID': financialPerformancearray[i].leadID,
                  'branchid': this.BranchID,
                  'userid': this.userID,
                  'createdDate': finaltodayDate,
                  'catagoryPK1': 0
              }
              this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
                  // alert('inserted');
                  console.log(resp);
              }, function (resp) {
                  console.log(resp);
  
              });
              let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '35', Status: 'A' };
             // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
              this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                  console.log(resp);
              }, function (err) {
                  console.log(err);
              })
          
         
      }
      if (financialPerformancearray.length - 1 == res) {
        this.AlertService.presentAlert("Alert","saved Successfully")
        return false;
      }
          }
      }


    }
  }


  
}

  
}








//Manufacturing ___Gentral Observational during visit 
searchkeyword(id){
  debugger
  var xyz={
    custId:id,
    BranchId:this.BranchID
  }
  this.apiservice.appsearch(xyz).then((resp:any)=>{
      debugger
    if(resp.data=='Invalid User'){
      this.AlertService.presentAlert("Alert","Invalid User")
    }else{
    this.gentral_observat_vist.official_name=resp.data[0].username
    }
  })
}
uvrManuf_gentral_observ_Submit(){
    debugger
  var finaltodayDate=new Date();

if(this.gentral_observat_vist.Disply_bankName==''){
  this.AlertService.presentAlert("Alert","Select Display of our Bank’s Name board is displayed")
}else if(this.gentral_observat_vist.whter_cus_ERV==''){
  this.AlertService.presentAlert("Alert","Please fill Whether the customer and his family are having our products, to improve the ERV")
}else if(this.gentral_observat_vist.specific_visit1==''){
  this.AlertService.presentAlert("Alert","Any specific mentioning about the  visit findings")
}else{
  var generalobservationarray = [
    {
        'FunctionID': '1',
        'questionID': '43',
        'Answer': this.gentral_observat_vist.Disply_bankName,
        'sectionID': '37',
        'partyID': 0,
        'leadID': this.cusID,
        'branchid': this.BranchID,
        'userid': this.userID,
        'createdDate': finaltodayDate,
        'catagoryPK1': 0
    },
    {
        'FunctionID': '1',
        'questionID': '44',
        'Answer': this.gentral_observat_vist.whter_cus_ERV,
        'sectionID': '37',
        'partyID': 0,
        'leadID': this.cusID,
        'branchid': this.BranchID,
        'userid': this.userID,
        'createdDate': finaltodayDate,
        'catagoryPK1': 0
    },
    {
        'FunctionID': '1',
        'questionID': '45',
        'Answer': this.gentral_observat_vist.specific_visit1,
        'sectionID': '37',
        'partyID': 0,
        'leadID': this.cusID,
        'branchid': this.BranchID,
        'userid': this.userID,
        'createdDate': finaltodayDate,
        'catagoryPK1': 0
    },
    {
        'FunctionID': '1',
        'questionID': '46',
        'Answer': this.gentral_observat_vist.official_staffID,
        'sectionID': '37',
        'partyID': 0,
        'leadID': this.cusID,
        'branchid': this.BranchID,
        'userid': this.userID,
        'createdDate': finaltodayDate,
        'catagoryPK1': 0
    },
    {
        'FunctionID': '1',
        'questionID': '47',
        'Answer': this.gentral_observat_vist.official_name,
        'sectionID': '37',
        'partyID': 0,
        'leadID': this.cusID,
        'branchid': this.BranchID,
        'userid': this.userID,
        'createdDate': finaltodayDate,
        'catagoryPK1': 0
    }
]

for (let i = 0; i < generalobservationarray.length; i++) {
    var res = i;


  var  datasertest =
    {
        'FunctionID': generalobservationarray[i].FunctionID,
        'questionID': generalobservationarray[i].questionID,
        'Answer': generalobservationarray[i].Answer,
        'sectionID': generalobservationarray[i].sectionID,
        'partyID': 0,
        'leadID': generalobservationarray[i].leadID,
        'branchid': this.BranchID,
        'userid': this.userID,
        'createdDate': finaltodayDate,
        'catagoryPK1': 0
    }
    this.apiservice.appformdetailinsert(datasertest).then( (resp:any)=> {
        debugger
        // alert('inserted');
        console.log(resp);
    }, function (resp) {
        console.log(resp);

    });
    let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '37', Status: 'A' };
    //let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
    this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
        debugger
        console.log(resp);
    }, function (err) {
        console.log(err);
    })
}
if (generalobservationarray.length > res) {
  this.AlertService.presentAlert("Alert","Saved Successfully")
    // alert("saved succesfully");

}
}




}



// Trading Optional 1 

uvrTrading_Opt1Submit(){
    debugger
  var finaltodayDate=new Date();
  if(this.trading_optn1_Data.loctn_unit==''){
    this.AlertService.presentAlert("Alert","Please fill Location of the unit")
}else if(this.trading_optn1_Data.distance_unit==''){
  this.AlertService.presentAlert("Alert","Please fill Distance of the unit from the branch")
}else if(this.trading_optn1_Data.locational_advant==''){
  this.AlertService.presentAlert("Alert","Please fill Locational advantages")
}else if(this.trading_optn1_Data.num_emp_wrk_unit==''){
  this.AlertService.presentAlert("Alert","Please fill No. of Employees working in unit/Trading place")
} else if(this.trading_optn1_Data.num_unit==''){
  this.AlertService.presentAlert("Alert","Please fill No. of Units")
}else{
  var aboutarrayunit = [
    {
        'FunctionID': '1',
        'questionID': '53',
        'Answer': this.trading_optn1_Data.loctn_unit,
        'sectionID': '39',
        'partyID': 0,
        'leadID': this.cusID,
        'branchid': this.BranchID,
        'userid': this.userID,
        'createdDate': finaltodayDate,
        'catagoryPK1': 0
    },
    {
        'FunctionID': '1',
        'questionID': '54',
        'Answer': this.trading_optn1_Data.distance_unit,
        'sectionID': '39',
        'partyID': 0,
        'leadID': this.cusID,
        'branchid': this.BranchID,
        'userid': this.userID,
        'createdDate': finaltodayDate,
        'catagoryPK1': 0
    },
    {
        'FunctionID': '1',
        'questionID': '55',
        'Answer': this.trading_optn1_Data.locational_advant,
        'sectionID': '39',
        'partyID': 0,
        'leadID': this.cusID,
        'branchid': this.BranchID,
        'userid': this.userID,
        'createdDate': finaltodayDate,
        'catagoryPK1': 0
    },
    {
        'FunctionID': '1',
        'questionID': '56',
        'Answer': this.trading_optn1_Data.num_emp_wrk_unit,
        'sectionID': '39',
        'partyID': 0,
        'leadID': this.cusID,
        'branchid': this.BranchID,
        'userid': this.userID,
        'createdDate': finaltodayDate,
        'catagoryPK1': 0
    },
    {
        'FunctionID': '1',
        'questionID': '57',
        'Answer': this.trading_optn1_Data.num_unit,
        'sectionID': '39',
        'partyID': 0,
        'leadID': this.cusID,
        'branchid': this.BranchID,
        'userid': this.userID,
        'createdDate': finaltodayDate,
        'catagoryPK1': 0
    }
]
debugger
for (let i = 0; i <= aboutarrayunit.length; i++) {
    var res = i;
    var datasertest = {
        'FunctionID': aboutarrayunit[i].FunctionID,
        'questionID': aboutarrayunit[i].questionID,
        'Answer': aboutarrayunit[i].Answer,
        'sectionID': aboutarrayunit[i].sectionID,
        'partyID': 0,
        'leadID': aboutarrayunit[i].leadID,
        'branchid': this.BranchID,
        'userid': this.userID,
        'createdDate': finaltodayDate,
        'catagoryPK1': 0
    }

    this.apiservice.appformdetailinsert(datasertest).then( (resp:any)=> {
        // alert('inserted');

    }, function (resp) {
        console.log(resp);

    });
    let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '39', Status: 'A' };
   // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
    this.apiservice.saveMandValidation(getdataJSONtmp).then(function (resp) {
        console.log(resp);
    }, function (err) {
        console.log(err);
    })
    debugger
    console.log('7777777777', aboutarrayunit.length, res)
    if (aboutarrayunit.length - 1 == res) {
        // alert("saved succesfully");
        this.AlertService.presentAlert("Alert","Saved Successfully")

    }
}
}
}
// Trading Optional 2 
insurancedone(){
  this.getinsurancedone=this.trading_optn2_Data.Wher_bnk_clause
}
qisubmission1(){
  this.getqisubmission1=this.trading_optn2_Data.whdr_QIS_submission
}
uvrTrading_Opt2Submit(){
 debugger
 var finaltodayDate=new Date();
 if(this.trading_optn2_Data.dateofstock==''){
  this.AlertService.presentAlert("Alert","Please fill Date of stock/Book debt statement received")
  return false
 }else if(this.trading_optn2_Data.valueofstock==''){
  this.AlertService.presentAlert("Alert","Please fill Value of stock")
  return false
 }else if(this.trading_optn2_Data.receivable_OS==''){
  this.AlertService.presentAlert("Alert","Please fill Receivable O/S upto 180 days")
  return false
 }else if(this.trading_optn2_Data.receivable_beyond==''){
  this.AlertService.presentAlert("Alert","Please fill Receivables beyond 180 days")
  return false
 }else if(this.trading_optn2_Data.receivable_beyond_Expecteddate==''){
  this.AlertService.presentAlert("Alert","Please fill Expected date of Realization of receivable beyond 180 days")
  return false
 }else if(this.trading_optn2_Data.date_insurance_stock==''){
  this.AlertService.presentAlert("Alert","Please fill Date of insurance of stock")
  return false
  
 }else if(this.trading_optn2_Data.amnt_insur==''){
  this.AlertService.presentAlert("Alert","Please fill Amount of insurance")
  return false
 }else if(this.trading_optn2_Data.due_date_insurance==''){
  this.AlertService.presentAlert("Alert","Please fill Due date of the insurance")
  return false
 }else if(this.trading_optn2_Data.Wher_bnk_clause==''){
  this.AlertService.presentAlert("Alert","select Whether insurance done comprehensively with  Bank clause")
  return false
 }else if(this.trading_optn2_Data.Wher_bnk_clause=='Yes'){
   if(this.trading_optn2_Data.bnk_clause_show==''){
    this.AlertService.presentAlert("Alert","Please fill Comments")
    return false
   }else if(this.trading_optn2_Data.name_insur_cmpny==''){
    this.AlertService.presentAlert("Alert","Please fill Name of insurance Company")
    return false
   }else if(this.trading_optn2_Data.balance_prev_month_end==''){
    this.AlertService.presentAlert("Alert","Please fill Balance of the a/c as on previous month end")
    return false
   }else if(this.trading_optn2_Data.whdr_QIS_submission==''){
    this.AlertService.presentAlert("Alert","select Whether the a/c is eligible for QIS submission")
    return false
   }else if(this.trading_optn2_Data.whdr_QIS_submission=='Yes'){
     if(this.trading_optn2_Data.whdr_QIS_submission_comment==''){
      this.AlertService.presentAlert("Alert","Please fill Whether the a/c is eligible for QIS submission comment")
      return false
     }else{
        var stockinsurancearray = [
            {
                'FunctionID': '1',
                'questionID': '27',
                'Answer': this.trading_optn2_Data.dateofstock,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '28',
                'Answer': this.trading_optn2_Data.receivable_OS,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '29',
                'Answer':this.trading_optn2_Data. receivable_beyond,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '30',
                'Answer': this.trading_optn2_Data.receivable_beyond_Expecteddate,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '31',
                'Answer': this.trading_optn2_Data.date_insurance_stock,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '32',
                'Answer': this.trading_optn2_Data.amnt_insur,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '33',
                'Answer': this.trading_optn2_Data.due_date_insurance,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '34',
                'Answer': this.trading_optn2_Data.Wher_bnk_clause,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '34',
                'comments': this.trading_optn2_Data.bnk_clause_show,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '35',
                'Answer': this.trading_optn2_Data.name_insur_cmpny   ,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
    
            {
                'FunctionID': '1',
                'questionID': '36',
                'Answer': this.trading_optn2_Data.balance_prev_month_end ,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '37',
                'Answer': this.trading_optn2_Data.whdr_QIS_submission ,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '37',
                'comments': this.trading_optn2_Data.whdr_QIS_submission_comment,
                'sectionID': '36',
                'partyID': 0,
                'leadID':this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '73',
                'Answer': this.trading_optn2_Data.valueofstock,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
    
        ]

    for (let i = 0; i < stockinsurancearray.length; i++) {
        var res = i;

        if (stockinsurancearray[i].questionID == '34' && stockinsurancearray[i].comments || stockinsurancearray[i].questionID == '37' && stockinsurancearray[i].comments) {
           var datasertest =
            {
                'Customerid': this.cusID,
                'FunctionID': stockinsurancearray[i].FunctionID,
                'questionid': stockinsurancearray[i].questionID,
                'comments': stockinsurancearray[i].comments,
                'CreateDate': finaltodayDate,
                'updateddate': finaltodayDate,
                'createdby': this.userID,
                'updatedby': this.userID,
                'control_ID': 'D'




            }
            this.apiservice.saveComments(datasertest).then( (resp:any)=> {
                // alert('inserted');
                console.log(resp);

            }, function (resp) {
                console.log(resp);

            });
        }

        if (stockinsurancearray[i].questionID == '34' && stockinsurancearray[i].comments || stockinsurancearray[i].questionID == '37' && stockinsurancearray[i].comments) {

            if (stockinsurancearray[i].questionID == '34'){
this.newquestionid='111'
            }else if (stockinsurancearray[i].questionID == '37'){
                this.newquestionid='112'
            }else{
                this.newquestionid=stockinsurancearray[i].questionID
            }



           var datasertest1 =
            {
                'FunctionID': stockinsurancearray[i].FunctionID,
                'questionID': this.newquestionid,
                'Answer': stockinsurancearray[i].comments,
                'sectionID': stockinsurancearray[i].sectionID,
                'partyID': 0,
                'leadID': stockinsurancearray[i].leadID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
            this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
                debugger
                // alert('inserted');
                console.log(resp);
               // console.log(this.responseArray);
              // this.responseArray.push(resp);
               // console.log(this.responseArray.length);
                // if(stockinsurancearray[i] ){
                //     alert("saved successfully");
                // }



            }, function (resp) {
                console.log(resp);

            });

            let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '36', Status: 'A' };
            //let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
            this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                console.log(resp);
            }, function (err) {
                console.log(err);
            }) 
        }


        if (stockinsurancearray[i].Answer) {
           var datasertest2 =
            {
                'FunctionID': stockinsurancearray[i].FunctionID,
                'questionID': stockinsurancearray[i].questionID,
                'Answer': stockinsurancearray[i].Answer,
                'sectionID': stockinsurancearray[i].sectionID,
                'partyID': 0,
                'leadID': stockinsurancearray[i].leadID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
            this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
                // alert('inserted');
                debugger
                console.log(resp);
               // console.log(this.responseArray);
               // this.responseArray.push(resp);
             //   console.log(this.responseArray.length);
                // if(stockinsurancearray[i] ){
                //     alert("saved successfully");
                // }



            }, function (resp) {
                console.log(resp);

            });

            let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '36', Status: 'A' };
           // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
            this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                console.log(resp);
            }, function (err) {
                console.log(err);
            })
        }

        if (stockinsurancearray.length - 1 == res) {
          this.AlertService.presentAlert("Alert","Saved Successfully")
            // alert("saved succesfully");

        }





    }
     }
   }else{
    var stockinsurancearray = [
        {
            'FunctionID': '1',
            'questionID': '27',
            'Answer': this.trading_optn2_Data.dateofstock,
            'sectionID': '36',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '28',
            'Answer': this.trading_optn2_Data.receivable_OS,
            'sectionID': '36',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '29',
            'Answer':this.trading_optn2_Data. receivable_beyond,
            'sectionID': '36',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '30',
            'Answer': this.trading_optn2_Data.receivable_beyond_Expecteddate,
            'sectionID': '36',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '31',
            'Answer': this.trading_optn2_Data.date_insurance_stock,
            'sectionID': '36',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '32',
            'Answer': this.trading_optn2_Data.amnt_insur,
            'sectionID': '36',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '33',
            'Answer': this.trading_optn2_Data.due_date_insurance,
            'sectionID': '36',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '34',
            'Answer': this.trading_optn2_Data.Wher_bnk_clause,
            'sectionID': '36',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '34',
            'comments': this.trading_optn2_Data.bnk_clause_show,
            'sectionID': '36',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '35',
            'Answer': this.trading_optn2_Data.name_insur_cmpny   ,
            'sectionID': '36',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },

        {
            'FunctionID': '1',
            'questionID': '36',
            'Answer': this.trading_optn2_Data.balance_prev_month_end ,
            'sectionID': '36',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '37',
            'Answer': this.trading_optn2_Data.whdr_QIS_submission ,
            'sectionID': '36',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '37',
            'comments': this.trading_optn2_Data.whdr_QIS_submission_comment,
            'sectionID': '36',
            'partyID': 0,
            'leadID':this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        },
        {
            'FunctionID': '1',
            'questionID': '73',
            'Answer': this.trading_optn2_Data.valueofstock,
            'sectionID': '36',
            'partyID': 0,
            'leadID': this.cusID,
            'branchid': this.BranchID,
            'userid': this.userID,
            'createdDate': finaltodayDate,
            'catagoryPK1': 0
        }

    ]

  for (let i = 0; i < stockinsurancearray.length; i++) {
      var res = i;

      if (stockinsurancearray[i].questionID == '34' && stockinsurancearray[i].comments || stockinsurancearray[i].questionID == '37' && stockinsurancearray[i].comments) {
         var datasertest =
          {
              'Customerid': this.cusID,
              'FunctionID': stockinsurancearray[i].FunctionID,
              'questionid': stockinsurancearray[i].questionID,
              'comments': stockinsurancearray[i].comments,
              'CreateDate': finaltodayDate,
              'updateddate': finaltodayDate,
              'createdby': this.userID,
              'updatedby': this.userID,
              'control_ID': 'D'




          }
          this.apiservice.saveComments(datasertest).then( (resp:any)=> {
              // alert('inserted');
              console.log(resp);

          }, function (resp) {
              console.log(resp);

          });
      }

      if (stockinsurancearray[i].questionID == '34' && stockinsurancearray[i].comments || stockinsurancearray[i].questionID == '37' && stockinsurancearray[i].comments) {

          if (stockinsurancearray[i].questionID == '34'){
this.newquestionid='111'
          }else if (stockinsurancearray[i].questionID == '37'){
              this.newquestionid='112'
          }else{
              this.newquestionid=stockinsurancearray[i].questionID
          }



         var datasertest1 =
          {
              'FunctionID': stockinsurancearray[i].FunctionID,
              'questionID': this.newquestionid,
              'Answer': stockinsurancearray[i].comments,
              'sectionID': stockinsurancearray[i].sectionID,
              'partyID': 0,
              'leadID': stockinsurancearray[i].leadID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          }
          this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
              // alert('inserted');
              debugger
              console.log(resp);
             // console.log(this.responseArray);
           //  this.responseArray.push(resp);
             // console.log(this.responseArray.length);
              // if(stockinsurancearray[i] ){
              //     alert("saved successfully");
              // }



          }, function (resp) {
              console.log(resp);

          });

          let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '36', Status: 'A' };
          //let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
          this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
              console.log(resp);
          }, function (err) {
              console.log(err);
          }) 
      }


      if (stockinsurancearray[i].Answer) {
         var datasertest2 =
          {
              'FunctionID': stockinsurancearray[i].FunctionID,
              'questionID': stockinsurancearray[i].questionID,
              'Answer': stockinsurancearray[i].Answer,
              'sectionID': stockinsurancearray[i].sectionID,
              'partyID': 0,
              'leadID': stockinsurancearray[i].leadID,
              'branchid': this.BranchID,
              'userid': this.userID,
              'createdDate': finaltodayDate,
              'catagoryPK1': 0
          }
          this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
              // alert('inserted');
              debugger
              console.log(resp);
             // console.log(this.responseArray);
              //this.responseArray.push(resp);
           //   console.log(this.responseArray.length);
              // if(stockinsurancearray[i] ){
              //     alert("saved successfully");
              // }



          }, function (resp) {
              console.log(resp);

          });

          let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '36', Status: 'A' };
         // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
          this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
              console.log(resp);
          }, function (err) {
              console.log(err);
          })
      }

      if (stockinsurancearray.length - 1 == res) {
        this.AlertService.presentAlert("Alert","Saved Successfully")
          // alert("saved succesfully");

      }





  }
   }
 } else{
  if(this.trading_optn2_Data.name_insur_cmpny==''){
    this.AlertService.presentAlert("Alert","Please fill Name of insurance Company")
    return false
   }else if(this.trading_optn2_Data.balance_prev_month_end==''){
    this.AlertService.presentAlert("Alert","Please fill Balance of the a/c as on previous month end")
    return false
   }else if(this.trading_optn2_Data.whdr_QIS_submission==''){
    this.AlertService.presentAlert("Alert","select Whether the a/c is eligible for QIS submission")
    return false
   }else if(this.trading_optn2_Data.whdr_QIS_submission=='Yes'){
     if(this.trading_optn2_Data.whdr_QIS_submission_comment==''){
      this.AlertService.presentAlert("Alert","Please fill Whether the a/c is eligible for QIS submission comment")
      return false
     }else{
        var stockinsurancearray = [
            {
                'FunctionID': '1',
                'questionID': '27',
                'Answer': this.trading_optn2_Data.dateofstock,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '28',
                'Answer': this.trading_optn2_Data.receivable_OS,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '29',
                'Answer':this.trading_optn2_Data. receivable_beyond,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '30',
                'Answer': this.trading_optn2_Data.receivable_beyond_Expecteddate,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '31',
                'Answer': this.trading_optn2_Data.date_insurance_stock,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '32',
                'Answer': this.trading_optn2_Data.amnt_insur,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '33',
                'Answer': this.trading_optn2_Data.due_date_insurance,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '34',
                'Answer': this.trading_optn2_Data.Wher_bnk_clause,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '34',
                'comments': this.trading_optn2_Data.bnk_clause_show,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '35',
                'Answer': this.trading_optn2_Data.name_insur_cmpny   ,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
    
            {
                'FunctionID': '1',
                'questionID': '36',
                'Answer': this.trading_optn2_Data.balance_prev_month_end ,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '37',
                'Answer': this.trading_optn2_Data.whdr_QIS_submission ,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '37',
                'comments': this.trading_optn2_Data.whdr_QIS_submission_comment,
                'sectionID': '36',
                'partyID': 0,
                'leadID':this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '73',
                'Answer': this.trading_optn2_Data.valueofstock,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
    
        ]

    for (let i = 0; i < stockinsurancearray.length; i++) {
        var res = i;

        if (stockinsurancearray[i].questionID == '34' && stockinsurancearray[i].comments || stockinsurancearray[i].questionID == '37' && stockinsurancearray[i].comments) {
           var datasertest =
            {
                'Customerid': this.cusID,
                'FunctionID': stockinsurancearray[i].FunctionID,
                'questionid': stockinsurancearray[i].questionID,
                'comments': stockinsurancearray[i].comments,
                'CreateDate': finaltodayDate,
                'updateddate': finaltodayDate,
                'createdby': this.userID,
                'updatedby': this.userID,
                'control_ID': 'D'




            }
            this.apiservice.saveComments(datasertest).then( (resp:any)=> {
                // alert('inserted');
                console.log(resp);

            }, function (resp) {
                console.log(resp);

            });
        }

        if (stockinsurancearray[i].questionID == '34' && stockinsurancearray[i].comments || stockinsurancearray[i].questionID == '37' && stockinsurancearray[i].comments) {

            if (stockinsurancearray[i].questionID == '34'){
this.newquestionid='111'
            }else if (stockinsurancearray[i].questionID == '37'){
                this.newquestionid='112'
            }else{
                this.newquestionid=stockinsurancearray[i].questionID
            }



           var datasertest1 =
            {
                'FunctionID': stockinsurancearray[i].FunctionID,
                'questionID': this.newquestionid,
                'Answer': stockinsurancearray[i].comments,
                'sectionID': stockinsurancearray[i].sectionID,
                'partyID': 0,
                'leadID': stockinsurancearray[i].leadID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
            this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
                // alert('inserted');
                console.log(resp);
               // console.log(this.responseArray);
               //this.responseArray.push(resp);
               // console.log(this.responseArray.length);
                // if(stockinsurancearray[i] ){
                //     alert("saved successfully");
                // }



            }, function (resp) {
                console.log(resp);

            });

            let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '36', Status: 'A' };
            //let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
            this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                console.log(resp);
            }, function (err) {
                console.log(err);
            }) 
        }


        if (stockinsurancearray[i].Answer) {
           var datasertest2 =
            {
                'FunctionID': stockinsurancearray[i].FunctionID,
                'questionID': stockinsurancearray[i].questionID,
                'Answer': stockinsurancearray[i].Answer,
                'sectionID': stockinsurancearray[i].sectionID,
                'partyID': 0,
                'leadID': stockinsurancearray[i].leadID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
            this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
                // alert('inserted');
                console.log(resp);
               // console.log(this.responseArray);
               // this.responseArray.push(resp);
             //   console.log(this.responseArray.length);
                // if(stockinsurancearray[i] ){
                //     alert("saved successfully");
                // }



            }, function (resp) {
                console.log(resp);

            });

            let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '36', Status: 'A' };
           // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
            this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                console.log(resp);
            }, function (err) {
                console.log(err);
            })
        }

        if (stockinsurancearray.length - 1 == res) {
          this.AlertService.presentAlert("Alert","Saved Successfully")
            // alert("saved succesfully");

        }





    } 
     }
    }else{
        var stockinsurancearray = [
            {
                'FunctionID': '1',
                'questionID': '27',
                'Answer': this.trading_optn2_Data.dateofstock,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '28',
                'Answer': this.trading_optn2_Data.receivable_OS,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '29',
                'Answer':this.trading_optn2_Data. receivable_beyond,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '30',
                'Answer': this.trading_optn2_Data.receivable_beyond_Expecteddate,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '31',
                'Answer': this.trading_optn2_Data.date_insurance_stock,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '32',
                'Answer': this.trading_optn2_Data.amnt_insur,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '33',
                'Answer': this.trading_optn2_Data.due_date_insurance,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '34',
                'Answer': this.trading_optn2_Data.Wher_bnk_clause,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '34',
                'comments': this.trading_optn2_Data.bnk_clause_show,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '35',
                'Answer': this.trading_optn2_Data.name_insur_cmpny   ,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
    
            {
                'FunctionID': '1',
                'questionID': '36',
                'Answer': this.trading_optn2_Data.balance_prev_month_end ,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '37',
                'Answer': this.trading_optn2_Data.whdr_QIS_submission ,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '37',
                'comments': this.trading_optn2_Data.whdr_QIS_submission_comment,
                'sectionID': '36',
                'partyID': 0,
                'leadID':this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            },
            {
                'FunctionID': '1',
                'questionID': '73',
                'Answer': this.trading_optn2_Data.valueofstock,
                'sectionID': '36',
                'partyID': 0,
                'leadID': this.cusID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
    
        ]

    for (let i = 0; i < stockinsurancearray.length; i++) {
        var res = i;

        if (stockinsurancearray[i].questionID == '34' && stockinsurancearray[i].comments || stockinsurancearray[i].questionID == '37' && stockinsurancearray[i].comments) {
           var datasertest =
            {
                'Customerid': this.cusID,
                'FunctionID': stockinsurancearray[i].FunctionID,
                'questionid': stockinsurancearray[i].questionID,
                'comments': stockinsurancearray[i].comments,
                'CreateDate': finaltodayDate,
                'updateddate': finaltodayDate,
                'createdby': this.userID,
                'updatedby': this.userID,
                'control_ID': 'D'




            }
            this.apiservice.saveComments(datasertest).then( (resp:any)=> {
                // alert('inserted');
                console.log(resp);

            }, function (resp) {
                console.log(resp);

            });
        }

        if (stockinsurancearray[i].questionID == '34' && stockinsurancearray[i].comments || stockinsurancearray[i].questionID == '37' && stockinsurancearray[i].comments) {

            if (stockinsurancearray[i].questionID == '34'){
this.newquestionid='111'
            }else if (stockinsurancearray[i].questionID == '37'){
                this.newquestionid='112'
            }else{
                this.newquestionid=stockinsurancearray[i].questionID
            }



           var datasertest1 =
            {
                'FunctionID': stockinsurancearray[i].FunctionID,
                'questionID': this.newquestionid,
                'Answer': stockinsurancearray[i].comments,
                'sectionID': stockinsurancearray[i].sectionID,
                'partyID': 0,
                'leadID': stockinsurancearray[i].leadID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
            this.apiservice.appformdetailinsert(datasertest1).then( (resp:any) =>{
                // alert('inserted');
                console.log(resp);
               // console.log(this.responseArray);
              // this.responseArray.push(resp);
               // console.log(this.responseArray.length);
                // if(stockinsurancearray[i] ){
                //     alert("saved successfully");
                // }



            }, function (resp) {
                console.log(resp);

            });

            let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '36', Status: 'A' };
            //let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
            this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                console.log(resp);
            }, function (err) {
                console.log(err);
            }) 
        }


        if (stockinsurancearray[i].Answer) {
           var datasertest2 =
            {
                'FunctionID': stockinsurancearray[i].FunctionID,
                'questionID': stockinsurancearray[i].questionID,
                'Answer': stockinsurancearray[i].Answer,
                'sectionID': stockinsurancearray[i].sectionID,
                'partyID': 0,
                'leadID': stockinsurancearray[i].leadID,
                'branchid': this.BranchID,
                'userid': this.userID,
                'createdDate': finaltodayDate,
                'catagoryPK1': 0
            }
            this.apiservice.appformdetailinsert(datasertest2).then( (resp:any)=> {
                // alert('inserted');
                debugger
                console.log(resp);
               // console.log(this.responseArray);
               // this.responseArray.push(resp);
             //   console.log(this.responseArray.length);
                // if(stockinsurancearray[i] ){
                //     alert("saved successfully");
                // }



            }, function (resp) {
                console.log(resp);

            });

            let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '36', Status: 'A' };
           // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
            this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any)=> {
                console.log(resp);
            }, function (err) {
                console.log(err);
            })
        }

        if (stockinsurancearray.length - 1 == res) {
          this.AlertService.presentAlert("Alert","Saved Successfully")
            // alert("saved succesfully");

        }





    }
    }
 }



}

// trading_optn3_Data


uvrtrading_opt3Submit(){
if(this.trading_optn3_Data.sale_projt_FY !=""){
  let answer1 = {
    "FunctionID": "1",
    "questionID": "39",
    "Answer": this.trading_optn3_Data.sale_projt_FY,
    "sectionID": this.sectionID,
    "partyID": 0,
    "leadID":this.cusID,
    "branchid": this.BranchID,
    "userid": this.userID,
    "createdDate": this.date,
    "catagoryPK1": 0
  }
  this.BankingApiInsert(answer1);
}
if(this.trading_optn3_Data.curnt_year_GST !=""){
  let answer1 = {
    "FunctionID": "1",
    "questionID": "40",
    "Answer": this.trading_optn3_Data.curnt_year_GST,
    "sectionID": this.sectionID,
    "partyID": 0,
    "leadID": this.cusID,
    "branchid": this.BranchID,
    "userid": this.userID,
    "createdDate": this.date,
    "catagoryPK1": 0
  }
  this.BankingApiInsert(answer1);
}if(this.trading_optn3_Data.wher_sales_reduc_notic !=""){
  let answer1 = {
    "FunctionID": "1",
    "questionID": "41",
    "Answer": this.trading_optn3_Data.wher_sales_reduc_notic,
    "sectionID": this.sectionID,
    "partyID": 0,
    "leadID": this.cusID,
    "branchid": this.BranchID,
    "userid": this.userID,
    "createdDate": this.date,
    "catagoryPK1": 0
  }
  this.BankingApiInsert(answer1);
}if(this.trading_optn3_Data.condct_firm_r_unit !=""){
  let answer1 = {
    "FunctionID": "1",
    "questionID": "42",
    "Answer": this.trading_optn3_Data.condct_firm_r_unit,
    "sectionID": this.sectionID,
    "partyID": 0,
    "leadID": this.cusID,
    "branchid": this.BranchID,
    "userid": this.userID,
    "createdDate": this.date,
    "catagoryPK1": 0
  }
  this.BankingApiInsert(answer1);
}
// "sale_projt_FY":"","curnt_year_GST":"","wher_sales_reduc_notic":"","condct_firm_r_unit":""
if(this.trading_optn3_Data.condct_firm_r_unit != '' || this.trading_optn3_Data.condct_firm_r_unit != ''
  || this.trading_optn3_Data.condct_firm_r_unit != '' || this.trading_optn3_Data.condct_firm_r_unit != ''){
    this.toast.presentToast('Saved')
  }
}


// uvrtrading_opt4

// uvrtrading_opt4Submit(){
// if(this.trading_optn4_Data.Display_bnk_name != ''){
//     let answer1 = {
//       "FunctionID": "1",
//       "questionID": "43",
//       "Answer": this.trading_optn4_Data.Display_bnk_name,
//       "sectionID": this.sectionID,
//       "partyID": 0,
//       "leadID": this.cusID,
//       "branchid": this.BranchID,
//     "userid": this.userID,
//       "createdDate": this.date,
//       "catagoryPK1": 0
//     }
//     this.BankingApiInsert(answer1);
// }
// if(this.trading_optn4_Data.cus_family_ERV != ''){
//     let answer1 = {
//       "FunctionID": "1",
//       "questionID": "44",
//       "Answer": this.trading_optn4_Data.cus_family_ERV,
//       "sectionID": this.sectionID,
//       "partyID": 0,
//       "leadID": this.cusID,
//       "branchid": this.BranchID,
//     "userid": this.userID,
//       "createdDate": this.date,
//       "catagoryPK1": 0
//     }
//     this.BankingApiInsert(answer1);
// }if(this.trading_optn4_Data.specific_visit_find != ''){
//     let answer1 = {
//       "FunctionID": "1",
//       "questionID": "45",
//       "Answer": this.trading_optn4_Data.specific_visit_find,
//       "sectionID": this.sectionID,
//       "partyID": 0,
//       "leadID": this.cusID,
//       "branchid": this.BranchID,
//     "userid": this.userID,
//       "createdDate": this.date,
//       "catagoryPK1": 0
//     }
//     this.BankingApiInsert(answer1);
  
// }if(this.trading_optn4_Data.visit_staff_id != ''){
  
//     let answer1 = {
//       "FunctionID": "1",
//       "questionID": "46",
//       "Answer": this.trading_optn4_Data.visit_staff_id,
//       "sectionID": this.sectionID,
//       "partyID": 0,
//       "leadID": this.cusID,
//       "branchid": this.BranchID,
//       "userid": this.userID,
//       "createdDate": this.date,
//       "catagoryPK1": 0
//     }
//     this.BankingApiInsert(answer1);
  
// }if(this.trading_optn4_Data.visit_official_name != ''){
  
//     let answer1 = {
//       "FunctionID": "1",
//       "questionID": "47",
//       "Answer": this.trading_optn4_Data.visit_official_name,
//       "sectionID": this.sectionID,
//       "partyID": 0,
//       "leadID": this.cusID,
//       "branchid": this.BranchID,
//     "userid": this.userID,
//       "createdDate": this.date,
//       "catagoryPK1": 0
//     }
//     this.BankingApiInsert(answer1);
  
// }
// // "Display_bnk_name":"","cus_family_ERV":"","specific_visit_find":"","visit_staff_id":"","visit_official_name":""
// if(this.trading_optn4_Data.Display_bnk_name != '' || this.trading_optn4_Data.cus_family_ERV != ''
// || this.trading_optn4_Data.specific_visit_find != '' || this.trading_optn4_Data.visit_staff_id != ''
// || this.trading_optn4_Data.visit_official_name != '' ){
//   this.toast.presentToast('Saved')
// }
// }

// UVR Other option 1
// Othr_optn1_Data = {
//   "sales_projt_FY":"","curnt_year_GST":"","wher_sales_reduc_notic":"","conct_firm_unit":""
// }
// uvrOthr_opt1Submit(){
// if(this.Othr_optn1_Data.sales_projt_FY != ''){
//   let answer1 = {
//     "FunctionID": "1",
//     "questionID": "39",
//     "Answer": this.Othr_optn1_Data.sales_projt_FY,
//     "sectionID": this.sectionID,
//     "partyID": 0,
//     "leadID": this.cusID,
//     "branchid": this.BranchID,
//     "userid": this.userID,
//     "createdDate": this.date,
//     "catagoryPK1": 0
//   }
//   this.BankingApiInsert(answer1);
// }
// if(this.Othr_optn1_Data.curnt_year_GST != ''){
//   let answer1 = {
//     "FunctionID": "1",
//     "questionID": "40",
//     "Answer": this.Othr_optn1_Data.curnt_year_GST,
//     "sectionID": this.sectionID,
//     "partyID": 0,
//     "leadID": this.cusID,
//     "branchid": this.BranchID,
//     "userid": this.userID,
//     "createdDate": this.date,
//     "catagoryPK1": 0
//   }
//   this.BankingApiInsert(answer1);
// }
// if(this.Othr_optn1_Data.wher_sales_reduc_notic != ''){
//   let answer1 = {
//     "FunctionID": "1",
//     "questionID": "41",
//     "Answer": this.Othr_optn1_Data.wher_sales_reduc_notic,
//     "sectionID": this.sectionID,
//     "partyID": 0,
//     "leadID": this.cusID,
//     "branchid": this.BranchID,
//     "userid": this.userID,
//     "createdDate": this.date,
//     "catagoryPK1": 0
//   }
//   this.BankingApiInsert(answer1);
// }
// if(this.Othr_optn1_Data.conct_firm_unit != ''){
//   let answer1 = {
//     "FunctionID": "1",
//     "questionID": "42",
//     "Answer": this.Othr_optn1_Data.conct_firm_unit,
//     "sectionID": this.sectionID,
//     "partyID": 0,
//     "leadID": this.cusID,
//     "branchid": this.BranchID,
//     "userid": this.userID,
//     "createdDate": this.date,
//     "catagoryPK1": 0
//   }
//   this.BankingApiInsert(answer1);
// }

// if(this.Othr_optn1_Data.sales_projt_FY != '' || this.Othr_optn1_Data.curnt_year_GST != '' ||
// this.Othr_optn1_Data.wher_sales_reduc_notic != '' || this.Othr_optn1_Data.conct_firm_unit != ''){
//   this.toast.presentToast('Saved');
// }

// }

//OtherData oPTION 2

// uvrOthr_opt2Submit(){
//   if(this.Othr_optn2_Data.Display_bnk_name != ''){
//     let answer1 = {
//       "FunctionID": "1",
//       "questionID": "43",
//       "Answer": this.Othr_optn2_Data.Display_bnk_name,
//       "sectionID": this.sectionID,
//       "partyID": 0,
//       "leadID": this.cusID,
//       "branchid": this.BranchID,
//     "userid": this.userID,
//       "createdDate":this.date,
//       "catagoryPK1": 0
//     }
//     this.BankingApiInsert(answer1);
//   }
//   if(this.Othr_optn2_Data.cus_family_ERV != ''){
//     let answer1 = {
//       "FunctionID": "1",
//       "questionID": "44",
//       "Answer": this.Othr_optn2_Data.cus_family_ERV,
//       "sectionID": this.sectionID,
//       "partyID": 0,
//       "leadID": this.cusID,
//       "branchid": this.BranchID,
//       "userid": this.userID,
//       "createdDate": this.date,
//       "catagoryPK1": 0
//     }
//     this.BankingApiInsert(answer1);
//   }
//   if(this.Othr_optn2_Data.specific_visit_find != ''){
//     let answer1 = {
//       "FunctionID": "1",
//       "questionID": "45",
//       "Answer": this.Othr_optn2_Data.specific_visit_find,
//       "sectionID": this.sectionID,
//       "partyID": 0,
//       "leadID": this.cusID,
//       "branchid": this.BranchID,
//     "userid": this.userID,
//       "createdDate": this.date,
//       "catagoryPK1": 0
//     }
//     this.BankingApiInsert(answer1);
//   }
//   if(this.Othr_optn2_Data.visit_staff_id != ''){
//     let answer1 = {
//       "FunctionID": "1",
//       "questionID": "46",
//       "Answer": this.Othr_optn2_Data.visit_staff_id,
//       "sectionID": this.sectionID,
//       "partyID": 0,
//       "leadID": this.cusID,
//       "branchid": this.BranchID,
//     "userid": this.userID,
//       "createdDate": this.date,
//       "catagoryPK1": 0
//     }
//     this.BankingApiInsert(answer1);
//   }
//   if(this.Othr_optn2_Data.visit_official_name != ''){
//     let answer1 = {
//       "FunctionID": "1",
//       "questionID": "47",
//       "Answer": this.Othr_optn2_Data.visit_official_name,
//       "sectionID": this.sectionID,
//       "partyID": 0,
//       "leadID": this.cusID,
//       "branchid": this.BranchID,
//     "userid": this.userID,
//       "createdDate": this.date,
//       "catagoryPK1": 0
//     }
//     this.BankingApiInsert(answer1);
//   }

// if(this.Othr_optn2_Data.Display_bnk_name != '' || this.Othr_optn2_Data.cus_family_ERV != '' ||
// this.Othr_optn2_Data.specific_visit_find != '' || this.Othr_optn2_Data.visit_staff_id != '' ||
// this.Othr_optn2_Data.visit_official_name != '' ){
//   this.toast.presentToast('Saved')
// }
// }

BankingApiInsert(insertData){
  this.apiservice.uvrPostBanking(insertData).then(res=>{
    console.log(res);
  })
}

PostApishowinput(insertData){
  this.apiservice.uvrShowinputPost(insertData).then(res=>{
    console.log(res);
  })
}

async selectSource(cameraNum,questionid) {
debugger
  const actionSheet = await this.actionSheetController.create({
    buttons: [{
      text: 'Use Library',

      handler: () => {
        this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY,cameraNum,questionid)
      }
    }, {
      text: 'Use Capture',

      handler: () => {
        this.getPicture(this.camera.PictureSourceType.CAMERA,cameraNum,questionid)
      }
    }, {
      text: 'Cancel',
      role: 'Cancel',

    },]
  });
  await actionSheet.present();
}

getPicture(sourceType: PictureSourceType,cameraNum:string,questionid:any) {
debugger
  const options: CameraOptions = {
    quality: 20,
    // targetWidth: 400,
    // targetHeight: 400,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
   
    // allowEdit:true,
    sourceType: sourceType,
    cameraDirection: 0,
    correctOrientation: true
  };
if(cameraNum == '1'){
  this.questionid48=questionid
  this.camera.getPicture(options).then((imageData:any) => {
      debugger
    console.log(imageData);
    // this.base64.encodeFile(imageData).then((base64File: string) => {
    //     debugger
    //     this.FirstPhoto = `data:image/jpeg;base64,${imageData}`;
    //     this.FirstPhoto_base64 = `data:image/jpeg;base64,${base64File}`;
    //     this.photoArray.push({Photo1:this.FirstPhoto_base64});
    //     console.log(base64File);
    //   }, (err) => {
    //     console.log(err);
    //   });
    this.FirstPhoto = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
    this.FirstPhoto_base64 = `data:image/jpeg;base64,${imageData}`.toString();
    this.photoArray[0]={Photo1:this.FirstPhoto};
    });
}if(cameraNum == '2'){
  this.questionid49=questionid
  this.camera.getPicture(options).then((imageData:any) => {
      debugger
    console.log(imageData);
    // this.base64.encodeFile(imageData).then((base64File: string) => {
    //     debugger
    //     this.SecondPhoto = `data:image/jpeg;base64,${imageData}`;
    //     this.SecondPhoto_base64 = `data:image/jpeg;base64,${base64File}`;
    //     this.photoArray.push({Photo2:this.SecondPhoto_base64});
    //     console.log(base64File);
    //   }, (err) => {
    //     console.log(err);
    //   });
    this.SecondPhoto = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
    this.SecondPhoto_base64 = `data:image/jpeg;base64,${imageData}`;
    this.photoArray[1]={Photo2:this.SecondPhoto_base64};
    });
}if(cameraNum == '3'){
  this.questionid50=questionid
  this.camera.getPicture(options).then((imageData:any) => {
    console.log(imageData);
    debugger
    // this.base64.encodeFile(imageData).then((base64File: string) => {
    //     debugger
    //     this.ThirdPhoto = `data:image/jpeg;base64,${imageData}`;
    //     this.ThirdPhoto_base64 = `data:image/jpeg;base64,${base64File}`;
    //     this.photoArray.push({Photo3:this.ThirdPhoto_base64});
    //     console.log(base64File);
    //   }, (err) => {
    //     console.log(err);
    //   });
    this.ThirdPhoto = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
    this.ThirdPhoto_base64 = `data:image/jpeg;base64,${imageData}`;
    this.photoArray[2]={Photo3:this.ThirdPhoto_base64}
    });
}if(cameraNum == '4'){
  this.questionid51=questionid
  this.camera.getPicture(options).then((imageData:any) => {
    console.log(imageData);
    // this.base64.encodeFile(imageData).then((base64File: string) => {
    //     this.ForthPhoto = `data:image/jpeg;base64,${imageData}`;
    //     this.ForthPhoto_base64 = `data:image/jpeg;base64,${base64File}`;
    //     this.photoArray.push({Photo4:this.ForthPhoto_base64});
    //     console.log(base64File);
    //   }, (err) => {
    //     console.log(err);
    //   });
    this.ForthPhoto = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
    this.ForthPhoto_base64 = `data:image/jpeg;base64,${imageData}`;
    this.photoArray[3]={Photo4:this.ForthPhoto_base64}
    });
}if(cameraNum == '5'){
  this.questionid52=questionid
  this.camera.getPicture(options).then((imageData:any) => {
    console.log(imageData);
    // this.base64.encodeFile(imageData).then((base64File: string) => {
    //     this.FifthPhoto = `data:image/jpeg;base64,${imageData}`;
    //     this.FifthPhoto_base64 = `data:image/jpeg;base64,${base64File}`;
    //     this.photoArray.push({Photo5:this.FifthPhoto_base64});
    //     console.log(base64File);
    //   }, (err) => {
    //     console.log(err);
    //   });
    this.FifthPhoto = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
    this.FifthPhoto_base64 = `data:image/jpeg;base64,${imageData}`;
    this.photoArray[4]={Photo5:this.FifthPhoto_base64}
    });
}

    // let photo1 = {
    //   "FunctionID": "1",
    //   "questionID": "48",
    //   "Answer": this.selectedFrontImage_OCR,
    //   "sectionID": "38",
    //   "partyID": 0,
    //   "leadID": "42613904",
    //   "branchid": "1",
    //   "userid": "3442",
    //   "createdDate": "2022-08-02T09:28:28.942Z",
    //   "catagoryPK1": 0
    // }
// this.BankingApiInsert(photo1);
  // }
// });
console.log(this.photoArray.length);
}

uvrPhotoSubmit(){
    debugger
  var finaltodayDate=new Date();
  console.log(this.photoArray.length);

for(let i=0;i<this.photoArray.length;i++){
  if(this.photoArray[i].Photo1){
     // this.xyzzzzz=this.photoArray[i].Photo1
    var inputPicture1 = this.photoArray[i].Photo1
}
if(this.photoArray[i].Photo2){
    var inputPicture2 = this.photoArray[i].Photo2
}
if(this.photoArray[i].Photo3){
    var inputPicture3 = this.photoArray[i].Photo3
}

if(this.photoArray[i].Photo4)
{
    var inputPicture4 = this.photoArray[i].Photo4
}

if(this.photoArray[i].Photo5){
    var inputPicture5 = this.photoArray[i].Photo5
}

}



if( inputPicture1 !== undefined && inputPicture2 !== undefined && inputPicture3 !== undefined && inputPicture4 === undefined && inputPicture5 === undefined){
  debugger
  var imagearray = [
      {
          'questionID':"48",
          'Answer': "data:image/jpeg;base64,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",
          'sectionID': '38',
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'questionID': "49",
          'Answer': "data:image/jpeg;base64,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",
          'sectionID': '38',
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'questionID': "50",
          'Answer': "data:image/jpeg;base64,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",
          'sectionID': '38',
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'questionID':"59",
          'Answer': [window.localStorage['latitude'],window.localStorage['longitude']],
          'sectionID': "30",
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      }

          ]
          for (let i = 0; i < imagearray.length; i++) {
              var res = i;
              // if(imagearray[i].questionID == 48 && imagearray[i].questionID == 49 && imagearray[i].questionID == 50 ) {
                var datasertest = {
                      'questionID': imagearray[i].questionID,
                      'Answer': imagearray[i].Answer,
                      'sectionID': imagearray[i].sectionID,
                      'partyID': imagearray[i].partyID,
                      'leadID': imagearray[i].leadID,
                      'FunctionID': imagearray[i].FunctionID,
                      'branchid': imagearray[i].branchid,
                      'userid': imagearray[i].userid,
                      'createdDate': imagearray[i].createdDate,
                      'catagoryPK1': 0
                  }



                  this.apiservice.appformdetailinsert(datasertest).then( (resp:any)=> {
                      debugger

                 
                      console.log(resp);
                  }, function (resp) {
                      console.log(resp);
      
                  });






                  
                  let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '38', Status: 'A' };
                 // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
                  this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
                      console.log(resp);
                  }, function (err) {
                      console.log(err);
                  })
  
          }
          if (imagearray.length - 1 == res) {
              // alert("saved succesfully");
              this.AlertService.presentAlert("Alert","Saved Successfully")
  
          }
} else if( inputPicture1 !== undefined && inputPicture2 !== undefined && inputPicture3 !== undefined && inputPicture4 !== undefined && inputPicture5===undefined){
  var imagearray1 = [
      {
          'questionID': this.questionid48,
          'Answer': inputPicture1,
          'sectionID': '38',
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'questionID': this.questionid49,
          'Answer': inputPicture2,
          'sectionID': '38',
          'partyID': 0,
          'leadID':this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'questionID': this.questionid50,
          'Answer': inputPicture3,
          'sectionID': '38',
          'partyID': 0,
          'leadID':this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'questionID': this.questionid51,
          'Answer': inputPicture4,
          'sectionID': '38',
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'questionID': 59,
          'Answer':  [window.localStorage['latitude'],window.localStorage['longitude']],
          'sectionID': 30,
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      }
  ]
  for (let i = 0; i < imagearray.length; i++) {
      var res = i;
      // if(imagearray[i].questionID == 48 && imagearray[i].questionID == 49 && imagearray[i].questionID == 50 ) {
          datasertest = {
              'questionID': imagearray[i].questionID,
              'Answer': imagearray[i].Answer,
              'sectionID': imagearray[i].sectionID,
              'partyID': imagearray[i].partyID,
              'leadID': imagearray[i].leadID,
              'FunctionID': imagearray[i].FunctionID,
              'branchid': imagearray[i].branchid,
              'userid': imagearray[i].userid,
              'createdDate': imagearray[i].createdDate,
              'catagoryPK1': 0
          }
          this.apiservice.appformdetailinsert(datasertest).then( (resp:any)=> {
              debugger


              console.log(resp);
          } 
          
          // function (resp) {
          //     console.log(resp);

          // }
          );
          let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '38', Status: 'A' };
         // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
          this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
              debugger
              console.log(resp);
          }, function (err) {
              console.log(err);
          })

  }
  if (imagearray.length - 1 == res) {
      // alert("saved succesfully");
      this.AlertService.presentAlert("Alert","Saved Successfully")

  }
} else if(inputPicture1 !== undefined && inputPicture2 !== undefined && inputPicture3 !== undefined && inputPicture4 !== undefined && inputPicture5 !== undefined){
  var imagearray2 = [
      {
          'questionID': this.questionid48,
          'Answer': inputPicture1,
          'sectionID': '38',
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'questionID': this.questionid49,
          'Answer': inputPicture2,
          'sectionID': '38',
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'questionID':this.questionid50,
          'Answer': inputPicture3,
          'sectionID': '38',
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'questionID': this.questionid51,
          'Answer': inputPicture4,
          'sectionID': '38',
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'questionID': this.questionid52,
          'Answer': inputPicture5,
          'sectionID': '38',
          'partyID': 0,
          'leadID':this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'questionID': 59,
          'Answer':  [window.localStorage['latitude'],window.localStorage['longitude']],
          'sectionID': 30,
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      }
  ]
  for (let i = 0; i < imagearray.length; i++) {
      var res = i;
      // if(imagearray[i].questionID == 48 && imagearray[i].questionID == 49 && imagearray[i].questionID == 50 ) {
          datasertest = {
              'questionID': imagearray[i].questionID,
              'Answer': imagearray[i].Answer,
              'sectionID': imagearray[i].sectionID,
              'partyID': imagearray[i].partyID,
              'leadID': imagearray[i].leadID,
              'FunctionID': imagearray[i].FunctionID,
              'branchid': imagearray[i].branchid,
              'userid': imagearray[i].userid,
              'createdDate': imagearray[i].createdDate,
              'catagoryPK1': 0
          }
          this.apiservice.appformdetailinsert(datasertest).then( (resp:any) =>{
              debugger

              console.log(resp);
          }, function (resp) {
              console.log(resp);

          });
          let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '38', Status: 'A' };
          //let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
          this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
              console.log(resp);
          }, function (err) {
              console.log(err);
          })

  }
  if (imagearray.length - 1 == res) {
      // alert("saved succesfully");
      this.AlertService.presentAlert("Alert","Saved Successfully")

  }
} else if(inputPicture1 !== undefined && inputPicture2 !== undefined && inputPicture3 !== undefined && inputPicture4 === undefined && inputPicture5 !== undefined){
  var imagearray3 = [
      {
          'questionID': this.questionid48,
          'Answer': inputPicture1,
          'sectionID': '38',
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'questionID': this.questionid49,
          'Answer': inputPicture2,
          'sectionID': '38',
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'questionID': this.questionid50,
          'Answer': inputPicture3,
          'sectionID': '38',
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      // {
      //     'questionID': this.questionidd51,
      //     'Answer': inputPicture4,
      //     'sectionID': sectionID,
      //     'partyID': tempPartyID,
      //     'leadID': parseInt(leadID),
      //     'FunctionID': FunctionID,
      //     'branchid': branchid,
      //     'userid': userid,
      //     'createdDate': finaltodayDate,
      //     'catagoryPK1': 0
      // },
      {
          'questionID':this.questionid52,
          'Answer': inputPicture5,
          'sectionID': '38',
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      },
      {
          'questionID': 59,
          'Answer':  [window.localStorage['latitude'],window.localStorage['longitude']],
          'sectionID': 30,
          'partyID': 0,
          'leadID': this.cusID,
          'FunctionID': 1,
          'branchid': this.BranchID,
          'userid': this.userID,
          'createdDate': finaltodayDate,
          'catagoryPK1': 0
      }
  ]
  for (let i = 0; i < imagearray.length; i++) {
      var res = i;
      // if(imagearray[i].questionID == 48 && imagearray[i].questionID == 49 && imagearray[i].questionID == 50 ) {
          datasertest = {
              'questionID': imagearray[i].questionID,
              'Answer': imagearray[i].Answer,
              'sectionID': imagearray[i].sectionID,
              'partyID': imagearray[i].partyID,
              'leadID': imagearray[i].leadID,
              'FunctionID': imagearray[i].FunctionID,
              'branchid': imagearray[i].branchid,
              'userid': imagearray[i].userid,
              'createdDate': imagearray[i].createdDate,
              'catagoryPK1': 0
          }
          this.apiservice.appformdetailinsert(datasertest).then( (resp:any)=> {
              debugger
  
              console.log(resp);
          }, function (resp) {
              console.log(resp);

          });
          let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '38', Status: 'A' };
         // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
          this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
              debugger
              console.log(resp);
          }, function (err) {
              console.log(err);
          })

  }
  if (imagearray.length - 1 == res) {
      // alert("saved succesfully");
      this.AlertService.presentAlert("Alert","Saved Successfully")

  }
} 
else 
{
  this.AlertService.presentAlert("Alert","Please upload atleast 3 images")
 
}







//sijin code
//   if(this.photoArray.length != 0){
//     this.photoArray.forEach((element:any)=>{
//       console.log(element,'sij')
//       // if(element.Photo1)
//       if(element.Photo1){
//         console.log('1')
//           let photo1 = {
//     "FunctionID": "1",
//     "questionID": "48",
//     "Answer": element.Photo1,
//     "sectionID": this.sectionID,
//     "partyID": 0,
//     "leadID": this.cusID,
//     "branchid": this.BranchID,
//     "userid": this.userID,
//     "createdDate": this.date,
//     "catagoryPK1": 0
//   }
// this.BankingApiInsert(photo1);
//       }else if(element.Photo2){
//         console.log('2')
//           let photo2 = {
//     "FunctionID": "1",
//     "questionID": "49",
//     "Answer": element.Photo2,
//     "sectionID": this.sectionID,
//     "partyID": 0,
//     "leadID": this.cusID,
//     "branchid": this.BranchID,
//     "userid": this.userID,
//     "createdDate": this.date,
//     "catagoryPK1": 0
//   }
// this.BankingApiInsert(photo2);
//       }else if(element.Photo3){
//         console.log('3')
//           let photo3 = {
//     "FunctionID": "1",
//     "questionID": "50",
//     "Answer": element.Photo3,
//     "sectionID": this.sectionID,
//     "partyID": 0,
//     "leadID":this.cusID,
//     "branchid": this.BranchID,
//     "userid": this.userID,
//     "createdDate": this.date,
//     "catagoryPK1": 0
//   }
// this.BankingApiInsert(photo3);

//       }else if(element.Photo4){
//         console.log('4')
//         let photo4 = {
//               "FunctionID": "1",
//               "questionID": "51",
//               "Answer": element.Photo4,
//               "sectionID": this.sectionID,
//               "partyID": 0,
//               "leadID": this.cusID,
//               "branchid": this.BranchID,
//               "userid": this.userID,
//               "createdDate": this.date,
//               "catagoryPK1": 0
//             }
//           this.BankingApiInsert(photo4);
//       }else if(element.Photo5){
//         console.log('5')
//         let photo5 = {
//               "FunctionID": "1",
//               "questionID": "52",
//               "Answer": element.Photo5,
//               "sectionID": this.sectionID,
//               "partyID": 0,
//               "leadID": this.cusID,
//               "branchid": this.BranchID,
//               "userid": this.userID,
//               "createdDate": this.date,
//               "catagoryPK1": 0
//             }
//           this.BankingApiInsert(photo5);
//       }
//       // if(element.Photo1 || element.Photo2 || element.Photo3 || element.Photo4 || element.Photo5){
//       //   console.log('hi');
//       // }
//     });

//     if(this.photoArray.length != 0){
//       this.toast.presentToast('Saved')
//     }
//   }else{
//     this.toast.presentToast('Photo Should Not Empty')
//   }
 
// if(this.FirstPhoto_base64 == '' || this.FirstPhoto_base64 == null || this.FirstPhoto_base64 == undefined){
//   alert('fill first')
// }else{
//   let photo1 = {
//     "FunctionID": "1",
//     "questionID": "48",
//     "Answer": this.FirstPhoto_base64,
//     "sectionID": this.sectionID,
//     "partyID": 0,
//     "leadID": this.cusID,
//     "branchid": this.BranchID,
//     "userid": this.userID,
//     "createdDate": this.date,
//     "catagoryPK1": 0
//   }
// this.BankingApiInsert(photo1);


  
// } 
// if(this.SecondPhoto_base64 == '' || this.SecondPhoto_base64 == null || this.SecondPhoto_base64 == undefined){
 
//   alert('fill second')
// }else{
  
//   let photo2 = {
//     "FunctionID": "1",
//     "questionID": "49",
//     "Answer": this.SecondPhoto_base64,
//     "sectionID": this.sectionID,
//     "partyID": 0,
//     "leadID": this.cusID,
//     "branchid": this.BranchID,
//     "userid": this.userID,
//     "createdDate": this.date,
//     "catagoryPK1": 0
//   }
// this.BankingApiInsert(photo2);
// }
//  if(this.ThirdPhoto_base64 == '' || this.ThirdPhoto_base64 == null || this.ThirdPhoto_base64 == undefined ){
 
//   alert('fill third')
// }else{
 
//   let photo3 = {
//     "FunctionID": "1",
//     "questionID": "50",
//     "Answer": this.ThirdPhoto_base64,
//     "sectionID": this.sectionID,
//     "partyID": 0,
//     "leadID":this.cusID,
//     "branchid": this.BranchID,
//     "userid": this.userID,
//     "createdDate": this.date,
//     "catagoryPK1": 0
//   }
// this.BankingApiInsert(photo3);
// } 

// if(this.ForthPhoto_base64 == '' || this.ForthPhoto_base64 == null || this.ForthPhoto_base64 == undefined){
 

// } else{
//   let photo4 = {
//     "FunctionID": "1",
//     "questionID": "51",
//     "Answer": this.ForthPhoto_base64,
//     "sectionID": this.sectionID,
//     "partyID": 0,
//     "leadID": this.cusID,
//     "branchid": this.BranchID,
//     "userid": this.userID,
//     "createdDate": this.date,
//     "catagoryPK1": 0
//   }
// this.BankingApiInsert(photo4);
// }
// if(this.FifthPhoto_base64 == '' || this.FifthPhoto_base64 == null || this.FifthPhoto_base64 == undefined){
 

// }else{
//   let photo5 = {
//     "FunctionID": "1",
//     "questionID": "52",
//     "Answer": this.FifthPhoto_base64,
//     "sectionID": this.sectionID,
//     "partyID": 0,
//     "leadID": this.cusID,
//     "branchid": this.BranchID,
//     "userid": this.userID,
//     "createdDate": this.date,
//     "catagoryPK1": 0
//   }
// this.BankingApiInsert(photo5);
// }
}

camera_upload(){
  console.log('working');
  
  // const options: CameraOptions = {
  //   quality: 100,
  //   destinationType: this.camera.DestinationType.FILE_URI,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // }
  
  // this.camera.getPicture(options).then((imageData) => {
  //  // imageData is either a base64 encoded string or a file URI
  //  // If it's base64 (DATA_URL):
  //  let base64Image = 'data:image/jpeg;base64,' + imageData;
  //  console.log(base64Image)
  // }, (err) => {
  //  // Handle error
  // });
}


}
