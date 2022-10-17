import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
@Component({
  selector: 'app-mywishaddcustomer',
  templateUrl: './mywishaddcustomer.page.html',
  styleUrls: ['./mywishaddcustomer.page.scss'],
})
export class MywishaddcustomerPage implements OnInit {
  allsegments: any;

  constructor(private Apiservice:ApiServiceService) { }

  ngOnInit() {
    this.getSegment();
  }
  getSegment(){
    // this.showspin();
    this.Apiservice.GetSegmentList().then((response:any)=>{
      // this.hidespin();

      var result = response.data;
      result = JSON.parse(result);
      result = JSON.parse(result);
      // console.log("SegmentOptions",response);
      // response = JSON.parse(response);
      this.allsegments = result;
      console.log("allSegments",this.allsegments)
    })
  }
}
