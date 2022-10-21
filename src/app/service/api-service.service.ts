import { Injectable } from '@angular/core';
// import { http,HttpHeaders, } from  '@angular/common/http';
import {Constant} from "src/app/service/constant";
import { Observable } from 'rxjs/internal/Observable';
import { of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
// import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  servicelink="https://uatcrmapp.cityunionbank.in:8086/UVR/"
  ipLink1="https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/"

  cuburl =  'https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LeadManagement.svc/getexistingcustomerdetails/4401771'

  //login Api Telesmart https://uatcrmapp.cityunionbank.in:8084/newcrmapi/Login/LoginCub
  // LoginbaseUrl ="http://demo.herbie.ai/TelesmartWebAPI/";
  LoginbaseUrl ="https://uatcrmapp.cityunionbank.in:8084/newcrmapi/"


  

 //UVR main Api 

//  https://uatcrmapp.cityunionbank.in:8086/UVR/UVR/getAllCustomersMasterData
  baseUrl:string = "https://uatcrmapp.cityunionbank.in:8086/UVR/UVR/";
  // baseUrl:string = "http://demo.herbie.ai:8156/UVR/UVR/";
  // private headers = new HttpHeaders();


//   Access-Control-Allow-Origin: *
// Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE
// Vary: Accept-Encoding, Origin
// Access-Control-Allow-Headers: Content-Type
// Content-Length: 0
// Connection: keep-alive
  constructor(private http: HTTP,private httpClient: HttpClient) { 
  
  }


//   uatdata(){

//     const headers = new HttpHeaders();
//     headers.append('Access-Control-Allow-Origin', '*');
//     // headers.append('Access-Control-Allow-Credentials', 'true');
//     headers.append('Access-Control-Allow-Headers', 'Content-Type');

//     headers.append('Access-Control-Allow-Methods', 'GET, POST');


//     headers.append('Content-Type', 'application/json');
//     return this.http.get(this.cuburl,{headers:headers});
//  }



// Telesmart

  login(formdata){
  
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.post(this.LoginbaseUrl + Constant.LOGIN, formdata ,{});
   }
   getversion(){
    return this.http.get(this.LoginbaseUrl + "LeadManagement.svc/getVersion/"+null,{},{});
  }
  updateversion(branchid,userid,version){
    return this.http.get(this.LoginbaseUrl + "LeadManagement.svc/UpdateVersion/"+branchid+"/"+userid+"/"+version,{},{});
  }

MyCustomerDetails(Customerid, BranchID, UserID, UserType, cat){
   return this.http.get(this.LoginbaseUrl + Constant.GetmyCustomerDetail + Customerid + "/" + BranchID + "/" + UserID + "/" + UserType + "/" + cat ,{},{});
}
getCustomerCategorydropdown(){
  return this.http.get(this.LoginbaseUrl + Constant.getCustomerCategory ,{},{});
}
GetTotalBusinessExisiting(userID){
  //  console.log(ipLink2 + "StarCustNewExistBusiness/" + userID + "/E");
  return this.http.get(this.LoginbaseUrl + Constant.StarCustNewExistBusiness+ userID+ "/E" ,{},{});
    // return $http.get(ipLink2 + "StarCustNewExistBusiness/" + userID+ "/E");
  }

  GetTotalBusinessNew(userID){
  //  console.log(ipLink2 + "StarCustNewExistBusiness/" + userID + "/F");
  return this.http.get(this.LoginbaseUrl + Constant.StarCustNewExistBusiness+ userID+ "/F" ,{},{});
    // return $http.get(ipLink2 + "StarCustNewExistBusiness/" + userID+ "/F");
  }



// While opening in modal
  getbusinessunitExisting() {
    return this.http.get(this.LoginbaseUrl + Constant.getproductExisting,{},{});
  }

  getbusinessunitNew() {
    return this.http.get(this.LoginbaseUrl + Constant.getproductnew,{},{});
  }
  getexistingcustomerdetails(customerid: string) {
    return this.http.get(this.LoginbaseUrl + Constant.getexistingcustomerdetails + customerid,{},{});
  }
  getcalloutcome1(){
    //  console.log(ipLink + "calloutcome1");
      return this.http.get(this.LoginbaseUrl + Constant.calloutcome1,{},{});
    }

    checkJointCode(strusercode,usercode, branchid){
        return this.http.get(this.LoginbaseUrl + Constant.JointIdValidation + strusercode + "/" + usercode + "/" + branchid,{},{});
      }
      getpurpose(){
        //  console.log(ipLink3 + "getpurpose");
          return this.http.get(this.LoginbaseUrl + Constant.getpurpose,{},{});
        }
        deepingcheck(struserid,custID, cusType, bussinesunit){
          //  console.log(ipLink3 + "DeepeningValidation/" + struserid + "/" + custID + "/" + cusType + "/" + bussinesunit);
            return this.http.get(this.LoginbaseUrl + Constant.DeepeningValidation + struserid + "/" + custID + "/" + cusType + "/" + bussinesunit,{},{});
          }
          getInsuranceType(){
            return this.http.get(this.LoginbaseUrl + Constant.getInsuranceType,{},{});
          }

          getInsuranceSource(){
            return this.http.get(this.LoginbaseUrl + Constant.getInsuranceSource,{},{});
          }

          getinsurancedetails(value){
            return this.http.get(this.LoginbaseUrl + Constant.getInsuranceDet +value,{},{});
         }

         getmycustomerproduct(){
          return this.http.get(this.LoginbaseUrl + Constant.getProductListCategory,{},{});
        }
        getmycustomersubproduct(typeid,custid){
          return this.http.get(this.LoginbaseUrl + Constant.getProductListSubCategory +typeid+"/"+custid,{},{});
        }

        updateentryscreen(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, mode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, InsuranceVal){
          return this.http.get(this.LoginbaseUrl + Constant.EntryScreen + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/" + mode + "/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit + "/" + depositVal + "/" + casaVal + "/" + AdvanceVal + "/" + InsuranceVal,{},{});
          // return $http.get(ipLink1 + "EntryScreen/" + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/" + mode + "/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit + "/" + depositVal + "/" + casaVal + "/" + AdvanceVal + "/" + InsuranceVal);
        }
        saveaddress(CRMID, LatValue, Langvalue, Address, purpose, CBSCustomerid){
          //  console.log(ipLink3 + "PVaddress/" + CRMID + "/" + LatValue + "/" + Langvalue + "/" + Address + "/" + "/" + purpose + "/" + CBSCustomerid);
            return this.http.get(this.LoginbaseUrl + Constant.PVaddress + CRMID + "/" + LatValue + "/" + Langvalue + "/" + Address + "/" + purpose + "/" + CBSCustomerid,{},{});
          }
   getZeroStarCustomerDetail(Customerid, BranchID, UserID, UserType, cat){
     return this.http.get(this.LoginbaseUrl + Constant.GetZerostarCustomerDetail + Customerid + "/" + BranchID + "/" + UserID + "/" + UserType + "/" + cat ,{},{});
  }
  GetTotalBusinessExisitingZero(userID){
    
      return this.http.get(this.LoginbaseUrl + Constant.ZeroStarCustNewExistBusiness + userID+ "/E",{},{});
    }

    GetTotalBusinessNewZero(userID){
   
      return this.http.get(this.LoginbaseUrl + Constant.ZeroStarCustNewExistBusiness + userID+ "/F",{},{});
    }

    clickToCallCustomer(callerMobile,customerMobile,purpose) {
      //  console.log(ipLink1 + "ClickToCall_Customers/" + callerMobile + "/" + customerMobile + "/" + purpose);
        return this.http.get(this.LoginbaseUrl + Constant.ClickToCall_Customers + callerMobile + "/" + customerMobile + "/" + purpose,{},{});
      }
      callStatusCustomer(ID) {
        //  console.log(ipLink1 + "ClickToCallStatus_Customers/" + ID);
          return this.http.get(this.LoginbaseUrl + Constant.ClickToCallStatus_Customers + ID,{},{});
        }
        EndCAllClick1(customerId,customerName,customerMobile,userid,branchid,callerMobile,currDate,endDate,purpose) {
          //  console.log(ipLink1 + "EndCall_Click/" + customerId + "/" + customerName + "/" + customerMobile + "/" + userid + "/" + branchid + "/" + callerMobile + "/" + currDate + "/" + endDate + "/" + purpose);
            return this.http.get(this.LoginbaseUrl + Constant.EndCall_Click + customerId + "/" + customerName + "/" + customerMobile + "/" + userid + "/" + branchid + "/" + callerMobile + "/" + currDate + "/" + endDate + "/" + purpose,{},{});
          }
    // SMA

  GetSMAAcount( UserID, BranchID ){
       return this.http.get(this.LoginbaseUrl + Constant.GetSMAAcount + UserID + "/" +  BranchID,{},{});
  }

  getsmaRecoveryAmount(userid,userType,branchid) {
    //  console.log(ipLink + "SMARecoveryAmount/" + userid + "/" + userType + "/" + branchid);
      return this.http.get(this.LoginbaseUrl + Constant.SMARecoveryAmount + userid + "/" + userType + "/" + branchid,{},{});
    }

    getcustomerdetails(customerid) {
      //  console.log(ipLink4 + "getcustomerdetails/" + customerid);
        return this.http.get(this.LoginbaseUrl + Constant.getcustomerdetails + customerid,{},{});
      }

      getbusinessunit(){
        //  console.log(ipLink1 + "getproduct");
          return this.http.get(this.LoginbaseUrl + Constant.getbusinessunit,{},{});
        }
        updatecustomercalls(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit) {
          //  console.log(ipLink1 + "CCMycustomer/" + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit);
            return this.http.get(this.LoginbaseUrl +Constant.updatecustomercalls  + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit,{},{});
          }
          getamount(date, accno, customerid) {
            //  console.log(ipLink1 + "getAmount/" + date + "/" + accno + "/" + customerid);
              return this.http.get(this.LoginbaseUrl + Constant.getAmount + date + "/" + accno + "/" + customerid,{},{});
            }      

  // NPA
  getNPAAccount(search, branchid, userid, usertype) {
    //  console.log(ipLink + "NPAAccounts/" + search + "/" + branchid + "/" + userid + "/" + usertype);
    return this.http.get(this.LoginbaseUrl + Constant.NPAAccounts + search + "/" + branchid + "/" + userid + "/" + usertype,{},{});
  }
  getNPARecoveryAmount(userid, mode, branchid) {
    //  console.log(ipLink + "NPARecoveryAmount/" + branchid + "/" + mode + "/" + userid);
    return this.http.get(this.LoginbaseUrl + Constant.NPARecoveryAmount + branchid + "/" + mode + "/" + userid,{},{});
  }
  getcustomerAccount(customerID) {
    //  console.log(ipLink + "NPAACCNO/" + customerID);
    return this.http.get(this.LoginbaseUrl + Constant.NPAACCNO + customerID,{},{});
  }
  getusername(usercode, branchid) {
    //  console.log(ipLink3 + "JointVisit/" + usercode + "/" + branchid);
    return this.http.get(this.LoginbaseUrl + Constant.JointVisit + usercode + "/" + branchid,{},{});
  }
  updateNPACustomer(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit) {
    //  console.log(ipLink + "CCNPAMycustomer/" + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit);
    return this.http.get(this.LoginbaseUrl + Constant.CCNPAMycustomer + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit,{},{});
  }
        // getcalloutcome1() {
        //   //  console.log(ipLink + "calloutcome1");
        //     return $http.get(ipLink + "calloutcome1");
        //   }

//Demand collecction

DemandCollectionCust(Callerid,Branchid,Mode){
  return this.http.get(this.LoginbaseUrl + Constant.DemandCollectionCust + Callerid+"/"+Branchid+"/"+Mode,{},{});
}

DemandEntry(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit) {
  //  console.log(ipLink1 + "CCMycustomer/" + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit);
    return this.http.get(this.LoginbaseUrl + Constant.DemandEntry  + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit,{},{});
  }
// Other Account

getOtherAccounts(userid, branchid) {
  //  console.log(ipLink + "OtherAccountRecoveryAmount/" + branchid + "/" + 'S' + "/" + userid);
    return this.http.get(this.LoginbaseUrl + Constant.OtherAccountRecoveryAmount + branchid + "/" + 'S' + "/" + userid,{},{});
  }
  updateotherAccount(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit) {
    //  console.log(ipLink1 + "OtherAccountcustomer/" + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit);
      return this.http.get(this.LoginbaseUrl + Constant.OtherAccountcustomer + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit,{},{});
    }
// MyCustomerDetails1(){ ZeromyCustomerDetail LeadManagement.svc/SMAAccounts/2606/1
//   //  const headers = new HttpHeaders().set('Content-Type', 'application/json');
//      return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/MyCustomer/null/1/2606/null/null");
//   }


// my Leads

myleadscreen (userid, branchid, customerid, BusinessUnit) {
  //  console.log(ipLink3 + "NewMyLeads/" + userid + "/" + branchid + "/" + customerid + "/" + BusinessUnit);
    return this.http.get(this.LoginbaseUrl + Constant.NewMyLeads + userid + "/" + branchid + "/" + customerid + "/" + BusinessUnit,{},{});
  }
  getcalloutcomenew(){
    //  console.log(ipLink4 + "getCallOutComeNew");
      return this.http.get(this.LoginbaseUrl + Constant.getCallOutComeNew,{},{});
    }
    getproductGroup(type){
      //  console.log(ipLink1 + "GetProductGroup/" + type);
        return this.http.get(this.LoginbaseUrl + Constant.GetProductGroup  + type,{},{});
      }
      getProduct(type,prodGroup){
        //  console.log(ipLink1 + "GetProduct/" + type + "/" + prodGroup);
          return this.http.get(this.LoginbaseUrl + Constant.GetProduct + type + "/" + prodGroup,{},{});
        }

        getPremiumPayTerm(){
          //  console.log(ipLink1 + "GetPremiumPayTerm");
            return this.http.get(this.LoginbaseUrl + Constant.GetPremiumPayTerm,{},{});
          }
          getPremiumPayMode() {
            //  console.log(ipLink1 + "GetPremiumPayMode");
              return this.http.get(this.LoginbaseUrl + Constant.GetPremiumPayMode,{},{});
            }
  // getbusinessunit(){
  //   //  console.log(ipLink1 + "getproduct");
  //     return this.http.get(this.LoginbaseUrl + Constant.getproduct);
  //   }

  // Express Leads
  expressLeadscreen(customerName, branchID, campID, mobile, userID){
    //  console.log(ipLink + "BusinessLead/" + customerName + "/" + branchID + "/" + campID + "/" + mobile + "/" + userID);
      return this.http.get(this.LoginbaseUrl + Constant.BusinessLead + customerName + "/" + branchID + "/" + campID + "/" + mobile + "/" + userID,{},{});
    }
    updateExpressLead(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, InsuranceVal) {
      //  console.log(ipLink + "BusinessEntryScreen/" + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit + "/" + depositVal + "/" + casaVal + "/" + AdvanceVal + "/" + InsuranceVal);
        return this.http.get(this.LoginbaseUrl + Constant.BusinessEntryScreen + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit + "/" + depositVal + "/" + casaVal + "/" + AdvanceVal + "/" + InsuranceVal,{},{});
      }
// RTGS-NEFT
getrtgsNeftDetalis(userid, branchid) {
  //  console.log(ipLink + "RNPARTA/" + userid + "/" + branchid);
    return this.http.get(this.LoginbaseUrl + Constant.RNPARTA + userid + "/" + branchid,{},{});
  }

  getrtgsNeftDetalisPartB(userid, branchid) {
    //  console.log(ipLink + "MOBNEFTRTGSLEADSPARTB/" + userid + "/" + branchid);
      return this.http.get(this.LoginbaseUrl + Constant.MOBNEFTRTGSLEADSPARTB + userid + "/" + branchid,{},{});
    }


//my wishlist add cusstomer
GetSegmentList(){
  //  console.log(ipLink + "calloutcome1");
    return this.http.get(this.LoginbaseUrl + Constant.GetSegmentList,{},{});
  }

//my wishlist secondary 

Getprimarycustomer(UserId, BranchId, wSTypes){
  return this.http.get(this.LoginbaseUrl + Constant.Getprimarycustomer  + UserId + "/" + BranchId + "/" + wSTypes,{},{});
}
// My wish Followup
getfollowupwishlist(UserId,BranchId){
  return this.http.get(this.LoginbaseUrl  + Constant.getfollowupwishlist + UserId + "/" + BranchId,{},{})
}
UpdateFollowupwishlistLeadConversion1(FunctionID,BranchID,txtcustid,firstname,lastname,moileno,userid,strUserCode,username,remarks,nextcalldate,nextfollwuptime,responseid,crmcallid,calltype,Rowid,usercode){
  return this.http.get(this.LoginbaseUrl + Constant.UpdateFollowupwishlistLeadConversion1 + FunctionID + "/" + BranchID + "/" + txtcustid + "/" + firstname + "/" + lastname + "/" + moileno + "/" + userid + "/" + strUserCode + "/" + username + "/" + remarks + "/" + nextcalldate + "/" + nextfollwuptime + "/" + responseid + "/" + crmcallid + "/" + calltype + "/" + Rowid + "/" + usercode,{},{});
}
UpdateFollowupwishlistLeadConversion(functionID,BranchID,productTypeID,txtcustId,firstName,lastName,MobIleNO,userid,userCode,username,remarks,ROWID,customerbranchID){
  return this.http.get(this.LoginbaseUrl + Constant.UpdateFollowupwishlistLeadConversion + functionID + "/" + BranchID + "/" + productTypeID + "/" + txtcustId + "/" + firstName + "/" + lastName + "/" + MobIleNO + "/" + userid + "/" + userCode + "/" + username + "/" + remarks + "/" + ROWID + "/" + customerbranchID,{},{})
}

UpdateC2CPrimarySecondaryCustomer(functionid,BranchID,BranchCode,CallSource,Purpose,ResponseID,customerName,mobileNumber,CBSCustomerID,Status,CreatedBy,callType,CallerID,nextcalldate,remarks,IPAddress,Mode,Callid,AccountNo,Amount,Collectiondate,Collectionmode,firstName,lastName,usercode){
  return this.http.get(this.LoginbaseUrl + Constant.UpdateC2CPrimarySecondaryCustomer + functionid + "/" + BranchID + "/" + BranchCode + "/" + CallSource + "/" + Purpose + "/" + ResponseID + "/" + customerName + "/" + mobileNumber + "/" + CBSCustomerID + "/" + Status + "/" + CreatedBy + "/" + callType + "/" + CallerID + "/" + nextcalldate + "/" + remarks + "/" + IPAddress + "/" + Mode + "/" + Callid + "/" + AccountNo + "/" + Amount + "/" + Collectiondate + "/" + Collectionmode + "/" + firstName + "/" + lastName + "/" + usercode,{},{})
}

// My Wish conversions
getconversiondata(UserId,BranchId){
  return this.http.get(this.LoginbaseUrl + Constant.getconversiondata + UserId + "/" + BranchId,{},{})
}


// Add Insurance
getInsurance(strParam,strCompany,strProducts){
  return this.http.get(this.LoginbaseUrl + Constant.getInsurance + strParam+ "/" + strCompany+ "/" + strProducts,{},{});
}

InsuranceInsertData(UserId,BranchId,SNewCustmer,CustName,Contact_Number,Customer_DOB,Gender,InsuranceType,Insurance_Provider,Insurance_Products,Insurance_Available_Products,customerId){
  return this.http.get(this.LoginbaseUrl + Constant.InsuranceInsertData + UserId + "/" + BranchId + "/" + SNewCustmer + "/" + CustName + "/" + Contact_Number + "/" + Customer_DOB + "/" + Gender + "/" + InsuranceType + "/" + Insurance_Provider + "/" + Insurance_Products + "/" + Insurance_Available_Products + "/" + customerId,{},{}); 
}

//Insurance Customer
getInsurancesearch(UserId,BranchId){
  return this.http.get(this.LoginbaseUrl + Constant.getInsurancesearch + UserId + "/" + BranchId,{},{})
}


// UVR

uvrPostBanking(formdata){
  // const headers = new HttpHeaders().set('Content-Type', 'application/json');
   return this.http.post(this.baseUrl + Constant.UVR_PostBankingData, formdata ,{});
}
uvrShowinputPost(formdata){
  // const headers = new HttpHeaders().set('Content-Type', 'application/json');
   return this.http.post(this.baseUrl + Constant.UVR_show_inputPostData, formdata ,{});
}


uvrGetAnswerData(formdata){
  // const headers = new HttpHeaders().set('Content-Type', 'application/json');
   return this.http.post(this.baseUrl + Constant.UVR_getAnswerData, formdata,{});
}
// saveComments

uvrGetAllcustomerData(formdata){
  // const headers = new HttpHeaders().set('Content-Type', 'application/json');
   return this.http.post(this.baseUrl + Constant.UVR_GetAllCustomerData, formdata ,{});
}

UVRgetHistoryDATEData(formdata){
  // const headers = new HttpHeaders().set('Content-Type', 'application/json');
   return this.http.post(this.baseUrl + Constant.UVR_getHistorydate, formdata ,{});
}

UVRgetHistoryData(formdata){
  // const headers = new HttpHeaders().set('Content-Type', 'application/json');
   return this.http.post(this.baseUrl + Constant.UVR_getHistorydata, formdata ,{});
}

UVRgetPositionoffacilities(formdata){
  // const headers = new HttpHeaders().set('Content-Type', 'application/json');
   return this.http.post(this.baseUrl + Constant.UVR_getPositionoffacilities, formdata ,{});
}

  //  login(data) {
  //  return this.http.post(this.LoginbaseUrl + Constant.UVR_LOGIN, data)
  //     // .pipe(
  //     //   catchError(this.handleError<User>('Error occured'))
  //     // );
  // }
  // public PostRequest(param) {
    
  //   return new Promise((resolve, reject) => {
      
  //     this.http.post('https://uatcrmapp.cityunionbank.in:8086/UVR/UVR/getAllCustomersMasterData', param, {
  //       headers: new HttpHeaders({
  //         "Content-Type": "application/json"
          
  //       })
  //     }).subscribe(resp => {
  //       resolve(resp);
  //     }, error => {
  //       reject(error);
  //     });
  
  //   });
  // }
  // getData() {
  //   return this.http.get(this.baseUrl + Constant.API_ENDPOINT,this.httpOptions);
  //     // .pipe(
  //     //   catchError(this.handleError<User>('Error occured'))
  //     // );
  // }



  /// Ramiz code

  getcalloutcomeNew(){
    //  console.log(ipLink + "calloutcome1");
      return this.http.get( "https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/getCallOutComeNew",{},{});
    }


  myassignedcallsdata(branchid, userid, usertype, customerid, customerName, purpose, mode){
    return this.http.get('https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/TMyFollowupcalls/' + userid + "/" + branchid + "/" + usertype + "/" + customerid + "/null/" + customerName + "/" + purpose + '/' + mode,{},{});

  }

  myfollowupcallsdata(branchid, userid, usertype, customerid, customerName, purpose, mode){
    debugger
    //  console.log(ipLink1 + "TMycalls/" + userid + "/" + branchid + "/" + usertype + "/" + Customerid + "/null/" + CustomerName + "/" + Purpose + "/" + mode);
    return this.http.get('https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/TMycalls/' + userid + "/" + branchid + "/" + usertype + "/" + customerid  + "/" +customerName+ "/" + purpose +"/null/"+ mode,{},{});
    }
    getpurposeold(){
 
      // const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');
      return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/lms.svc/purposeold",{},{});
      
      }

  
  getcalloutcome() {
    //  console.log(ipLink3 + "getcalloutcome");
      return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/lms.svc/getcalloutcome",{},{});
    }
    getdiarycountt (userid, branchid, fromdate, todate) {
      //  console.log("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/StaffDiarycount/" + userid + "/" + branchid + "/" + fromdate + "/" + todate + "/T");
         return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/StaffDiarycount/" + userid + "/" + branchid + "/" + fromdate + "/" + todate + "/T",{},{});
      }
  
      getdiarycountp(userid, branchid, fromdate, todate) {
      //  console.log("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/StaffDiarycount/" + userid + "/" + branchid + "/" + fromdate + "/" + todate + "/P");
         return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/StaffDiarycount/" + userid + "/" + branchid + "/" + fromdate + "/" + todate + "/P",{},{});
      }
  
      getdiarycountl(userid, branchid, fromdate, todate) {
  
      //  console.log("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/StaffDiarycount/" + userid + "/" + branchid + "/" + fromdate + "/" + todate + "/N");
         return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/StaffDiarycount/" + userid + "/" + branchid + "/" + fromdate + "/" + todate + "/N",{},{});
      }
    // getcustomerdetails(customerid){
    //   //  console.log(ipLink4 + "getcustomerdetails/" + customerid);
    //     return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/getcustomerdetails/" + customerid);
    //   } cmd by sijin

      getdiarydetails(userid, branchid, fromdate, todate) {
        return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/StaffDiarysummary/" + userid + "/" + branchid + "/" + fromdate + "/" + todate + "/null",{},{});
      }
      Exception_Mgr(branchid){
          return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/Exception_Mgr/" + branchid +"/null",{},{});
      }
      
  
      Exception_Staff(userid){
        return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/Exception_Staff/" + userid+"/null",{},{});
      }

      Exception_visitinsert(branchid,userid){
          return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/Exception_VisitInsert/" + branchid +"/"+userid,{},{});
      }
  
      userprofiledata(usercodeno) {
        return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LeadManagement.svc/UserProfile/" + usercodeno,{},{});
      }

      userprofileupload(loginid, useremail, mobno, dob) {
        return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LeadManagement.svc/UserProfileUpdate/" + loginid + "/" + useremail + "/" + mobno + "/" + dob,{},{});
      }

      Notifyalert(diviceid) {
        return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/NofityStatusAlert/"+ diviceid,{},{});
      }
      createnotificationlog(branchid,userid,notificationid){
        return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/InsertNotifyLogDetails/"+ branchid+ "/" + userid+ "/" + notificationid,{},{}); 
      }

      getentrypurpose() {
        return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/lms.svc/getentrypurpose",{},{});
      }

      managerEntryScreen(branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, mode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit, depositVal, casaVal, AdvanceVal, InsuranceVal) {
        //  console.log(ipLink1 + "ManagerEntryScreen/" + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/" + mode + "/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit + "/" + depositVal + "/" + casaVal + "/" + AdvanceVal + "/" + InsuranceVal);
        return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/ManagerEntryScreen/" + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/" + mode + "/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit + "/" + depositVal + "/" + casaVal + "/" + AdvanceVal + "/" + InsuranceVal,{},{});
        }

        // getheapmapstaff

        getheapmapstaff(userid, branchid) {
          //  console.log(ipLink3 + "HeatMapStaff/" + userid + "/" + branchid);
          return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/lms.svc/HeatMapStaff/" + userid + "/" + branchid,{},{});
          }

        
          getheapmapbranchname(userid, branchid) {
            //  console.log(ipLink3 + "HeatMapBranchName/" + userid + "/" + branchid);
            return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/lms.svc/HeatMapBranchName/" + userid + "/" + branchid,{},{});
            }


            getheapmap(userid, branchid) {
              //  console.log(ipLink3 + "ManagerHeatMap/" + userid + "/" + branchid);
              return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/lms.svc/ManagerHeatMap/" + userid + "/" + branchid,{},{});
              }

              getstaffheatmap(userid, branchid) {
                //  console.log(ipLink3 + "HeatMapStaff/" + userid + "/" + branchid);
                return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/lms.svc/HeatMapStaff/" + userid + "/" + branchid,{},{});
                }

                AssigneDdate () {
                  //  console.log(ipLink2 + "Assigneddate");
                  return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/Assigneddate",{},{});
                  }

                  updateassignedcalls (branchid, cbsid, customername, mobile, CallerId, username, calltype, remarks, purpose, responseid, nextcalldate, firstname, lastname, usercode, callid, accountno, amount, collectiondate, collectionmode, jointvisit, jointcode, Endtime, Totime, BusinessUnit) {
                    //  console.log(ipLink1 + "CCCalls/" + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit);
                    return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/CCCalls/" + branchid + "/" + cbsid + "/null/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit,{},{});
                
                      /*$http.get(ipLink1+"CCCalls/" + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/"+collectionmode+"/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime+"/"+BusinessUnit);*/
                    }

                    getcomcalls(purposeid, branchid, calltype, custid) {
                      //  console.log(ipLink2 + "commoncalls/" + userid + "/" + branchid + "/" + calltype + "/" + custid + "/null");
                      return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/commoncalls/" + purposeid + "/" + branchid + "/" + calltype + "/" + custid + "/null",{},{});
                  }

              
                  getEmployeeName(empcode,branchID) {
                    return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/lms.svc/JointVisit/" + empcode + "/" + branchID,{},{});
                  }
                  
                  clickToCall(callerNumber,customerNumber,purpose){
                    return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/ClickToCall_Calls/"+ callerNumber + "/" +customerNumber+ "/" + purpose,{},{})
                  }

                  clickToCallStatus(callid) {
                    return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/ClickToCallStatus_Calls/"+ callid ,{},{})
                  }

                  EndCAllClick(customerId,customerName,customerMobile,userid,branchid,callerMobile,currDate,endDate,purpose) {
                    return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/EndCall_Click/"+ customerId + "/" + customerName + "/" + customerMobile + "/" + userid + "/" + branchid + "/" + callerMobile + "/" + currDate + "/" + endDate + "/" + purpose,{},{})
                  }
                  // https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/ClickToCall_Calls/9490739835/7093603800/Birthday%20wishes
                      // getbusinesstype(cust) {
                      //   return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/GetProductType/" + cust ,{},{});
                      // }

                      // getproductGroup(type) {
                      //   //  console.log(ipLink1 + "GetProductGroup/" + type);
                      //   return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/GetProductGroup/" + type,{},{});
                      //   }
                  
                        getProductType(type,prodGroup) {
                          return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/GetProduct/" + type + "/" + prodGroup,{},{});
                        }

                        AccesstoClick(userID) {
                          return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/GetCallAccess/" + userID,{},{});
                        }

                        todayfollowdata(userid, branchid, customerid) {
                          //  console.log(ipLink2 + "todayfollow/" + userid + "/" + branchid + "/" + customerid);
                            return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/todayfollow/" + userid + "/" + branchid + "/" + customerid,{},{});
                          }

                          todayassigndata(userid, branchid, customerid) {
                            //  console.log(ipLink2 + "todayfollow/" + userid + "/" + branchid + "/" + customerid);
                              return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/todaymyassigned/" + userid + "/" + branchid + "/" + customerid,{},{});
                            }
                      
    targetbranchuserdatas(branchid, usercode, usertype) {
      //  console.log(ipLink2 + "TargetBranchUser/" + usercode + "/" + branchid + "/10");
      return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/TargetBranchUser/" + usercode + "/" + branchid + "/10",{},{});
      }

      targetuserdatas(branchid, usercode, usertype) {
        //  console.log(ipLink2 + "TargetUser/" + usercode + "/" + branchid + "/11");
        return this.http.get("https://uatcrmapp.cityunionbank.in:8084/newcrmapi/LMS.svc/TargetUser/" + usercode + "/" + branchid + "/11",{},{});
        }

                      

      // Ramesh code
      // my assigned visit
