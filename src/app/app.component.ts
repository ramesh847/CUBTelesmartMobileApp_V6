import { Component } from '@angular/core';
import * as moment from "moment"; 
import { Router } from '@angular/router';
import { ApiServiceService } from './service/api-service.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages = [
    { title: 'Notification', url: '/notification', icon: 'information-sharp' },
    { title: 'User Profile', url: '/userprofile', icon: 'person' },
    { title: 'Entry Screen', url: '/entryscreen', icon: 'call' },
    { title: 'My Customers',icon: 'people',
    children: [
      { title: 'My Star Customers', url: 'mystarcustomers' },
      { title: "'0' Star Customers", url: 'zerostarcustomers' },
      { title: 'My SMA Customers', url: 'mysmacustomers' },
      { title: 'My NPA Customers', url: 'mynpacustomers' },
      { title: 'Demand Collection', url: 'demandcollection' },
      { title: 'Other Account', url: 'otheraccounts' },
    ]},
    { title: 'My Calls', icon: 'call',
    children: [
      { title: 'My Assigned Call', url: '/myassignedcall' },
      { title: "My FollowUp Calls", url: '/myfollowupcall' },
      { title: 'Common Calls', url: '/commoncall' },
  
    ],
    
 },
 { title: 'My Visits', icon: 'briefcase',
 children: [
   { title: 'My Assigned Visits', url: '/myassignedvisits' },
   { title: "My FollowUp Visits", url: '/myfollowupvisits' },
   { title: 'Common Visits', url: '/commonvisits' },

 ],
},
 { title: 'My Leads', icon: 'information-sharp',
    children: [
      { title: 'Followup Leads', url: 'followup-leads' },
      { title: "Express Leads", url: 'express-leads' },
      { title: 'RTGS/NEFT', url: 'rtgs-neft' },
  
    ],
    
 },
 { title: 'My Diary', url: '/mydiary', icon: 'person' },
 { title: 'My Planner', url: '/myplanner', icon: 'person' },
 { title: 'Heatmap', url: '/heatmap', icon: 'person' },
 { title: 'Exception Report', url: '/exceptionreport', icon: 'person' },
 { title: 'My wish List',icon: 'people',
 children: [
   { title: 'Add Customer', url: 'mywishaddcustomer' },
   { title: "Primary Customer", url: 'mywishprimarycustomer' },
   { title: 'Secondary Customer', url: 'mywishsecondarycustomer' },
   { title: 'FollowUp', url: 'mywishfollowup' },
   { title: 'Conversions', url: 'mywishconversions' },
  //  { title: 'Other Account', url: 'otheraccounts' },
 ]},
 
 { title: 'Insurance',icon: 'people',
 children: [
   { title: 'Add Insurance', url: 'addinsurance' },
   { title: "Insurance Customer", url: 'insurancecustomer' }
 ]},

 { title: 'Unit Visit Report', url: 'unitvisitreport', icon: 'person' },
  ];
  Date: string;

  // public appPages = [
  //   {
  //     title: 'Card',
  //     url: '/home',
  //     icon: 'paper'
  //   },
  //   {
  //     title: 'Category',
  //     url: '/list',
  //     icon: 'walk',
  //     subPages: [{ title: 'subtest1', url: '' },
  //     { title: 'subtest2', url: '' },
  //     { title: 'subtest3', url: '' },
  //     { title: 'subtest4', url: '' },
  //     { title: 'subtest5', url: '' },
  //     { title: 'subtest6', url: '' },
  //     { title: 'subtest7', url: '' },
  //     { title: 'subtest8', url: '', }]
  //   }   
  // ];

  constructor(private router:Router,private service:ApiServiceService) {
    let data={
      "id": 11,
      "name": "Krishna Rungta",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
          }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
      }
  }
  // this.service.uatdata().subscribe(res=>{
  //   console.log(res)
  // });
// let data1 = {
//   "strUserCode": "8C9fn2A3KFGhSLmzJtuqzA==",
//   "strPassword": "tDMbWUk/l26gcPQgdLykAg=="
// }Customerid + "/" + BranchID + "/" + UserID + "/" + UserType + "/" + cat 

    console.log(new Date().toISOString())
    this.router.navigate(['login']);
 this.Date = moment().format('YYYY-MM-DD');
 console.log(this.Date)
//  for(var i=1; i<=4; i++){
//   console.log("*".repeat(i));
// }
 }
}
