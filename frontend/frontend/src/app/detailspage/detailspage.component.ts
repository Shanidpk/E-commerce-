import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/service/data-service.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {

  product:any
  order:any = "placed"

  details = this.form.group({
    firstName:['',[Validators.required]],
    secondName:['',[Validators.required]],
    pincode:['',[Validators.required]],
    address:['',[Validators.required]],
    email:['',[Validators.required]],
    phone:['',Validators.required],
    payment:['',[Validators.required]]
  })

  constructor(private form:FormBuilder,private service:DataServiceService,private routr:ActivatedRoute) {
    
  }

  ngOnInit(): void {
    console.log(this.order)
    this.routr.params.subscribe(params => this.getproduct(params['id']))
    
  }

  getproduct(id:any){
    this.service.productdetails(id).subscribe((data:any)=> {
      console.log("dataadad",data)
      this.product = data;
      console.log("prorprpr",this.product)
    });
   
    
  }

  sumbit(){

    let firstname = this.details.value.firstName
    let secondname = this.details.value.secondName
    let pin = this.details.value.pincode
    let address = this.details.value.address
    let email = this.details.value.email
    let phone = this.details.value.phone
    let payment = this.details.value.payment
    let amount = this.product.price  //amount
    
    console.log("Name is",firstname,secondname,pin,address,email,phone,payment) 
    
    let productname=this.product.productname   
    let price=this.product.price
    let  image=this.product.image
    let category=this.product.category
    let description=this.product.description
    let orderStatus
    console.log("name",productname,price,image,category,description,orderStatus)
    if(this.details.valid){
      this.service.buynow(productname,price,image,category,description,firstname,secondname,pin,address,email,phone,payment,amount,orderStatus).subscribe((data)=> {
        if(data){
          alert("placed")
        }else{
          alert("error")
        }
      })
    }else{
      alert("please fill the form")
    }
  }  
}