// getpurpose(){
//   debugger
//   const headers = new HttpHeaders().set('Content-Type', 'application/json');
//   return this.http.get(this.LoginbaseUrl+ Constant.ASSIGND_VISIT_PURPOSE);
// }
 
myfollowvisitdata(branchid,userid,usertype,purpose,customerid){
  debugger
  return this.http.get(this.LoginbaseUrl+ Constant.FOLLOWVISIT+userid+"/"+branchid+"/"+usertype+"/"+customerid+"/null"+"/"+purpose+"/"+"null/p",{},{});
}

clickToCallFollowUP(callermobile,customerMobile,purpose){

return this.http.get(this.LoginbaseUrl+Constant.FOLLOWVISITMODEL+callermobile+"/"+customerMobile+"/"+purpose,{},{})
}
EndcallClick(customerId,customerName,customerMobile,userid,branchid,callerMobile,currDate,endDate,purpose){
  return this.http.get(this.LoginbaseUrl + Constant.ENDCALL+ customerId + "/" + customerName + "/" + customerMobile + "/" + userid + "/" + branchid + "/" + callerMobile + "/" + currDate + "/" + endDate + "/" + purpose,{},{});
}
calloutcomeapi(){
  debugger
  return this.http.get(this.LoginbaseUrl+Constant.calloutapi,{},{})
}
myfollowupvisitsdata (branchid:any, userid:any, usertype:any,purpose:any,customerid:any) {
  debugger
//  console.log(ipLink1 + "PMycalls/" + userid + "/" + branchid + "/" + usertype +  "/" + customerid + "/null"+ "/" + purpose + "/"+"null/P");
  return this.http.get(this.LoginbaseUrl + Constant.FOLLOWVISIT + userid + "/" + branchid + "/" + usertype +  "/" + customerid + "/null"+ "/" + purpose + "/"+"null/P",{},{});
}
// getInsuranceType(){
//   debugger
//   return this.http.get(this.LoginbaseUrl+Constant.insurance)
// }
// getInsuranceSource(){
//   debugger
//   return this.http.get(this.LoginbaseUrl+Constant.insurancesource)
// }
// getinsurancedetails(val:any){
//   debugger
//   return this.http.get(this.LoginbaseUrl+Constant.getdetails+val)
// }
// getcustomerdetails(custid:any){

