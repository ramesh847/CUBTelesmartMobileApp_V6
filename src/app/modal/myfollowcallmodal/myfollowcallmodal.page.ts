import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService} from './../../service/api-service.service';
import { AlertServiceService } from 'src/app/service/alert-service.service';
@Component({
  selector: 'app-myfollowcallmodal',
  templateUrl: './myfollowcallmodal.page.html',
  styleUrls: ['./myfollowcallmodal.page.scss'],
})
export class MyfollowcallmodalPage implements OnInit {
  Cusdata: any;
  data: any = {};
  MyfollowupForm: FormGroup;
  CallOutcomeItems: any =[];
  showFollowupDateTime: boolean = false;
  ShowDepositsCasaAdvanceInsurace: boolean = false;
  ProductTypeFirstNameLastNameMobileEmail: boolean = false;
  ProductTypes: any = [];
  ProductGroups: any = [];
  businessunit: any =[];
  custId: any;
  showProductGroupProduct:boolean = false;

  constructor(public modalController: ModalController, private navParams: NavParams,
    private Apiservice: ApiServiceService,
    private alertService: AlertServiceService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.MyfollowupForm = this.formBuilder.group({
      calloutcome: [''],
      calltype: ['T'],
      followupdate: [''],
      followuptime: [''],
      deposits: [''],
      casa: [''],
      advance: [''],
      insurance: [''], 
       remarks: [''],
      producttype: [''],
      firstname: [''],
      lastname: [''],
      mobile: [''],
      email: [''],
      productgroup:[''],
      // producttype:['']

    });
    // this.MyfollowupForm.get('calltye').setValue('Telecall')
    this.Cusdata = this.navParams.get('Data');
   var purpose = this.Cusdata.PURPOSE;
   if(purpose == "Lead Generation" ) {
     this.ShowDepositsCasaAdvanceInsurace = true;
     this.MyfollowupForm.get('insurance').setValue(this.Cusdata.Insurance_Amount);
   
   }
   else if(purpose == "Insurance") {
    this.ShowDepositsCasaAdvanceInsurace = true;
   }
   console.log(purpose);
    console.log( this.Cusdata);
    this.custId = this.Cusdata.CUSTOMER_ID;
 

    this.getCalloutcome();
  }
  getCalloutcome() {
    
    this.Apiservice.getcalloutcomeNew().then(response => {
      var result = response.data;
      result = JSON.parse(result);
      result = JSON.parse(result);
      // this.CallOutcomeItems = response;
      this.CallOutcomeItems = result;
      console.log(this.CallOutcomeItems);
    })
  }
  changeCallType(event) {
    if (event.target.value == 'P') {
      // this.showLocation = true;
      // if(this.assigned.addressname != 'undefined' && this.assigned.addressname != ' '&& this.assigned.addressname != ''&& this.assigned.addressname != undefined){
      //   console.log(this.assigned.addressname)
      //   window.localStorage['addressName']  = this.assigned.addressname;
      //   this.setlatlong(this.assigned.addressname);
      // }
    } else {
      // this.showLocation = false;
      // this.MyassignCallForm.get('jointvisit').setValue(null);
      // this.MyassignCallForm.get('location').setValue(null);
    }

    console.log(event.target.value);
  }
  changeCallOutcome(event) {
    console.log(this.Cusdata.CUSTOMER_NAME)
    if(event == '2') {
      this.showFollowupDateTime = true;
      this.ProductTypeFirstNameLastNameMobileEmail = false;
    }
    else if("3") {
      this.showFollowupDateTime = false;
      this.ProductTypeFirstNameLastNameMobileEmail = true;
      this.getbusinessunit(this.custId);
      this.MyfollowupForm.get('firstname').setValue(this.Cusdata.CUSTOMER_NAME)
      this.MyfollowupForm.get('lastname').setValue(this.Cusdata.CUSTOMER_NAME)
      this.MyfollowupForm.get('mobile').setValue(this.Cusdata.CONTACT_NO)
      // this.getProductGroup(event);
    }
    else {
      this.showFollowupDateTime = false;
      this.ProductTypeFirstNameLastNameMobileEmail = false;
    }

    console.log(event);
  }
  modelDissmiss() {
    this.modalController.dismiss();
  }


  getbusinessunit(cust) {
    // $scope.showspin();
    this.Apiservice.getbusinesstype(cust).then(response => {
      // response = JSON.stringify(response);
           var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
      // var result = JSON.stringify(response);
      // result = JSON.parse(result);
     this.businessunit = result;
     console.log(this.businessunit);
    })
  }

