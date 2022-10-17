import { Component, OnInit } from '@angular/core';
import{ ApiServiceService} from './../service/api-service.service';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.page.html',
  styleUrls: ['./heatmap.page.scss'],
})
export class HeatmapPage implements OnInit {
  staff : any = [];
  individuals: any = [];
  mangermap: any = [];
  username: any;
  code: any;
  staffmapdata: any =[];
  assignstartdate: any;
  assignstartend: any;
  constructor(private apiService : ApiServiceService) { }

  ngOnInit() {

    var userid = window.localStorage['branchID'];
      var branchid = window.localStorage['branchID'];
    this.apiService.getheapmapstaff(userid, branchid).then(response => {
      console.log(response)

      // var user = JSON.stringify(userDetails.data);
      // this.profileData = JSON.parse(user);
      // this.profileData = JSON.parse(this.profileData);
      // this.profileData = JSON.parse(this.profileData);
      var Value = JSON.stringify(response.data)
      Value = JSON.parse(Value);
      Value = JSON.parse(Value);
      Value = JSON.parse(Value);
      console.log("working",Value);
      this.staff =Value;
            //  this.staff =result;
    })

  
    this.apiService.getheapmapbranchname(userid, branchid).then(response => {
      console.log('laptop',response)
      var Value = JSON.stringify(response.data)
      Value = JSON.parse(Value);
      Value = JSON.parse(Value);
      Value = JSON.parse(Value);
      console.log("working",Value);
      this.individuals =Value;
    
    });


    this.apiService.getheapmap(userid, branchid).then(response => {
      var Value = JSON.stringify(response.data)
      Value = JSON.parse(Value);
      Value = JSON.parse(Value);
      Value = JSON.parse(Value);
      console.log("working",Value);
      this.mangermap =Value;
    
    });


    this.apiService.AssigneDdate().then(response => {
      var Value = JSON.stringify(response.data)
      Value = JSON.parse(Value);
      Value = JSON.parse(Value);
      Value = JSON.parse(Value);
      console.log("working",Value);
      this.assignstartdate =response[0].EndDate;
      this.assignstartend=response[0].StartDate;
      // this.mangermap =Value;

    //   response = JSON.parse(response);
    //   console.log(response);
    //  $scope.assignstartdate =response[0].EndDate;
    //  $scope.assignstartend=response[0].StartDate;
    
    });
  
 
  }


 openstaff(obj) {
    /*  debugger;*/
      console.log(obj)
    /*  window.location.href = "#/app/HeatMap";*/
    // var userid =obj.USERID;
    var userid = window.localStorage['branchID'];
    var branchid = window.localStorage['branchID'];
          // this.UpdateModal.show();
          this.username=obj.UserName;
            this.code=obj.UserCode;
        
          console.log(this.code);
          
  
       

              this.apiService.getstaffheatmap(userid, branchid).then(response => {
                var Value = JSON.stringify(response.data)
                Value = JSON.parse(Value);
                Value = JSON.parse(Value);
                Value = JSON.parse(Value);
                console.log("working",Value);
                this.staffmapdata =Value;
              
              });
   
          // $('.userDetails' + index_val).toggle();
     
     
  
      }
      doRefresh(event){
        setTimeout(() => {
          console.log('Async operation has ended');
          event.target.complete();
        }, 2000);
      }

}
