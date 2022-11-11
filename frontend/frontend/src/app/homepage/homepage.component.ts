import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/service/data-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  id:any 
  dataa:any
  constructor(private data:DataServiceService) { }

  ngOnInit(): void {
    this.id=this.data.selectdata
    this.dataa=this.id
    console.log("Product details",this.dataa);
    
  }

}
