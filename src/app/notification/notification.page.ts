import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notifications: any;
  diviceid: any;
  UserType:any;
  shownotifications:any;
  userid:any;
  branchID: any;
  notificationstat : boolean = true;

  constructor(private appService: ApiServiceService) { }

  ngOnInit() {
   this.shownotifications = [];
   this.diviceid = localStorage.getItem('deviceID');
   this.UserType = window.localStorage['userType'];
   this.userid = window.localStorage['userID'];
   this.branchID = window.localStorage['branchID'];
  //  this.notifications;
  //   var promise;
  this.getnotificationalert();  
  }
  getnotificationalert () {
    //this.diviceid
      this.appService.Notifyalert(this.userid).then(response => {
        var user = JSON.stringify(response.data);
        this.notifications = JSON.parse(user);
        this.notifications = JSON.parse(this.notifications);
        this.notifications = JSON.parse(this.notifications);
        this.notifications = this.notifications['Table']

        // var result = response.data;

        // result = JSON.parse(result);
        // result = JSON.parse(result);
        // this.notifications = result['Table'];
        // var notification = JSON.stringify(response);
        // notification = JSON.parse(notification);
        // notification = JSON.parse(notification);
        // this.notifications = notification['Table'];
         this.notificationstat = false;

        console.log(this.notifications)
      })
        // .success(function (response) {
        //   response = JSON.parse(response);
        //   console.log(response)
        //  this.notifications = response.Table;
        //   angular.forEach(this.notifications, function(value, key) {
        //     // console.log(value,key);
        //     if(value.Message == "No Notification"){
        //       this.notificationstat = false;
        //     }else{
        //      this.notificationstat = true;
              
        //     }
        //  })
  
        // })
        // .error(function (response) {
        //   console.log(response);
        //   //this.hidespin();
  
        // });
  }
  showcontent(idx,item) {
    console.log(idx,item);
    if(this.shownotifications[idx] == true){
      this.shownotifications[idx] = false;
    }else if(this.shownotifications[idx] == false){
      this.shownotifications[idx] = true;
      if(item.ReadStatus != "R"){
        // this.createNotificationlog(item.Notificatonid);
        this.getnotificationalert();
      }
      
    }else{
      this.shownotifications[idx] = true;
      if(item.ReadStatus != "R"){
        // this.createNotificationlog(item.Notificatonid);
        this.getnotificationalert();
      }
    }
  }

  createNotificationlog(notificationid){
    var userid = window.localStorage['userID'];
    var branchID = window.localStorage['branchID'];
    this.appService.createnotificationlog(branchID,userid,notificationid).then(response => {
      console.log(response)
    })
    // .success(function (response) {
    //   response = JSON.parse(response);
   
    // })
    // .error(function (response) {
    //   console.log(response);
    // });
  }

  // goHome (){
  //   if (window.localStorage['userType'] == 17) {
  //     $state.go('app.newsummary');

  //   } else if (window.localStorage['userType'] == 14 || window.localStorage['userType'] == 26) {
  //     $state.go('app.regionsummary');
      
  //   } else {
  //     $state.go('app.myplanner');
  //   }
    
  // }

}
