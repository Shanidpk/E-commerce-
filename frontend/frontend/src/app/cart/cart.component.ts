import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/service/data-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  getCarted:any
  getAll:any
  getAllCart:any
  constructor(private http:HttpClient,private service:DataServiceService) { }

  ngOnInit(): void {
    this.getcart()
    this.service.selectdata
    console.log("service",this.service);
    
  }

  getcart(){
    this.http.get('http://localhost:3000/getCart').subscribe((data)=> {
      if(data){
        console.log(data);
        this.getCarted=data
        this.getAll=this.getCarted.item
        this.getAllCart=this.getAll
        console.log("getCarted",this.getAll)
        console.log("getCarted",this.getAllCart)   
      }
    })
  }

  remove(id:any){
  
    let iddd = id 
    this.http.delete('http://localhost:3000/removecart/'+iddd).subscribe((data)=> {
    console.log(data);
     
    if(data){
        console.log("data in remove",data)
        alert("product removed")
    this.getcart()

      }
    })
  }

}
