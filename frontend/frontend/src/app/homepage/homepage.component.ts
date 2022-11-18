import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/service/data-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  products:any

  constructor(private data:DataServiceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getproducts()

  }

  getproducts(){
    this.http.get('http://localhost:3000/getproduct').subscribe((data:any) => {
      if(data){
        console.log(data.item)
        this.products = data.item
        console.log("Products",this.products)
      }
    })
  }

}
