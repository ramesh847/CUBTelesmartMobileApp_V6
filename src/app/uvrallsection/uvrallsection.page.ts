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
    "Disply_bankName ":"","whter_cus_ERV":"","specific_visit":"","official_staffID":"","official_name":""
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
  FifthPhoto?: SafeUrl;
  FifthPhoto_base64: string;
  ForthPhoto?: SafeUrl;
  ForthPhoto_base64: string;
  ThirdPhoto?: SafeUrl;
  ThirdPhoto_base64: string;
  SecondPhoto?: SafeUrl;
  SecondPhoto_base64: string;
  FirstPhoto?: SafeUrl;
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
  questionid48: any;
  questionid49: any;
  questionid50: any;
  questionid51: any;
  questionid52: any;
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
    this.bankingData.bankname=abc0
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
let getcommentJSONtmp1 = { Customerid: window.localStorage['UVRCustID'] };

this.apiservice.getDropDownComments(getcommentJSONtmp1).then(function (resp) {
debugger

if(JSON.parse(resp.data).length==0)  {
this.manuF_abt_manu_machnary.installed_capacity_list=''  
} else{
for(let i=0;i<JSON.parse(resp.data).length;i++){
if(JSON.parse(resp.data)[i].questionid=='74'){
this.questionid741.push(JSON.parse(resp.data)[i].comments)
}else{
this.manuF_abt_manu_machnary.installed_capacity_list=''  
}

}
if( this.questionid741.length>0){
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

var abc = this.questionid16[xyz - 1]

if(abc=='Yes'){
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

    var abc = this.questionid18[xyz - 1]


    if(abc=='Yes'){
        this.manuF_abt_manu_machnary.machinery_finance = abc
        // this.showfinance=true;
        let getcommentJSONtmp = { Customerid: window.localStorage['UVRCustID'] };
        // let getcommentJSON = angular.extend(tokenJSON, getcommentJSONtmp);
        console.log(getcommentJSONtmp);
        this.apiservice.getDropDownComments(getcommentJSONtmp).then( (resp:any) =>{
    debugger

if(JSON.parse(resp.data).length==0){
this.manuF_abt_manu_machnary.machinery_teext_show=''
}else{
for(let i=0;i<JSON.parse(resp.data).length;i++){
if(JSON.parse(resp.data)[i].questionid=='18'){
this.questionid181.push(JSON.parse(resp.data)[i].comments)
//document.getElementById('nameofbank').value= res.data[i].comments
}else{
this.manuF_abt_manu_machnary.machinery_teext_show=''
}
}

if(  this.questionid181.length>0){
var xyz1 = this.questionid181.length

var abc1 = this.questionid181[xyz1 - 1]
this.manuF_abt_manu_machnary.machinery_teext_show==abc1
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
            let getcommentJSONtmp = { Customerid: window.localStorage['UVRCustID'] };
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

        var abc = this.questionid45[xyz - 1]
       
       this.gentral_observat_vist.specific_visit = abc

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
              'Customerid': window.localStorage['UVRCustID'],
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
            'Customerid': window.localStorage['UVRCustID'],
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
            'Customerid': window.localStorage['UVRCustID'],
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
            'leadID': window.localStorage['UVRCustID'],
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
            'Answer': this.manuF_abt_manu_machnary.locational_advant,
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
            'comments': this.manuF_abt_manu_machnary.value_stock,
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
            'Answer': this.manuF_abt_manu_machnary.  producttext ,
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
              this.toast.presentToast('saved Successfully');
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
            'Answer': this.manuF_abt_manu_machnary.locational_advant,
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
            'comments': this.manuF_abt_manu_machnary.value_stock,
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
            'Answer': this.manuF_abt_manu_machnary.  producttext ,
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
              this.toast.presentToast('saved Successfully');
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
            'Answer': this.manuF_abt_manu_machnary.locational_advant,
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
            'comments': this.manuF_abt_manu_machnary.value_stock,
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
            'Answer': this.manuF_abt_manu_machnary.  producttext ,
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
              this.toast.presentToast('saved Successfully');
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
          'Answer': this.manuF_abt_manu_machnary.locational_advant,
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
          'comments': this.manuF_abt_manu_machnary.value_stock,
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
          'Answer': this.manuF_abt_manu_machnary.  producttext ,
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
            this.toast.presentToast('saved Successfully');
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
              'Answer': this.manuF_abt_manu_machnary.locational_advant,
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
              'comments': this.manuF_abt_manu_machnary.value_stock,
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
              'Answer': this.manuF_abt_manu_machnary.  producttext ,
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
                this.toast.presentToast('saved Successfully');
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
              'Answer': this.manuF_abt_manu_machnary.locational_advant,
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
              'comments': this.manuF_abt_manu_machnary.value_stock,
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
              'Answer': this.manuF_abt_manu_machnary.  producttext ,
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
                this.toast.presentToast('saved Successfully');
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
                'Answer': this.manuF_abt_manu_machnary.locational_advant,
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
                'comments': this.manuF_abt_manu_machnary.value_stock,
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
                'Answer': this.manuF_abt_manu_machnary.  producttext ,
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
                  this.toast.presentToast('saved Successfully');
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
searchkeyword(){
  debugger
  var xyz={
    custId:this.gentral_observat_vist.official_staffID,
    BranchId:this.BranchID
  }
  this.apiservice.appsearch(xyz).then((resp:any)=>{
    if(resp.data=='Invalid User'){
      this.AlertService.presentAlert("Alert","Invalid User")
    }else{
    this.gentral_observat_vist.official_name=resp.data[0].username
    }
  })
}
uvrManuf_gentral_observ_Submit(){
  var finaltodayDate=new Date();

if(this.gentral_observat_vist.Disply_bankName==''){
  this.AlertService.presentAlert("Alert","Select Display of our Bank’s Name board is displayed")
}else if(this.gentral_observat_vist.whter_cus_ERV==''){
  this.AlertService.presentAlert("Alert","Please fill Whether the customer and his family are having our products, to improve the ERV")
}else if(this.gentral_observat_vist.specific_visit==''){
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
        'Answer': this.gentral_observat_vist.specific_visit,
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
        // alert('inserted');
        console.log(resp);
    }, function (resp) {
        console.log(resp);

    });
    let getdataJSONtmp = { Customerid: this.cusID, Sctionid: '37', Status: 'A' };
    //let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
    this.apiservice.saveMandValidation(getdataJSONtmp).then( (resp:any) =>{
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
            'Answer': this.trading_optn2_Data.valueofstock,
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
            'questionID': '30',
            'Answer': this.trading_optn2_Data.receivable_beyond,
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
            'questionID': '32',
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
            'questionID': '33',
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
            'questionID': '34',
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
            'comments': this.trading_optn2_Data.Wher_bnk_clause,
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
            'Answer': this.trading_optn2_Data.bnk_clause_show  ,
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
            'Answer': this.trading_optn2_Data. name_insur_cmpny  ,
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
            'comments': this.trading_optn2_Data.whdr_QIS_submission,
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
            'Answer': this.trading_optn2_Data.whdr_QIS_submission_comment,
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
                'Customerid': window.localStorage['UVRCustID'],
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
               this.responseArray.push(resp);
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
            this.apiservice.appformdetailinsert(datasertest).then( (resp:any)=> {
                // alert('inserted');
                console.log(resp);
               // console.log(this.responseArray);
                this.responseArray.push(resp);
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
          'Answer': this.trading_optn2_Data.valueofstock,
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
          'questionID': '30',
          'Answer': this.trading_optn2_Data.receivable_beyond,
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
          'questionID': '32',
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
          'questionID': '33',
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
          'questionID': '34',
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
          'comments': this.trading_optn2_Data.Wher_bnk_clause,
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
          'Answer': this.trading_optn2_Data.bnk_clause_show  ,
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
          'Answer': this.trading_optn2_Data. name_insur_cmpny  ,
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
          'comments': this.trading_optn2_Data.whdr_QIS_submission,
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
          'Answer': this.trading_optn2_Data.whdr_QIS_submission_comment,
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
              'Customerid': window.localStorage['UVRCustID'],
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
             this.responseArray.push(resp);
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
          this.apiservice.appformdetailinsert(datasertest).then( (resp:any)=> {
              // alert('inserted');
              console.log(resp);
             // console.log(this.responseArray);
              this.responseArray.push(resp);
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
            'Answer': this.trading_optn2_Data.valueofstock,
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
            'questionID': '30',
            'Answer': this.trading_optn2_Data.receivable_beyond,
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
            'questionID': '32',
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
            'questionID': '33',
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
            'questionID': '34',
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
            'comments': this.trading_optn2_Data.Wher_bnk_clause,
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
            'Answer': this.trading_optn2_Data.bnk_clause_show  ,
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
            'Answer': this.trading_optn2_Data. name_insur_cmpny  ,
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
            'comments': this.trading_optn2_Data.whdr_QIS_submission,
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
            'Answer': this.trading_optn2_Data.whdr_QIS_submission_comment,
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
                'Customerid': window.localStorage['UVRCustID'],
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
               this.responseArray.push(resp);
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
            this.apiservice.appformdetailinsert(datasertest).then( (resp:any)=> {
                // alert('inserted');
                console.log(resp);
               // console.log(this.responseArray);
                this.responseArray.push(resp);
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
            'Answer': this.trading_optn2_Data.valueofstock,
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
            'questionID': '30',
            'Answer': this.trading_optn2_Data.receivable_beyond,
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
            'questionID': '32',
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
            'questionID': '33',
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
            'questionID': '34',
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
            'comments': this.trading_optn2_Data.Wher_bnk_clause,
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
            'Answer': this.trading_optn2_Data.bnk_clause_show  ,
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
            'Answer': this.trading_optn2_Data. name_insur_cmpny  ,
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
            'comments': this.trading_optn2_Data.whdr_QIS_submission,
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
            'Answer': this.trading_optn2_Data.whdr_QIS_submission_comment,
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
                'Customerid': window.localStorage['UVRCustID'],
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
               this.responseArray.push(resp);
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
            this.apiservice.appformdetailinsert(datasertest).then( (resp:any)=> {
                // alert('inserted');
                console.log(resp);
               // console.log(this.responseArray);
                this.responseArray.push(resp);
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

uvrtrading_opt4Submit(){
if(this.trading_optn4_Data.Display_bnk_name != ''){
    let answer1 = {
      "FunctionID": "1",
      "questionID": "43",
      "Answer": this.trading_optn4_Data.Display_bnk_name,
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
if(this.trading_optn4_Data.cus_family_ERV != ''){
    let answer1 = {
      "FunctionID": "1",
      "questionID": "44",
      "Answer": this.trading_optn4_Data.cus_family_ERV,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
    "userid": this.userID,
      "createdDate": this.date,
      "catagoryPK1": 0
    }
    this.BankingApiInsert(answer1);
}if(this.trading_optn4_Data.specific_visit_find != ''){
    let answer1 = {
      "FunctionID": "1",
      "questionID": "45",
      "Answer": this.trading_optn4_Data.specific_visit_find,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
    "userid": this.userID,
      "createdDate": this.date,
      "catagoryPK1": 0
    }
    this.BankingApiInsert(answer1);
  
}if(this.trading_optn4_Data.visit_staff_id != ''){
  
    let answer1 = {
      "FunctionID": "1",
      "questionID": "46",
      "Answer": this.trading_optn4_Data.visit_staff_id,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
      "userid": this.userID,
      "createdDate": this.date,
      "catagoryPK1": 0
    }
    this.BankingApiInsert(answer1);
  
}if(this.trading_optn4_Data.visit_official_name != ''){
  
    let answer1 = {
      "FunctionID": "1",
      "questionID": "47",
      "Answer": this.trading_optn4_Data.visit_official_name,
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
// "Display_bnk_name":"","cus_family_ERV":"","specific_visit_find":"","visit_staff_id":"","visit_official_name":""
if(this.trading_optn4_Data.Display_bnk_name != '' || this.trading_optn4_Data.cus_family_ERV != ''
|| this.trading_optn4_Data.specific_visit_find != '' || this.trading_optn4_Data.visit_staff_id != ''
|| this.trading_optn4_Data.visit_official_name != '' ){
  this.toast.presentToast('Saved')
}
}

// UVR Other option 1
// Othr_optn1_Data = {
//   "sales_projt_FY":"","curnt_year_GST":"","wher_sales_reduc_notic":"","conct_firm_unit":""
// }
uvrOthr_opt1Submit(){
if(this.Othr_optn1_Data.sales_projt_FY != ''){
  let answer1 = {
    "FunctionID": "1",
    "questionID": "39",
    "Answer": this.Othr_optn1_Data.sales_projt_FY,
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
if(this.Othr_optn1_Data.curnt_year_GST != ''){
  let answer1 = {
    "FunctionID": "1",
    "questionID": "40",
    "Answer": this.Othr_optn1_Data.curnt_year_GST,
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
if(this.Othr_optn1_Data.wher_sales_reduc_notic != ''){
  let answer1 = {
    "FunctionID": "1",
    "questionID": "41",
    "Answer": this.Othr_optn1_Data.wher_sales_reduc_notic,
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
if(this.Othr_optn1_Data.conct_firm_unit != ''){
  let answer1 = {
    "FunctionID": "1",
    "questionID": "42",
    "Answer": this.Othr_optn1_Data.conct_firm_unit,
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

if(this.Othr_optn1_Data.sales_projt_FY != '' || this.Othr_optn1_Data.curnt_year_GST != '' ||
this.Othr_optn1_Data.wher_sales_reduc_notic != '' || this.Othr_optn1_Data.conct_firm_unit != ''){
  this.toast.presentToast('Saved');
}

}

//OtherData oPTION 2

uvrOthr_opt2Submit(){
  if(this.Othr_optn2_Data.Display_bnk_name != ''){
    let answer1 = {
      "FunctionID": "1",
      "questionID": "43",
      "Answer": this.Othr_optn2_Data.Display_bnk_name,
      "sectionID": this.sectionID,
      "partyID": 0,
      "leadID": this.cusID,
      "branchid": this.BranchID,
    "userid": this.userID,
      "createdDate":this.date,
      "catagoryPK1": 0
    }
    this.BankingApiInsert(answer1);
  }
  if(this.Othr_optn2_Data.cus_family_ERV != ''){
    let answer1 = {
      "FunctionID": "1",
      "questionID": "44",
      "Answer": this.Othr_optn2_Data.cus_family_ERV,
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
  if(this.Othr_optn2_Data.specific_visit_find != ''){
    let answer1 = {
      "FunctionID": "1",
      "questionID": "45",
      "Answer": this.Othr_optn2_Data.specific_visit_find,
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
  if(this.Othr_optn2_Data.visit_staff_id != ''){
    let answer1 = {
      "FunctionID": "1",
      "questionID": "46",
      "Answer": this.Othr_optn2_Data.visit_staff_id,
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
  if(this.Othr_optn2_Data.visit_official_name != ''){
    let answer1 = {
      "FunctionID": "1",
      "questionID": "47",
      "Answer": this.Othr_optn2_Data.visit_official_name,
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

if(this.Othr_optn2_Data.Display_bnk_name != '' || this.Othr_optn2_Data.cus_family_ERV != '' ||
this.Othr_optn2_Data.specific_visit_find != '' || this.Othr_optn2_Data.visit_staff_id != '' ||
this.Othr_optn2_Data.visit_official_name != '' ){
  this.toast.presentToast('Saved')
}
}

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
    console.log(imageData);
    this.FirstPhoto = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
    this.FirstPhoto_base64 = `data:image/jpeg;base64,${imageData}`;
    this.photoArray.push({Photo1:this.FirstPhoto_base64});
    });
}if(cameraNum == '2'){
  this.questionid49=questionid
  this.camera.getPicture(options).then((imageData:any) => {
    console.log(imageData);
    this.SecondPhoto = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
    this.SecondPhoto_base64 = `data:image/jpeg;base64,${imageData}`;
    this.photoArray.push({Photo2:this.SecondPhoto_base64});
    });
}if(cameraNum == '3'){
  this.questionid50=questionid
  this.camera.getPicture(options).then((imageData:any) => {
    console.log(imageData);
    this.ThirdPhoto = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
    this.ThirdPhoto_base64 = `data:image/jpeg;base64,${imageData}`;
    this.photoArray.push({Photo3:this.ThirdPhoto_base64});
    });
}if(cameraNum == '4'){
  this.questionid51=questionid
  this.camera.getPicture(options).then((imageData:any) => {
    console.log(imageData);
    this.ForthPhoto = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
    this.ForthPhoto_base64 = `data:image/jpeg;base64,${imageData}`;
    this.photoArray.push({Photo4:this.ForthPhoto_base64});
    });
}if(cameraNum == '5'){
  this.questionid52=questionid
  this.camera.getPicture(options).then((imageData:any) => {
    console.log(imageData);
    this.FifthPhoto = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + imageData);
    this.FifthPhoto_base64 = `data:image/jpeg;base64,${imageData}`;
    this.photoArray.push({Photo5:this.FifthPhoto_base64});
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
  var finaltodayDate=new Date();
  console.log(this.photoArray.length);

for(let i=0;i<this.photoArray.length;i++){
  if(this.photoArray[i].photo1){
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
          'questionID':this.questionid48,
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
      {
          'questionID': 59,
          'Answer': [this.lat,this.long],
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
          'Answer':  [this.lat,this.long],
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
          'Answer':  [this.lat,this.long],
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
          'Answer':  [this.lat,this.long],
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
