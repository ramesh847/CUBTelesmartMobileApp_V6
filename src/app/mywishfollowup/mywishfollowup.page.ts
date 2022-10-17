import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-mywishfollowup',
  templateUrl: './mywishfollowup.page.html',
  styleUrls: ['./mywishfollowup.page.scss'],
})
export class MywishfollowupPage implements OnInit {
  followupdata: any;
  followupData: any;

  constructor(private Apiservice:ApiServiceService) { }

  ngOnInit() {
    this.getFollowUpsdata();
  }
  getFollowUpsdata(){
    var BranchId = window.localStorage['branchID'];
    var UserId = window.localStorage['userID'];
    // this.showspin();
    this.Apiservice.getfollowupwishlist(UserId,BranchId).then((response:any)=>{
      // this.hidespin();
      console.log("FollowupData",response);
      var result = response.data;
      result = JSON.parse(result);
      result = JSON.parse(result);
      this.followupdata = result;
      // response = JSON.parse(response);
      this.followupData = result;
      console.log("followupData",this.followupData);
    })
  }
}
