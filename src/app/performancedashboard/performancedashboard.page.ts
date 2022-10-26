import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PerformancemodalPage } from '../modal/performancemodal/performancemodal.page';
// import { ModalController } from '@ionic/angular/providers/modal-controller';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-performancedashboard',
  templateUrl: './performancedashboard.page.html',
  styleUrls: ['./performancedashboard.page.scss'],
  providers:[DatePipe]
})
export class PerformancedashboardPage implements OnInit {
  branchCode: any;
  branchid: any;
  username: any;
  branchname: any;
  Usercode: any;
  UserType: any;
  userid: any;
  performdashboard: any;
  performdashboard1: any;
  month0: any;
  Deposit_Existing0: any;
  Deposit_New0: any;
  Deposit_Existing1: any;
  Deposit_New1: any;
  Casa_Existing0: any;
  Casa_New0: any;
  Casa_Existing1: any;
  Casa_New1: any;
  Advance_Existing0: any;
  Advance_New0: any;
  Advance_Existing1: any;
  Advance_New1: any;
  NPA: any;
  NPA1: any;
  NPA0: any;
  Insurance_Sp0: any;
  Insurance_Sp1: any;
  Telecall0: any;
  PersonalVisit0: any;
  Telecall1: any;
  PersonalVisit1: any;
  MaximumMark0: any;
  FiftyMark0: any;
  ThirtyMark0: any;
  eightyMark0: any;
  isshowcplus: boolean=false;
  isshowc: boolean=false;
  isshowbplus: boolean=false;
  isshowb: boolean=false;
  isshowaplus: boolean=false;
  isshowa: boolean=false;
  isshowcplus1: boolean=false;
  isshowc1: boolean=false;
  isshowbplus1: boolean=false;
  isshowb1: boolean=false;
  isshowaplus1: boolean=false;
  isshowa1: boolean=false;
  iseightymark0: boolean;
  plpCustomerList: any;
  plpBranchList: any;
  type: string;

  constructor(private modalController:ModalController,private datepipe:DatePipe,private Apiservice:ApiServiceService,private router:Router) { }

  ngOnInit() {
    debugger
   
this.branchCode = window.localStorage['branchCode'];
this.branchid = window.localStorage['branchID'];
    this.UserType = window.localStorage['userType'];
    this.userid = window.localStorage['userID'];
    this.username = window.localStorage['userName'];
    this.branchname = window.localStorage['BranchDescription'];
     this.Usercode = window.localStorage['userCode'];

     
    this.performdashdata()
    this.performdashmarks()
  }

 performdashmarks (){
   debugger
    this.Apiservice.perfdashmarks(this.userid)
        .then((response:any) =>{
          debugger
            response = JSON.parse(response.data);
           this.performdashboard1 = JSON.parse(response);         
          console.log('dashboard1',this.performdashboard1)
      
          for(let i=0;i<this.performdashboard1.length;i++){


            if(this.performdashboard1[0].eightyMark == undefined){
              this.iseightymark0=true
            }
            this.FiftyMark0=   this.performdashboard1[0].FiftyMark
   this.ThirtyMark0=this.performdashboard1[0].ThirtyMark
   this.eightyMark0=this.performdashboard1[0].eightyMark
             }
        })

        
       
}



