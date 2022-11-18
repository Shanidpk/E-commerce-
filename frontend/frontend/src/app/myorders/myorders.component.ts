import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  products:any

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getorders()
    
  }

  getorders(){
    this.http.get('http://localhost:3000/orderpage').subscribe((data) => {
      this.products = data
      console.log(this.products)
    })
  }

}
