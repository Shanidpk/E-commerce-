import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/service/data-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  totel:Number = 0
  getCarted:any
  getAll:any
  getAllCart:any
  cartlength:any
  constructor(private http:HttpClient,private service:DataServiceService,private route:Router) { }

  ngOnInit(): void {
    this.getcart()
    this.service.selectdata
    
  }

  
  getcart(){
    this.http.get('http://localhost:3000/getCart').subscribe((data)=> {
      if(data){
        console.log("sdf",data);
        this.getCarted=data
        this.getAll=this.getCarted.item
        this.getAllCart=this.getAll
        
        this.cartlength = this.getAllCart.length
        //for getting the price
        
        for(let i:number=0;i<this.getAllCart.length;i++){
          this.totel=Number(this.totel)
          let price:any = Number(this.getAllCart[i].price)
          console.log(price)
          this.totel = this.totel+price
          console.log('totel',this.totel)
        }
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
    window.location.reload()
  }


  placeorder(totel:any){
    this.route.navigateByUrl('/details',totel)
  }

}