//   debugger
//   return this.http.get(this.LoginbaseUrl+Constant.custdetails+custid)
// }

getbusinesstype(cust){
  return this.http.get(this.LoginbaseUrl+Constant.getbusinesstype+cust,{},{});
}
myassignedvisitsdata(branchid,userid,usertype){
  debugger
  return this.http.get(this.LoginbaseUrl+Constant.myassignedvisitdata+userid+"/"+branchid+"/"+usertype+"/null/null/null/null/P",{},{})
}
getpurposenew(){
  debugger
  return this.http.get(this.LoginbaseUrl+Constant.getpurposenew,{},{})
}
getcomvisits(userid,branchid,calltype,custid){
  debugger
  return this.http.get(this.LoginbaseUrl+Constant.getcomvisit+userid+"/"+branchid+"/"+calltype+"/"+custid+"/null",{},{})
}
clickToCallCall (callerMobile:any,customerMobile:any,purpose:any) {
  //  console.log(ipLink1 + "ClickToCall_Calls/" + callerMobile + "/" + customerMobile + "/" + purpose);
    return this.http.get(this.LoginbaseUrl + Constant.clicktocall + callerMobile + "/" + customerMobile + "/" + purpose,{},{});
  }
  // getcalloutcome(){
  //   debugger
  //   return this.http.get(this.LoginbaseUrl+Constant.getcalloutcome)
  // }
  updatecommonvisits (branchid:any, cbsid:any, customername:any, mobile:any, CallerId:any, username:any, calltype:any, remarks:any, purpose:any, responseid:any, nextcalldate:any, firstname:any, lastname:any, usercode:any, callid:any, accountno:any, amount:any, collectiondate:any, collectionmode:any, jointvisit:any, jointcode:any, Endtime:"any", Totime:any, BusinessUnit:any, depositVal:any, casaVal:any, AdvanceVal:any, InsuranceVal:any) {
    debugger
    //  console.log(ipLink1 + "CCCommonInsert/" + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit + "/" + depositVal + "/" + casaVal + "/" + AdvanceVal + "/" + InsuranceVal);
      return this.http.get(this.LoginbaseUrl + Constant.CCCommonInsert + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit + "/" + depositVal + "/" + casaVal + "/" + AdvanceVal + "/" + InsuranceVal,{},{});
    }
   
      // saveaddress(CRMID, LatValue, Langvalue, Address, purpose, CBSCustomerid) {
      //   //  console.log(ipLink3 + "PVaddress/" + CRMID + "/" + LatValue + "/" + Langvalue + "/" + Address + "/" + "/" + purpose + "/" + CBSCustomerid);
      //     return this.http.get(this.LoginbaseUrl + Constant.saveaddress + CRMID + "/" + LatValue + "/" + Langvalue + "/" + Address + "/" + purpose + "/" + CBSCustomerid);
      //   }
        updateassignedvisits(branchid:any, cbsid:any, customername:any, mobile:any, CallerId:any, username:any, calltype:any, remarks:any, purpose:any, responseid:any, nextcalldate:any, firstname:any, lastname:any, usercode:any, callid:any, accountno:any, amount:any, collectiondate:any, collectionmode:any, jointvisit:any, jointcode:any, Endtime:any, Totime:any, BusinessUnit:any) {
          //  console.log(ipLink1 + "CCVisitEntry/" + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit);
            return this.http.get(this.LoginbaseUrl + Constant.CCVisitEntry + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + CallerId + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/null/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime + "/" + BusinessUnit,{},{});
          }

          gethistorydetails (cbscustomerId, BranchId) {
            //  console.log(ipLink2 + "HistoryDetails/" + cbscustomerId + "/" + BranchId);
              return this.http.get(this.LoginbaseUrl + Constant.gethistory + cbscustomerId + "/" + BranchId,{},{});
            }
            updatefollowcalls (STRUSERID:any, CUSTID:any, RESPONSE:any, REMARKS:any, BRANCH:any, NEXTCALLDATE:any, CALLID:any, CALLTYPE:any, usercode:any, AccountNo:any, Amount:any, Collectiondate:any, colectionmode:any, jointvisit:any, jointcode:any, Endtime:any, Totime:any) {
              //alert(latvalue)
            //  console.log(ipLink1 + "UpdateCourtesy/" + STRUSERID + "/" + CUSTID + "/" + RESPONSE + "/" + REMARKS + "/" + BRANCH + "/" + NEXTCALLDATE + "/" + CALLID + "/" + CALLTYPE + "/" + usercode + "/" + AccountNo + "/" + Amount + "/" + Collectiondate + "/" + colectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime);
              return this.http.get(this.LoginbaseUrl + Constant.updatefollowcalls + STRUSERID + "/" + CUSTID + "/" + RESPONSE + "/" + REMARKS + "/" + BRANCH + "/" + NEXTCALLDATE + "/" + CALLID + "/" + CALLTYPE + "/" + usercode + "/" + AccountNo + "/" + Amount + "/" + Collectiondate + "/" + colectionmode + "/" + jointvisit + "/" + jointcode + "/" + Endtime + "/" + Totime,{},{});
            }
            custIDValidate(customerId:any,Callid:any,TxtCustId:any,Branch:any,strBranch:any,strUserId:any) {
              //  console.log(ipLink1 + "CustIdValidation/" + customerId + "/" + Callid + "/" + TxtCustId + "/" + Branch + "/" + strBranch + "/" + strUserId );
                return this.http.get(this.LoginbaseUrl + Constant.CustIdValidation+ customerId + "/" + Callid + "/" + TxtCustId + "/" + Branch + "/" + strBranch + "/" + strUserId,{},{});
              }
              saveLeadConversion(CALLTYPE:any,CUSTID:any,planNumber:any,PolicyAmount:any,feeIncome:any,CALLID:any,productGroup:any,prodctType:any,depositVal:any,casaVal:any,AdvanceVal:any,InsuranceVal:any,BRANCH:any,firstName:any,LastName:any,email:any,mobile:any,usercode:any,product:any,REMARKS:any,opendate:any,policyNumber:any,premiumAmount:any,permiumPayTerm:any,permiumPayMode:any,STRUSERID:any,jointid:any) {
                //  console.log(ipLink1 + "LeadConversionSave/" + CALLTYPE + "/" + CUSTID + "/" + planNumber + "/" + PolicyAmount + "/" + feeIncome + "/" + CALLID + "/" + productGroup + "/" + prodctType + "/" + depositVal + "/" + casaVal + "/" + AdvanceVal + "/" + InsuranceVal + "/" + BRANCH + "/" + firstName + "/" + LastName + "/" + email + "/" + mobile + "/" + usercode + "/" + product + "/" + REMARKS + "/" + opendate + "/" + policyNumber + "/" + premiumAmount + "/" + permiumPayTerm + "/" + permiumPayMode + "/" + STRUSERID + "/" + jointid);
                  return this.http.get(this.LoginbaseUrl + Constant.LeadConversionSave + CALLTYPE + "/" + CUSTID + "/" + planNumber + "/" + PolicyAmount + "/" + feeIncome + "/" + CALLID + "/" + productGroup + "/" + prodctType + "/" + depositVal + "/" + casaVal + "/" + AdvanceVal + "/" + InsuranceVal + "/" + BRANCH + "/" + firstName + "/" + LastName + "/" + email + "/" + mobile + "/" + usercode + "/" + product + "/" + REMARKS + "/" + opendate + "/" + policyNumber + "/" + premiumAmount + "/" + permiumPayTerm + "/" + permiumPayMode + "/" + STRUSERID+ "/" + jointid,{},{});
                }
                appsearch(obj) {
                  debugger
                  return this.http.post(this.baseUrl+Constant.getusername,obj,{})
                  
                 }
                 getupdatefetch(formdata){
                   debugger
                  return this.http.post(this.baseUrl + Constant.appformdynamictabfieldanswer, formdata ,{});
                }
                 getDropDownComments(formdata){
                  return this.http.post(this.baseUrl + Constant.getdropdowncomments, formdata,{});
                }
                saveComments(data:any){
                  debugger
                  return this.http.post(this.baseUrl + Constant.saveComments, data ,{});
                }
                appformdetailinsert(data:any){
                  return this.http.post(this.baseUrl + Constant.appformdetailinsert, data ,{});
                }
                saveMandValidation(data:any){
                  return this.http.post(this.baseUrl + Constant.savemanvalidation, data ,{});
                }
                getCountMandValidation(obj:any) {
                  
                  return this.http.post(this.baseUrl + Constant.getCountMandValidation, obj,{})
                }
                getallsections(obj:any) {
                  return this.http.post(this.baseUrl + Constant.getallsections, obj,{})
                };
                deletelastValidation(obj:any) {
                  console.log(obj)
                  return this.http.post(this.baseUrl + Constant.deletelastValidation, obj,{})
                  
                };
                getLastVisitID (obj) {
                  debugger
                  return this.http.post(this.baseUrl + Constant.getLastVisitID, obj,{})
                    
                };
               updateVisitID(obj) {
                  debugger
                  return this.http.post(this.baseUrl + Constant.updateVisitID, obj,{})
                   
                };
                UvrInsertCourtesy(branchid:any, cbsid:any, customername:any, mobile:any, createdby:any, updatedby:any, ipaddress:any, username:any, calltype:any, remarks:any, purpose:any, responseid:any, callsource:any, nextcalldate:any, firstname:any, lastname:any, usercode:any, mode:any, callid:any, accountno:any, amount:any, collectiondate:any, collectionmode:any) {
                  return this.http.get(this.ipLink1 + Constant.UvrInsertCourtesy + branchid + "/" + cbsid + "/" + customername + "/" + mobile + "/" + createdby + "/" + updatedby + "/" + ipaddress + "/" + username + "/" + calltype + "/" + remarks + "/" + purpose + "/" + responseid + "/" + callsource + "/" + nextcalldate + "/" + firstname + "/" + lastname + "/" + usercode + "/" + mode + "/" + callid + "/" + accountno + "/" + amount + "/" + collectiondate + "/" + collectionmode,{}, {});
                }

                //ramesh
                loginMobileLos(username:any, password:any, companyname:any, sessionid:any, ip:any){
                  debugger
                  let credentials = {username :username,password : "null"};
                 return this.http.post(this.servicelink + Constant.loginMobileLos,credentials,{})
                }

                //performasnce
                perfdashmarks (userid:any) {
                  debugger
                 //  console.log(ipLink3 + "DashBoardScore/" + userid);
                   return this.http.get(this.ipLink1 + Constant.DashBoardScore + userid,{},{});
                 }
                 getperformdashboard(userid:any, branchid:any) {
                   debugger
                   //  console.log(ipLink3 + "NewDashBoard/" + userid + "/" + branchid);
                     return this.http.get(this.ipLink1 +Constant.NewDashBoard+ userid + "/" + branchid,{},{});
                   }
                   getplpCustomerBranch (userID:any) {
                     debugger
                     //  console.log(ipLink + "PLBCustomerBranch/" + userID);
                       return this.http.get(this.ipLink1 + Constant.PLBCustomerBranch + userID,{},{});
                     }
                     getplpCustomerBase (userID:any, userType:any, customerID:any, customerName:any, Branch:any, category:any) {
                       debugger
                       //  console.log(ipLink + "PLBCustomerBase/" + userID + "/" + userType + "/" + customerID + "/" + customerName + "/" + Branch + "/" + category);
                         return this.http.get(this.ipLink1 + Constant.PLBCustomerBase+ userID + "/" + userType + "/" + customerID + "/" + customerName + "/" + Branch + "/" + category,{},{});
                       }
                       //updatepwd
                       updatePWD (usercode:any,pwd:any) {
                         //  console.log(ipLink1 + "UpdatePwd/" + usercode + "/" + pwd);
                           return this.http.get(this.LoginbaseUrl + Constant.UpdatePwd + usercode + "/" + pwd,{},{});
                         }
                         sendOTP(usercode,otp){
                           return this.http.get(this.LoginbaseUrl+Constant.sentotp,{},{})
                         }
                         verifyfwdOTP(usercode:any,otp:any) {
                           //  console.log(ipLink1 + "VerifyOtp/" + usercode + "/" + otp);
                             return this.http.get(this.LoginbaseUrl + Constant.verifypwd + usercode + "/" + otp,{},{});
                           }
}
