import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../service/api-service.service';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-uvrsection',
  templateUrl: './uvrsection.page.html',
  styleUrls: ['./uvrsection.page.scss'],
})
export class UvrsectionPage implements OnInit {
  SectionHeaderdata:any;
  sectionEvent: string;
  ManufacturingEvent: boolean;
  TradingEvent: boolean;
  OthersEvent: boolean;
  mainButtonValidation: any;
  mainbuttonvalidationSessionIdArray: any;
  category: string;
  tablists: any;
  manufavturingarray: any[];
  visitID: any;
  visitid: any;
  visitcompleted:boolean=false
  tradingarray: any[];
  othersarray: any[];
  constructor(private http:HttpClient,private router:Router,private activatedRoute:ActivatedRoute,private Apiservice:ApiServiceService) { 
    this.activatedRoute.queryParams.subscribe((params) => {
      this.SectionHeaderdata = params;
      console.log(params);
    });
    // let data = {
    //   "custId": "42613904"
    // }
    // this.http.post('https://uatcrmapp.cityunionbank.in:8086/UVR/UVR/getPositionoffacilities',data).subscribe(res=>{
    //   console.log(res)
    // })
  }

  ngOnInit() {
    this.category='0'
    var roleJson = { role: this.category, access_token: localStorage.getItem('token'), userid: localStorage.getItem('userID'), usertoken: localStorage.getItem('usertoken'), rand: localStorage.getItem('rand') };
    this.Apiservice.getallsections(roleJson).then( (resp:any)=> {
      debugger
      console.log(resp);
     // $rootScope.apptabdetail = resp.data;

      // resp.data.recordset;
      this.tablists = resp.data;

     
           
    })
  }

DropDownClickEvnt(Event){
console.log(Event.target.value)
if(Event.target.value == "Manufacturing"){
  this.ManufacturingEvent = true;
  this.TradingEvent = false;
  this.OthersEvent = false;
}else if(Event.target.value == 'Trading'){
  this.TradingEvent = true;
  this.OthersEvent = false;
  this.ManufacturingEvent = false;
}else if (Event.target.value == 'Others'){
  this.OthersEvent = true;
  this.ManufacturingEvent = false;
  this.TradingEvent = false;
}

}
  allsection(Event){
    debugger
console.log(Event);

if(Event == "Banking"){
  this.router.navigate(['uvrallsection'],{queryParams:{data:Event,sectionID:32,cusID:this.SectionHeaderdata.CUSTOMERID,cusName:this.SectionHeaderdata.CUSTNAME,event:Event}});
}
else if(Event == "Manuf_optn0"){
  this.router.navigate(['uvrallsection'],{queryParams:{data:Event,sectionID:40,cusID:this.SectionHeaderdata.CUSTOMERID,cusName:this.SectionHeaderdata.CUSTNAME }});
  }else if(Event == "Manuf_optn1"){
this.router.navigate(['uvrallsection'],{queryParams:{data:Event,sectionID:33,cusID:this.SectionHeaderdata.CUSTOMERID,cusName:this.SectionHeaderdata.CUSTNAME }});
}else if(Event == "Manuf_optn2"){
this.router.navigate(['uvrallsection'],{queryParams:{data:Event,sectionID:34,cusID:this.SectionHeaderdata.CUSTOMERID,cusName:this.SectionHeaderdata.CUSTNAME }});
}else if(Event == "Manuf_optn3"){
this.router.navigate(['uvrallsection'],{queryParams:{data:Event, sectionID:35,cusID:this.SectionHeaderdata.CUSTOMERID,cusName:this.SectionHeaderdata.CUSTNAME }});
}else if(Event == "Manuf_optn4"){
this.router.navigate(['uvrallsection'],{queryParams:{data:Event, sectionID:37,cusID:this.SectionHeaderdata.CUSTOMERID,cusName:this.SectionHeaderdata.CUSTNAME }});
}else if(Event == "Trad_optn1"){
this.router.navigate(['uvrallsection'],{queryParams:{data:Event, sectionID:39,cusID:this.SectionHeaderdata.CUSTOMERID,cusName:this.SectionHeaderdata.CUSTNAME }});
}else if(Event == "Trad_optn2"){
this.router.navigate(['uvrallsection'],{queryParams:{data:Event, sectionID:36,cusID:this.SectionHeaderdata.CUSTOMERID,cusName:this.SectionHeaderdata.CUSTNAME }});
}else if(Event == "Trad_optn3"){
this.router.navigate(['uvrallsection'],{queryParams:{data:Event, sectionID:35,cusID:this.SectionHeaderdata.CUSTOMERID,cusName:this.SectionHeaderdata.CUSTNAME }});
}else if(Event == "Trad_optn4"){
this.router.navigate(['uvrallsection'],{queryParams:{data:Event, sectionID:37,cusID:this.SectionHeaderdata.CUSTOMERID,cusName:this.SectionHeaderdata.CUSTNAME }});
}else if(Event == "Othr_optn1"){
this.router.navigate(['uvrallsection'],{queryParams:{data:Event,sectionID:35,cusID:this.SectionHeaderdata.CUSTOMERID,cusName:this.SectionHeaderdata.CUSTNAME }});
}else if(Event == "Othr_optn2"){
this.router.navigate(['uvrallsection'],{queryParams:{data:Event,cusID:this.SectionHeaderdata.CUSTOMERID,cusName:this.SectionHeaderdata.CUSTNAME }});
}else if(Event == "Othr_optn3"){
  this.router.navigate(['uvrallsection'],{queryParams:{data:Event,sectionID:38,cusID:this.SectionHeaderdata.CUSTOMERID,cusName:this.SectionHeaderdata.CUSTNAME }});
}

// if(Event == 'Banking'){
//   this.router.navigate(['uvrallsection'],{queryParams:{data:Event}});
// }else if(Event.target.value == 'Manufacturing'){
//     // this.router.navigate(['uvrallsection'],{queryParams:{data:Event.target.value }});
//   }else if(Event.target.value == 'Trading'){
//     // this.router.navigate(['uvrallsection'],{queryParams:{data:Event.target.value }});
//   }else if(Event.target.value == 'Others'){
//     // this.router.navigate(['uvrallsection'],{queryParams:{data:Event.target.value }});
//   }

  }


