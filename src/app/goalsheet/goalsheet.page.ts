import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-goalsheet',
  templateUrl: './goalsheet.page.html',
  styleUrls: ['./goalsheet.page.scss'],
})
export class GoalsheetPage implements OnInit {
  assignend_date: any;
  userType:any;
  targetbranchuserdata: any;
  username: any;
  assignstartdate:any ;
  assignstartend: any;
  goalsheet: any;
  data: any =[];
  targetuserdata: any =[];
  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
  this.userType = window.localStorage['userType'];
  this.pageload();
  }

pageload ()
{
  var test = {

  }
  // this.showspin();
  this.apiService.AssigneDdate().then(resp => {
  //  var response = JSON.stringify(resp.data);
   var responses = JSON.stringify(resp.data);
 this.assignend_date =JSON.parse(responses);
 this.assignend_date =JSON.parse(this.assignend_date);
 this.assignend_date =JSON.parse(this.assignend_date);
 this.assignend_date =this.assignend_date;
 console.log('32 AssigneDdate',this.assignend_date)
    // this.assignend_date = JSON.parse(this.assignend_date) 
   this.goalsheet =  this.assignend_date[0].GoalBUsinessDate;
  

  })
   


  // var hostLink = httpLinkManager.getnewLocalLink();
  // this.showspin();
  this.apiService.targetbranchuserdatas(window.localStorage['branchID'], window.localStorage['userCode'], 10).then(response => {
    // this.hidespin();
var resp = JSON.stringify(response.data);
resp = JSON.parse(resp);
resp = JSON.parse(resp);
resp = JSON.parse(resp);

resp =resp;
    console.log("targetbranchuserdatas",resp)

    for (var i = 0; i < resp.length; i++) {
      resp[i]['Designationid'] = parseFloat(resp[i]['Designationid']).toFixed(2);
      resp[i]['UserId'] = parseFloat(resp[i]['UserId']).toFixed(2);
      resp[i]['BranchId'] = parseFloat(resp[i]['BranchId']).toFixed(2);
      resp[i]['Existing1'] = parseFloat(resp[i]['Existing1']).toFixed(2);
      resp[i]['New1'] = parseFloat(resp[i]['New1']).toFixed(2);
      resp[i]['Existing2'] = parseFloat(resp[i]['Existing2']).toFixed(2);
      resp[i]['New2'] = parseFloat(resp[i]['New2']).toFixed(2);
      resp[i]['Existing3'] = parseFloat(resp[i]['Existing3']).toFixed(2);

      resp[i]['New3'] = parseFloat(resp[i]['New3']).toFixed(2);

      resp[i]['Existing4'] = parseFloat(resp[i]['Existing4']).toFixed(2);
      resp[i]['New5'] = parseFloat(resp[i]['New5']).toFixed(2);
      resp[i]['Existing5'] = parseFloat(resp[i]['Existing5']).toFixed(2);
      resp[i]['Existing6'] = parseFloat(resp[i]['Existing6']).toFixed(2);





    
    }
    this.targetbranchuserdata = resp[0];
    this.username = window.localStorage['userName'];
  })
  // .error(function(err){
  //   this.hidespin();
  // })

  // this.showspin();
  this.apiService.targetuserdatas(window.localStorage['branchID'], window.localStorage['userCode'], 10).then(response => {
    // this.hidespin();
    var res = JSON.stringify(response.data);
    res = JSON.parse(res);
res = JSON.parse(res);
res = JSON.parse(res);
res =res;
    console.log("targetuserdatas",res)

    for (var i = 0; i < res.length; i++) {
      res[i]['BranchId'] = parseFloat(res[i]['BranchId']).toFixed(2);
      res[i]['Deposit'] = parseFloat(res[i]['Deposit']).toFixed(2);
      res[i]['CASA'] = parseFloat(res[i]['CASA']).toFixed(2);
      res[i]['advance'] = parseFloat(res[i]['advance']).toFixed(2);
      res[i]['NPA'] = parseFloat(res[i]['NPA']).toFixed(2);
      res[i]['Existing5'] = parseFloat(res[i]['Existing5']).toFixed(2);

      res[i]['new5'] = parseFloat(res[i]['new5']).toFixed(2);
      res[i]['Others'] = parseFloat(res[i]['Others']).toFixed(2);


      console.log(res[i]);
    }
    this.targetuserdata = res[0];
  })
  // .error(function(err){
  //   this.hidespin();
  // })


  // this.showspin();
  // this.apiService.AssigneDdate()
  //       .then(function(response) {
  //         // this.hidespin();
  //         console.log(response.data)
  //         var responses = JSON.stringify(response.data);
  //         responses =JSON.parse(responses);
  //         responses =JSON.parse(responses);
  //         responses =JSON.parse(responses);
  //           // this.data.push(responses[0]);
  //         // console.log(response)
  //           // console.log("108AssigneDdate",value['StartDate']);
  //         //  this.assignstartdate = value['StartDate'];
  //         //  this.assignstartend=value['EndDate'];
  //         //  this.goalsheet ="test";
  //       })
        // .error(function(err){
        //   this.hidespin();
        // })
}

}
