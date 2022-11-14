import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/service/data-service.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

product:any;
AddtoProduct:any

  constructor(private service:DataServiceService,private http:HttpClient,private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getproduct(params['id']))
    console.log("pro",this.product)
  }  
  getproduct(id:any){
    this.service.productdetails(id).subscribe((data:any)=> {
      console.log("dataadad",data)
      this.product = data;

      console.log("prorprpr",this.product)
    });
   
    
  }


  addtoCart(item:any){ 
    this.AddtoProduct=item
    console.log("dataaaa",this.AddtoProduct)
    this.http.post('http://localhost:3000/addtocart/',this.AddtoProduct).subscribe((data:any)=>{
      if(data){
        
        alert("added to cart")
      }
    })
}

}