  updateFinalSave (val) {
    debugger
    
    //console.log(this.entryMonth, val);
    var entryMonth = val;

    let getdataJSONtmp = { Customerid: this.SectionHeaderdata.CUSTOMERID };
    // let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
   // let getdataJSON = angular.extend(getdataJSONtmp);
    //console.log(getdataJSON);
    // this.getCountMandValidationval();
    
    this.Apiservice.getCountMandValidation(getdataJSONtmp).then( (resp:any)=> {
        debugger
        this.mainButtonValidation = JSON.parse(resp.data).Count;
        this.mainbuttonvalidationSessionIdArray=JSON.parse(resp.data).SessionIdArray;
        //console.log(resp);
        console.log(this.mainButtonValidation);
        console.log('tablist', this.tablists);

        console.log(this.tablists.length);
    

    

        if(this.mainButtonValidation==0 )
      
        {

            console.log(this.mainButtonValidation.SessionIdArray);

            var msg = "";
            this.mainbuttonvalidationSessionIdArray.forEach(e => {
                debugger
                this.tablists.forEach(i => {
                    if (Number(e) == i.SectionID) {
                        msg = msg + i.SectionName + ", ";
                    }
                })
            });
            console.log(msg);
            alert("Please enter the data: " + msg + " Please fill it and try again.");
        } 
        
        
        
        
        else if(window.localStorage['vissitid']==1){
            this.manufavturingarray=[];
            for(var i=0;i<this.mainbuttonvalidationSessionIdArray.length;i++){
                // 33,34,35,37,38
                if(this.mainbuttonvalidationSessionIdArray[i]==33 || this.mainbuttonvalidationSessionIdArray[i]==34 ||
                    this.mainbuttonvalidationSessionIdArray[i]==35 ||  this.mainbuttonvalidationSessionIdArray[i]==36 ||
                    this.mainbuttonvalidationSessionIdArray[i]==37 ||
                    this.mainbuttonvalidationSessionIdArray[i]==38 || this.mainbuttonvalidationSessionIdArray[i]==40){
this.manufavturingarray.push(this.mainbuttonvalidationSessionIdArray[i])
                    }
            }

            if(this.manufavturingarray.length==0 || this.manufavturingarray.length==undefined || this.manufavturingarray.length==null){
                 this.deletelastValidation();
            console.log("updateFinalSave");
            var custid = window.localStorage['UVRCustID'];
            console.log(custid);
            var getLastVisitIDJSON = {
                custid: custid, access_token: localStorage.getItem('token'),
                userid: localStorage.getItem('userID'), usertoken: localStorage.getItem('usertoken'),
                rand: localStorage.getItem('rand')
            };

            this.Apiservice.getLastVisitID(getLastVisitIDJSON).then( (resp:any) =>{
                debugger
                // console.log(resp);
                // console.log(resp.data.length);
                this. visitid = "";

                if (JSON.parse(resp.data).length == 0 || JSON.parse(resp.data) == 'Request failed with status code 500') {
                   this. visitid = 1;
                    this.visitID = this.visitid;
                    this.visitcompleted = true;
                    //  this.DigitSignature();
                } else {
                    //visitid = resp.data.recordset[0].visit_id;
                  this.  visitid = resp.data;
                   this. visitid = parseInt(this.visitid) + 1;
                    this.visitID = this.visitid;
                    this.visitcompleted = true;
                    // this.DigitSignature();
                }
               // console.log(visitid);
                var updateVisitIDJSON = {
                    custid: this.SectionHeaderdata.customerID, access_token: localStorage.getItem('token'),
                    userid: localStorage.getItem('userID'), usertoken: localStorage.getItem('usertoken'),
                    rand: localStorage.getItem('rand'), visitid: this.visitid
                };
                console.log(updateVisitIDJSON);

                //Need to add the Entry Month Date to this API : Need to Implement
                this.Apiservice.updateVisitID(updateVisitIDJSON).then(function (resp) {
                    debugger
                    console.log(resp);
                   // this.DigitSignature();
              
                })


                
                this.Apiservice.UvrInsertCourtesy(localStorage.getItem('branchID'), localStorage.getItem('UVRCustID'), localStorage.getItem("UVRCustName"), "null", localStorage.getItem('userID'), localStorage.getItem('userID'), "null", localStorage.getItem('TUM_USER_NAME'), "P", "NULL", "757", "1", "0", "1990-01-01", "NULL", "NULL", localStorage.getItem('userCode'), "NULL", localStorage.getItem('userID'), "NULL", "NULL", "NULL", "NULL").then( (resp:any) =>{
                   
                })

               

            })
            debugger
            alert("Saved Successfully")
            // var alertPopup = $ionicPopup.alert({
            //     title: 'Success',
            //     template: 'Saved Successfully'
            // });

            } else{
                var msg="";
            this.manufavturingarray.forEach(e => {
                debugger
                this.tablists.forEach(i => {
                    if (Number(e) == i.SectionID) {
                        msg = msg + i.SectionName + ", ";
                    }
                })
            });
            alert("Please enter the data: " + msg + " Please fill it and try again.");
        }
        } else if(window.localStorage['vissitid']==2){
            this.tradingarray=[];
            for(var i=0;i<this.mainbuttonvalidationSessionIdArray.length;i++){
                // 33,34,35,37,38
                if(this.mainbuttonvalidationSessionIdArray[i]==35 || this.mainbuttonvalidationSessionIdArray[i]==36 ||
                    this.mainbuttonvalidationSessionIdArray[i]==37 ||
                    this.mainbuttonvalidationSessionIdArray[i]==38 ||
                    this.mainbuttonvalidationSessionIdArray[i]==39 || this.mainbuttonvalidationSessionIdArray[i]==40){
this.tradingarray.push(this.mainbuttonvalidationSessionIdArray[i])
                    }
            }

            if(this.tradingarray.length==0 || this.tradingarray.length==null || this.tradingarray.length==undefined){
                this.deletelastValidation();
            console.log("updateFinalSave");
            var custid = window.localStorage['UVRCustID'];
            console.log(custid);
            var getLastVisitIDJSON = {
                custid: custid, access_token: localStorage.getItem('token'),
                userid: localStorage.getItem('userID'), usertoken: localStorage.getItem('usertoken'),
                rand: localStorage.getItem('rand')
            };

            this.Apiservice.getLastVisitID(getLastVisitIDJSON).then(function (resp) {
                debugger
                console.log(resp);
                console.log(resp.data.length);
                var visitid = "";

                if (resp.data.length == 0 || resp.data == 'Request failed with status code 500') {
                    this.visitid = 1;
                    this.visitID = this.visitid;
                    this.visitcompleted = true;
                    //  this.DigitSignature();
                } else {
                    //visitid = resp.data.recordset[0].visit_id;
                   this. visitid = resp.data;
                   this. visitid = parseInt(this.visitid) + 1;
                    this.visitID = this.visitid;
                    this.visitcompleted = true;
                    // this.DigitSignature();
                }
                console.log(visitid);
                var updateVisitIDJSON = {
                    custid: custid, access_token: localStorage.getItem('token'),
                    userid: localStorage.getItem('userID'), usertoken: localStorage.getItem('usertoken'),
                    rand: localStorage.getItem('rand'), visitid: visitid
                };
                console.log(updateVisitIDJSON);

                //Need to add the Entry Month Date to this API : Need to Implement
                this.apiService.updateVisitID(updateVisitIDJSON).then(function (resp) {
                    debugger
                    console.log(resp);
                    //this.DigitSignature();
                
                })


                
                this.apiService.UvrInsertCourtesy(localStorage.getItem('branchID'), localStorage.getItem('UVRCustID'), localStorage.getItem("UVRCustName"), "null", localStorage.getItem('userID'), localStorage.getItem('userID'), "null", localStorage.getItem('TUM_USER_NAME'), "P", "NULL", "757", "1", "0", "1990-01-01", "NULL", "NULL", localStorage.getItem('userCode'), "NULL", localStorage.getItem('userID'), "NULL", "NULL", "NULL", "NULL").then(function (resp) {
                    console.log(resp);
                    // this.DigitSignature();
              
                })

               

            
            })
            debugger
           alert("Saved Successfully")

            } else{
                var msg="";
                this.tradingarray.forEach(e => {
                    debugger
                    this.tablists.forEach(i => {
                        if (Number(e) == i.SectionID) {
                            msg = msg + i.SectionName + ", ";
                        }
                    })
                });
                alert("Please enter the data: " + msg + " Please fill it and try again.");
            }


        } else if(window.localStorage['vissitid']==3){
            this.othersarray=[];
            for(var i=0;i<this.mainbuttonvalidationSessionIdArray.length;i++){
                // 33,34,35,37,38
                if(this.mainbuttonvalidationSessionIdArray[i]==35 || 
                    this.mainbuttonvalidationSessionIdArray[i]==37 ||
                    this.mainbuttonvalidationSessionIdArray[i]==38 || this.mainbuttonvalidationSessionIdArray[i]==40
                    ){
this.othersarray.push(this.mainbuttonvalidationSessionIdArray[i])
                    }
            }


            if(this.othersarray.length==0 || this.othersarray.length==undefined || this.othersarray.length==null){
this.deletelastValidation();
            console.log("updateFinalSave");
            var custid = window.localStorage['UVRCustID'];
            console.log(custid);
            var getLastVisitIDJSON = {
                custid: custid, access_token: localStorage.getItem('token'),
                userid: localStorage.getItem('userID'), usertoken: localStorage.getItem('usertoken'),
                rand: localStorage.getItem('rand')
            };

            this.Apiservice.getLastVisitID(getLastVisitIDJSON).then(function (resp) {
                debugger
                console.log(resp);
                console.log(resp.data.length);
                var visitid = "";

                if (resp.data.length == 0 || resp.data == 'Request failed with status code 500') {
                    this.visitid = 1;
                    this.visitID = visitid;
                    this.visitcompleted = true;
                    //  this.DigitSignature();
                } else {
                    //visitid = resp.data.recordset[0].visit_id;
                    visitid = resp.data;
                   this. visitid = parseInt(visitid) + 1;
                    this.visitID = this.visitid;
                    this.visitcompleted = true;
                    // this.DigitSignature();
                }
                console.log(visitid);
                var updateVisitIDJSON = {
                    custid: custid, access_token: localStorage.getItem('token'),
                    userid: localStorage.getItem('userID'), usertoken: localStorage.getItem('usertoken'),
                    rand: localStorage.getItem('rand'), visitid: visitid
                };
                console.log(updateVisitIDJSON);

                //Need to add the Entry Month Date to this API : Need to Implement
                this.apiService.updateVisitID(updateVisitIDJSON).then(function (resp) {
                    debugger
                    console.log(resp);
                    //this.DigitSignature();
               
                })


                
                this.apiService.UvrInsertCourtesy(localStorage.getItem('branchID'), localStorage.getItem('UVRCustID'), localStorage.getItem("UVRCustName"), "null", localStorage.getItem('userID'), localStorage.getItem('userID'), "null", localStorage.getItem('TUM_USER_NAME'), "P", "NULL", "757", "1", "0", "1990-01-01", "NULL", "NULL", localStorage.getItem('userCode'), "NULL", localStorage.getItem('userID'), "NULL", "NULL", "NULL", "NULL").then(function (resp) {
                    console.log(resp);
                    // this.DigitSignature();
                
                })

               

            })
            debugger
            alert("Saved Successfully")
            // var alertPopup = $ionicPopup.alert({
            //     title: 'Success',
            //     template: 'Saved Successfully'
            // });
            } else{
                var msg="";
                this.othersarray.forEach(e => {
                    debugger
                    this.tablists.forEach(i => {
                        if (Number(e) == i.SectionID) {
                            msg = msg + i.SectionName + ", ";
                        }
                    })
                });
                alert("Please enter the data: " + msg + " Please fill it and try again.");
            }
        }
        
        
        else 
        {

            alert("Please Choose Nature of Activity")
        }
    
// old if condition  if (Number(this.mainButtonValidation) < this.tablists.length)
})
      

    }

    DigitSignature(){

    }

    deletelastValidation () {
      debugger
              let getdataJSONtmp = { Customerid: window.localStorage['UVRCustID'] };
              //let getdataJSON = angular.extend(tokenJSON, getdataJSONtmp);
              //console.log(getdataJSON);
              this.Apiservice.deletelastValidation(getdataJSONtmp).then(function (resp) {
                  debugger
                  console.log(resp);
                  this.mainButtonValidation = 0;
            
              })
      
          }

//   allsection(){
// this.router.navigate(['uvrallsection']);
//   }
}
