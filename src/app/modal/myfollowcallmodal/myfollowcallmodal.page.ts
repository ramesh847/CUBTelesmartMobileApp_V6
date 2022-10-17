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
   if(purpose == "Lead Generation") {
     this.ShowDepositsCasaAdvanceInsurace = true;
     this.MyfollowupForm.get('insurance').setValue(this.Cusdata.Insurance_Amount);
   
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
  }
}

