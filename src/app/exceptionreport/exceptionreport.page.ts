import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-exceptionreport',
  templateUrl: './exceptionreport.page.html',
  styleUrls: ['./exceptionreport.page.scss'],
})

export class ExceptionreportPage implements OnInit {
  ecode: any;
  ename: any;
  ebranch: any;
  ebranchname: any;
  edate: any;
  userid: any;
  branchid: any;
  userType: any;
  myexceptions: any = [];
  exceptions: any = [];
  constructor(private apiservice: ApiServiceService) { }

  ngOnInit() {

    this.ecode = localStorage.getItem('userCode');
    this.ename = localStorage.getItem('userName');
    this.ebranch = localStorage.getItem('branchCode');
    this.ebranchname = localStorage.getItem('BranchDescription');
    var d = new Date();
    this.edate = (d.setDate(d.getDate() - 1));
    this.getexception();
  }
  getexception() {
    // this.showspin();
    this.userid = window.localStorage['userID'];
    this.branchid = window.localStorage['branchID'];
    this.userType = window.localStorage['userType'];
    console.log("usertype",this.userType)
    this.apiservice.Exception_visitinsert(this.branchid, this.userid).then(response => {
        console.log(response)
    })

    if (this.userType == 17) {
       this.apiservice.Exception_Mgr(this.branchid).then(response => {
        console.log(response);
        //  this.hidespin();
        var user = JSON.stringify(response.data);
        this.exceptions = JSON.parse(user);
        this.exceptions = JSON.parse(this.exceptions);
        this.exceptions = JSON.parse(this.exceptions);
        this.exceptions = this.exceptions.Table;
        // response = JSON.parse(response);

        // this.exceptions = response.Table;
        this.exceptions.forEach((element, i) => {
          var trailingCharsIntactCount = 3;

          this.exceptions[i].AccountNumber = new Array(element.AccountNumber.length - trailingCharsIntactCount + 1).join('x')
            + element.AccountNumber.slice(-trailingCharsIntactCount);

        })
        this.exceptions = this.groupBy(this.exceptions, 'ExceptionType');
        console.log(this.exceptions);
        this.myexceptions = [];
        this.exceptions.forEach((element) => {
          if (element[0].ExceptionType == 'OVRD') this.myexceptions.push({ type: 'OVRD', data: element });
          if (element[0].ExceptionType == 'DEPC') this.myexceptions.push({ type: 'DEPC', data: element });
          if (element[0].ExceptionType == 'OPEN') this.myexceptions.push({ type: 'OPEN', data: element });
          if (element[0].ExceptionType == 'DACT') this.myexceptions.push({ type: 'DACT', data: element });
          if (element[0].ExceptionType == 'NRIO') this.myexceptions.push({ type: 'NRIO', data: element });
          if (element[0].ExceptionType == 'NRIC') this.myexceptions.push({ type: 'NRIC', data: element });
          if (element[0].ExceptionType == 'ODBD') this.myexceptions.push({ type: 'ODBD', data: element });
          if (element[0].ExceptionType == 'LADM') this.myexceptions.push({ type: 'LADM', data: element });
          if (element[0].ExceptionType == 'SBNE') this.myexceptions.push({ type: 'SBNE', data: element });
          if (element[0].ExceptionType == 'ABRC') this.myexceptions.push({ type: 'ABRC', data: element });
          if (element[0].ExceptionType == 'OPER') this.myexceptions.push({ type: 'OPER', data: element });
          if (element[0].ExceptionType == 'CASI') this.myexceptions.push({ type: 'CASI', data: element });
          if (element[0].ExceptionType == 'CASD') this.myexceptions.push({ type: 'CASD', data: element });
          if (element[0].ExceptionType == 'THRL') this.myexceptions.push({ type: 'THRL', data: element });
          if (element[0].ExceptionType == 'LNAR') this.myexceptions.push({ type: 'LNAR', data: element });
          if (element[0].ExceptionType == 'TODE') this.myexceptions.push({ type: 'TODE', data: element });
          if (element[0].ExceptionType == 'DPBL') this.myexceptions.push({ type: 'DPBL', data: element });
          if (element[0].ExceptionType == 'LLOS') this.myexceptions.push({ type: 'LLOS', data: element });
          if (element[0].ExceptionType == 'CLOS') this.myexceptions.push({ type: 'CLOS', data: element });
          if (element[0].ExceptionType == 'NEFA') this.myexceptions.push({ type: 'NEFA', data: element });
          if (element[0].ExceptionType == 'OUTC') this.myexceptions.push({ type: 'OUTC', data: element });
          if (element[0].ExceptionType == 'ACTD') this.myexceptions.push({ type: 'ACTD', data: element });
          if (element[0].ExceptionType == 'RTGA') this.myexceptions.push({ type: 'RTGA', data: element });
        });
        console.log('dddd',this.myexceptions);
      })

    } 
    else {
       this.apiservice.Exception_Staff(this.userid).then(response => {
        console.log(response);
        // this.hidespin();
       var responseValue = JSON.stringify(response.data);
       responseValue = JSON.parse(responseValue);
       responseValue = JSON.parse(responseValue);
       responseValue = JSON.parse(responseValue);
       console.log(responseValue['Table']);
        this.exceptions = responseValue['Table'];
        this.exceptions.forEach((element, i) => {
          var trailingCharsIntactCount = 3;

          this.exceptions[i].AccountNumber = new Array(element.AccountNumber.length - trailingCharsIntactCount + 1).join('x')
            + element.AccountNumber.slice(-trailingCharsIntactCount);

        })
        this.exceptions = this.groupBy(this.exceptions, 'ExceptionType');
        console.log(this.exceptions);
        this.myexceptions = [];
        this.exceptions.forEach((element) => {
          if (element[0].ExceptionType == 'OVRD') this.myexceptions.push({ type: 'OVRD', data: element });
          if (element[0].ExceptionType == 'DEPC') this.myexceptions.push({ type: 'DEPC', data: element });
          if (element[0].ExceptionType == 'OPEN') this.myexceptions.push({ type: 'OPEN', data: element });
          if (element[0].ExceptionType == 'DACT') this.myexceptions.push({ type: 'DACT', data: element });
          if (element[0].ExceptionType == 'NRIO') this.myexceptions.push({ type: 'NRIO', data: element });
          if (element[0].ExceptionType == 'NRIC') this.myexceptions.push({ type: 'NRIC', data: element });
          if (element[0].ExceptionType == 'ODBD') this.myexceptions.push({ type: 'ODBD', data: element });
          if (element[0].ExceptionType == 'LADM') this.myexceptions.push({ type: 'LADM', data: element });
          if (element[0].ExceptionType == 'SBNE') this.myexceptions.push({ type: 'SBNE', data: element });
          if (element[0].ExceptionType == 'ABRC') this.myexceptions.push({ type: 'ABRC', data: element });
          if (element[0].ExceptionType == 'OPER') this.myexceptions.push({ type: 'OPER', data: element });
          if (element[0].ExceptionType == 'CASI') this.myexceptions.push({ type: 'CASI', data: element });
          if (element[0].ExceptionType == 'CASD') this.myexceptions.push({ type: 'CASD', data: element });
          if (element[0].ExceptionType == 'THRL') this.myexceptions.push({ type: 'THRL', data: element });
          if (element[0].ExceptionType == 'LNAR') this.myexceptions.push({ type: 'LNAR', data: element });
          if (element[0].ExceptionType == 'TODE') this.myexceptions.push({ type: 'TODE', data: element });
          if (element[0].ExceptionType == 'DPBL') this.myexceptions.push({ type: 'DPBL', data: element });
          if (element[0].ExceptionType == 'LLOS') this.myexceptions.push({ type: 'LLOS', data: element });
          if (element[0].ExceptionType == 'CLOS') this.myexceptions.push({ type: 'CLOS', data: element });
          if (element[0].ExceptionType == 'NEFA') this.myexceptions.push({ type: 'NEFA', data: element });
          if (element[0].ExceptionType == 'OUTC') this.myexceptions.push({ type: 'OUTC', data: element });
          if (element[0].ExceptionType == 'ACTD') this.myexceptions.push({ type: 'ACTD', data: element });
          if (element[0].ExceptionType == 'RTGA') this.myexceptions.push({ type: 'RTGA', data: element });
        });
        console.log(this.myexceptions);
      })

    }
  }


  groupBy(collection, property) {
    var i = 0, val, index,
        values = [], result = [];
    for (; i < collection.length; i++) {
        val = collection[i][property];
        index = values.indexOf(val);
        if (index > -1){
          result[index].push(collection[i]);
          
        } 
        else {
            values.push(val);
            result.push([collection[i]]);
         
        }
    }
    return result;
}

}

