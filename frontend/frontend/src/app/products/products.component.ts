import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/service/data-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any
  AddtoProduct:any
  proId:any

  

  constructor(private http:HttpClient,private service:DataServiceService) { }

  ngOnInit(): void {
    this.getproducts()
  }

  getproducts(){
    this.service.getproducts().subscribe((data:any)=> {
      if(data){
        console.log("productdata",data)
        this.products = data.item
      }
    })
  }

  productdetails(id:any){
    this.proId = id
    console.log("new id",this.proId)
    this.service.productdetails(id)
    // console.log("productcompont",product);
  }
  
  
  

  

}
