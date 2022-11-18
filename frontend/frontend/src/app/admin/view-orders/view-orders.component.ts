import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
orders:any

  constructor(private http:HttpClient,private service:AdminserviceService) { }

  ngOnInit(): void {
    this.getorders()
  
  }


  getorders(){
    this.service.getorders().subscribe((data)=> {
      this.orders = data
      console.log("orders",this.orders)
    })
  }

  update(id:any){
    this.http.put('http://localhost:3000/orderchange/',id)
    console.log(id)
  }

}