  changeProductType(event) {
    if(event == '12' || event == '13'){
       this.showProductGroupProduct = true;
       this.getProductGroup(event);
    }
    // else if(event == '13') {

    // }
    else {
      this.showProductGroupProduct = false;
    }
    console.log(event);
  }
  getProductGroup(cust) {
    // $scope.showspin();
    this.Apiservice.getproductGroup(cust).then(response => {
           var result = response.data;
        result = JSON.parse(result);
        result = JSON.parse(result);
      // console.log(response);
      // var result = JSON.stringify(response);
      // result = JSON.parse(result);
     this.ProductGroups = result;
    })
  }
  getProductType(Type,prodGroup) {

    this.Apiservice.getProductType(Type,prodGroup).then(response => {
      console.log(response);
      var result = response.data;
      result = JSON.parse(result);
      result = JSON.parse(result);
     this.ProductTypes = result;
    });
  }
  onSubmitForm() {
    console.log(this.MyfollowupForm.getRawValue());
    var callID = window.localStorage['CallId'];
    var custID = window.localStorage['CustomerId'];
    var BRANCH = window.localStorage['branchID'];
    var STRUSERID = window.localStorage['userID'];
    var CUSTID = "";
    var RESPONSE = '';
    var REMARKS = '';
    var NEXTCALLDATE = '';
    var CALLID = '';
    var CALLTYPE = '';
    var usercode = '';
    var AccountNo = '';
    var Amount = '';
    var Collectiondate ='';
    var colectionmode ='';
    var jointvisit ='';
    var jointcode='';
    var Endtime ='';
    var Totime ='';
    var depositVal = '';
    var casaVal ='';
    var AdvanceVal = '';
    var InsuranceVal = '';
    // var depositVal
    if (CALLTYPE == "P") {
this.Apiservice.updatefollowcalls(STRUSERID, CUSTID, RESPONSE, REMARKS, BRANCH, NEXTCALLDATE, CALLID, CALLTYPE, usercode, AccountNo, Amount, Collectiondate, colectionmode, jointvisit, jointcode, Endtime, Totime).then(res=>{

})

      //debugger;
      // callAPI.updatefollowcalls(STRUSERID, CUSTID, RESPONSE, REMARKS, BRANCH, NEXTCALLDATE, CALLID, CALLTYPE, usercode, AccountNo, Amount, Collectiondate, colectionmode, jointvisit, jointcode, Endtime, Totime, depositVal, casaVal, AdvanceVal, InsuranceVal)
      //   .success(function(response) {
      //     $scope.hidespin($ionicLoading);
      //     console.log(response);

      //     if (response !== '') {
      //       //alert("address")
      //       console.log(CUSTID, latvalue, langvalue, address, purpose, CUSTID)
      //       callAPI.saveaddress(CUSTID, latvalue, langvalue, address, purpose, CUSTID)
      //         .success(function(response)

      //           {
      //             console.log(response);
      //             if (response == '"Yes"') {
      //               console.log(response)
      //               var alertPopup = $ionicPopup.alert({
      //                 title: 'Success',
      //                 template: 'Saved Successfully'
      //               });

      //               alertPopup.then(function(res) {
      //                 $scope.UpdateModal.hide();

      //               });
      //             }
      //           })

      //     } else {
      //       var alertPopup = $ionicPopup.alert({
      //         title: 'Error',
      //         template: 'Error While Saving'
      //       });

      //       alertPopup.then(function(res) {
      //         $scope.UpdateModal.hide();

      //       });
      //     }



      //     /* var alertPopup = $ionicPopup.alert({
      //        title: 'Success',
      //        template: 'Saved Successfully'
      //      });

      //      alertPopup.then(function(res) {
      //        $scope.UpdateModal.hide();

      //      });*/


      //     $scope.myfollowupcallsdata();
      //   })

      //   .error(function(response) {
      //     console.log(response);
      //     $scope.hidespin($ionicLoading);
      //   });
    } else {
     this.Apiservice.updatefollowcalls(STRUSERID, CUSTID, RESPONSE, REMARKS, BRANCH, NEXTCALLDATE, CALLID, CALLTYPE, usercode, AccountNo, Amount, Collectiondate, colectionmode, jointvisit, jointcode, Endtime, Totime).then(resp=> {

     })

      // callAPI.updatefollowcalls(STRUSERID, CUSTID, RESPONSE, REMARKS, BRANCH, NEXTCALLDATE, CALLID, CALLTYPE, usercode, AccountNo, Amount, Collectiondate, colectionmode, jointvisit, jointcode, Endtime, Totime)
      //   .success(function(response) {
      //     $scope.hidespin($ionicLoading);
      //     console.log(response);



      //     var alertPopup = $ionicPopup.alert({
      //       title: 'Success',
      //       template: 'Saved Successfully'
      //     });

      //     alertPopup.then(function(res) {
      //       $scope.UpdateModal.hide();

      //       // Custom functionality....
      //     });


      //     $scope.myfollowupcallsdata();
      //   })

      //   .error(function(response) {
      //     console.log(response);
      //     $scope.hidespin($ionicLoading);
      //   });
      
    }
  }
}

