import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  addProduct = this.form.group({
    productname:['',[Validators.required]],
    price:['',[Validators.required]],
    image:['',[Validators.required]],
    category:['',[Validators.required]],
    Description:['',[Validators.required]]
  })
  

  constructor(private form:FormBuilder,private adminservice:AdminserviceService) { }

  ngOnInit(): void {
  }

  //---------------------------------------------add product -------------------------------------------
  addproduct()  { 
    let productname = this.addProduct.value.productname
    let price = this.addProduct.value.price
    let image = this.addProduct.value.image
    let category = this.addProduct.value.category
    let Description = this.addProduct.value.Description

    this.adminservice.addproduct(productname,price,image,category,Description).subscribe((data:any) => {
      console.log(data)
      if(data){
        alert(data.message)
      }
      else{
        alert(data.error.message)
      }
    })
    

  }


}
