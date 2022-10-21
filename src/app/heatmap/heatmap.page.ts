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
  
      this.staff =Value;
      console.log("this.staff",this.staff);
            //  this.staff =result;
    })

  
    this.apiService.getheapmapbranchname(userid, branchid).then(response => {
      console.log('laptop',response)
      var Value = JSON.stringify(response.data)
      Value = JSON.parse(Value);
      Value = JSON.parse(Value);
      Value = JSON.parse(Value);
     
      this.individuals =Value;
      console.log("this.individuals",this.individuals);
    
    });


    this.apiService.getheapmap(userid, branchid).then(response => {
      var Value = JSON.stringify(response.data)
      Value = JSON.parse(Value);
      Value = JSON.parse(Value);
      Value = JSON.parse(Value);
   
      this.mangermap =Value;
      console.log("this.mangermap",this.mangermap);
    
    });


    this.apiService.AssigneDdate().then(response => {
      var Value = JSON.stringify(response.data)
      Value = JSON.parse(Value);
      Value = JSON.parse(Value);
      Value = JSON.parse(Value);
      console.log("working",Value);
      this.assignstartdate =Value[0]['EndDate'];
      this.assignstartend=Value[0]['StartDate'];
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
               
                this.staffmapdata =Value;
                console.log("this.staffmapdata",this.staffmapdata);
              
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