 performdashdata(){
   debugger
    this.Apiservice.getperformdashboard(this.userid,this.branchid)
        .then((response:any)=> {
          debugger
            response = JSON.parse(JSON.parse(response.data));

              for(var i=0;i<response.length;i++)
            {
              response[i].NPA = parseFloat(response[i].NPA).toFixed(2);
              response[i].monthid = parseFloat(response[i].monthid).toFixed(2);
              response[i].Deposit_Existing = parseFloat(response[i].Deposit_Existing).toFixed(2);
              response[i].Deposit_New = parseFloat(response[i].Deposit_New).toFixed(2);
              response[i].Casa_Existing = parseFloat(response[i].Casa_Existing).toFixed(2);
              response[i].Casa_New = parseFloat(response[i].Casa_New).toFixed(2);
              response[i].Advance_Existing = parseFloat(response[i].Advance_Existing).toFixed(2);
              response[i].Advance_New = parseFloat(response[i].Advance_New).toFixed(2);
              response[i].Advance_Existing = parseFloat(response[i].Advance_Existing).toFixed(2);

               response[i].Insurance_Sp = parseFloat(response[i].Insurance_Sp).toFixed(2);
              response[i].Insurance_NSP = parseFloat(response[i].Insurance_NSP).toFixed(2);
              response[i].Telecall = parseFloat(response[i].Telecall).toFixed(2);
             response[i].PersonalVisit = parseFloat(response[i].PersonalVisit).toFixed(2);
             response[i].MaximumMark = parseFloat(response[i].MaximumMark).toFixed(2);
             response[i].PersonalVisit = parseFloat(response[i].PersonalVisit).toFixed(2);
             response[i].PersonalVisit = parseFloat(response[i].PersonalVisit).toFixed(2);
             response[i].PersonalVisit = parseFloat(response[i].PersonalVisit).toFixed(2);
             response[i].PersonalVisit = parseFloat(response[i].PersonalVisit).toFixed(2);
             console.log(response[i]);
            }
            this.performdashboard = response;
            console.log('dashboard',this.performdashboard);


            for(let i=0;i<this.performdashboard.length;i++){

              if(this.performdashboard[0].MarkGivan=='A'){
                this.isshowa=true
              }
              if(this.performdashboard[0].MarkGivan=='A+'){
                this.isshowaplus=true
              }
              if(this.performdashboard[0].MarkGivan=='B'){
                this.isshowb=true
              }
              if(this.performdashboard[0].MarkGivan=='B+'){
                this.isshowbplus=true
              }
              if(this.performdashboard[0].MarkGivan=='C'){
                this.isshowc=true
              }
              if(this.performdashboard[0].MarkGivan=='C+'){
                this.isshowcplus=true
              }
             
              if(this.performdashboard[1].MarkGivan=='A'){
                this.isshowa1=true
              }
              if(this.performdashboard[1].MarkGivan=='A+'){
                this.isshowaplus1=true
              }
              if(this.performdashboard[1].MarkGivan=='B'){
                this.isshowb1=true
              }
              if(this.performdashboard[1].MarkGivan=='B+'){
                this.isshowbplus1=true
              }
              if(this.performdashboard[1].MarkGivan=='C'){
                this.isshowc1=true
              }
              if(this.performdashboard[1].MarkGivan=='C+'){
                this.isshowcplus1=true
              }
         
      
            
       




           this.month0= this.  performdashboard[0].Month
           this.Deposit_Existing0=  this. performdashboard[0].Deposit_Existing
            this.Deposit_New0= this. performdashboard[0].Deposit_New
            this.Deposit_Existing1=  this.  performdashboard[1].Deposit_Existing
            this.Deposit_New1= this.   performdashboard[1].Deposit_New
              
          this.Casa_Existing0=  this.  performdashboard[0].Casa_Existing
          this.Casa_New0=  this.  performdashboard[0].Casa_New
          this.Casa_Existing1= this.   performdashboard[1].Casa_Existing
          this.Casa_New1= this.   performdashboard[1].Casa_New
              
            this.Advance_Existing0= this. performdashboard[0].Advance_Existing
           this.Advance_New0=  this. performdashboard[0].Advance_New
           this.Advance_Existing1=this.  performdashboard[1].Advance_Existing
           this.Advance_New1=  this.  performdashboard[1].Advance_New
              
          this.NPA0=  this.  performdashboard[0].NPA
          this.NPA1=  this.  performdashboard[1].NPA
              
            this.Insurance_Sp0= this. performdashboard[0].Insurance_Sp
            this.Insurance_Sp1=this. performdashboard[1].Insurance_Sp
              
           this.Telecall0=  this. performdashboard[0].Telecall
           this.PersonalVisit0=  this. performdashboard[0].PersonalVisit
           this.Telecall1= this.performdashboard[1].Telecall
           this.PersonalVisit1= this.performdashboard[1].PersonalVisit
             this.MaximumMark0= this.performdashboard[0].MaximumMark

            }

        })
       
}

async plpCustomerBase(type:any,CBSCustomerID:any,CBSCustomerName:any,Branch:any){
  
  const modal = await this.modalController.create({
    component: PerformancemodalPage,
    // componentProps: { }
  });
  return await modal.present();
}

// plpCustomerBase(category, custID, custName,Branch){  
//   //this.showspin($ionicLoading);
//   //this.plpModal.show();
//   // this.plpCustomerBaseDetails(this.search.type, this.search.CBSCustomerID, this.search.CBSCustomerName)
//   this.plpCustomerBranch();
//   this.plpCustomerBaseDetails(category, custID, custName,Branch);
// }

// plpCustomerBaseDetails(category, custID, custName, Branch){
//  // this.showspin();
//   if(category == undefined || category == ''){
//     category ='A';
//   } 
//   if(custID == undefined || custID == ''){
//     custID =" ";
//   } 
//   if(custName == undefined || custName == ''){
//     custName =" ";
//   } 
//   if(Branch == undefined || Branch == ''){
//     Branch =this.branchid;
//   }else{
//     Branch = Branch
//   } 
//   this.Apiservice.getplpCustomerBase(this.userid, this.UserType, custID, custName, Branch, category)
//   .subscribe((response:any) =>{
//     console.log(response)
//     //this.hidespin();
//        response = JSON.parse(response);
//        this.plpCustomerList = response;
       
//   })
 
// }

// plpCustomerBranch(){
//   debugger
//  // this.showspin();
//   this.Apiservice.getplpCustomerBranch(this.userid)
//   .subscribe((response:any)=> {
//     console.log(response)
//     //this.hidespin();
//        response = JSON.parse(response);
//        this.plpBranchList = response;
//        console.log(this.plpBranchList)

//   })
 
// }
// plpCustomerBase(search.type,search.CBSCustomerID,search.CBSCustomerName,search.Branch){

// }
}
