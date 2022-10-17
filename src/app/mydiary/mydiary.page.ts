import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from './../service/api-service.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-mydiary',
  templateUrl: './mydiary.page.html',
  styleUrls: ['./mydiary.page.scss'],
  providers: [
    DatePipe],
})
export class MydiaryPage implements OnInit {
  date: any;
  todate: any;
  MyDiaryForm: FormGroup;
  customerDetails: any;
  constructor(private formBuilder: FormBuilder,
    private Apiservice: ApiServiceService, private datepipe: DatePipe) { }

  ngOnInit() {
    this.MyDiaryForm = this.formBuilder.group({
      startDate: [''],
      toDate: [''],
      teleCall: [''],
      pCall: [],
      lCall: [],
    });
  }
  getdiarycount(MyDiaryForm) {
    var branchid = window.localStorage['branchID'];
    var userid = window.localStorage['userID'];


    var fromdate = this.MyDiaryForm.get('startDate').value;
    fromdate = this.datepipe.transform(fromdate, 'dd.MM.yyyy');
    var todate = this.MyDiaryForm.get('toDate').value;
    todate = this.datepipe.transform(todate, 'dd.MM.yyyy');


    if (fromdate != null) {
      if (todate == null) {
        alert("Please Enter To Date")
      }
    }

    if (todate != null) {
      if (fromdate == null) {
        alert("Please Enter From Date")
      }
    }

    if (fromdate == null && todate == null) {
      alert("Please Enter From Date And To Date")

    }

    if (fromdate > todate) {
      alert("To Date Should Be Greater Than From Date")
    }


    var date2 = new Date(todate);
    var date1 = new Date(fromdate);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));

    var noofdays = dayDifference + 1;

    debugger

    // if (noofdays > 7) {
    //   debugger
    //   alert("Given From Date And To Date Should Be Less Than Or Equal To 7 Days ")
    // } else {
      console.log(userid, todate)
      this.Apiservice.getdiarycountt(userid, branchid, fromdate, todate).then(response => {
        var Value = JSON.stringify(response.data)
        Value = JSON.parse(Value);
        Value = JSON.parse(Value);
        Value = JSON.parse(Value);
        console.log(Value);
        this.MyDiaryForm.get('teleCall').setValue(Value[0]['cnt'])
        console.log(Value[0]['cnt']);
      })

      this.Apiservice.getdiarycountp(userid, branchid, fromdate, todate).then(response => {
        var Value = JSON.stringify(response.data)
        Value = JSON.parse(Value);
        Value = JSON.parse(Value);
        Value = JSON.parse(Value);
        console.log(Value);
        this.MyDiaryForm.get('pCall').setValue(Value[0]['cnt'])
      })
      this.Apiservice.getdiarycountl(userid, branchid, fromdate, todate).then(response => {
        var Value = JSON.stringify(response.data)
        Value = JSON.parse(Value);
        Value = JSON.parse(Value);
        Value = JSON.parse(Value);
        console.log(Value);
        this.MyDiaryForm.get('lCall').setValue(Value[0]['cnt'])
      })


  }
  viewdetails() {
    var branchid = window.localStorage['branchID'];
    var userid = window.localStorage['userID'];
    var fromdate = this.MyDiaryForm.get('startDate').value;
    fromdate = this.datepipe.transform(fromdate, 'dd.MM.yyyy');
    var todate = this.MyDiaryForm.get('toDate').value;
    todate = this.datepipe.transform(todate, 'dd.MM.yyyy');
    this.Apiservice.getdiarydetails(userid, branchid, fromdate, todate).then(response => {
      var Value = JSON.stringify(response.data)
      console.log(Value);
      // Value = JSON.parse(Value);
      // Value = JSON.parse(Value);
      this.customerDetails = JSON.parse(Value);
      this.customerDetails = JSON.parse(this.customerDetails);
      this.customerDetails = JSON.parse(this.customerDetails);
      this.customerDetails = this.customerDetails;
      console.log(this.customerDetails);
    })

    // .success(function(response) {
    //     response = JSON.parse(response);
    //     console.log(response)
    //    // debugger;
    //     if(response == []){
    //          $scope.viewdata = true;
    //     }
    //     $scope.getdiarydatat = response;

    // })
    // .error(function(response) {
    //     console.log(response);
    // });
  }

  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}

