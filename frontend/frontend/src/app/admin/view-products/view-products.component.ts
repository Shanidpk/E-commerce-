import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  abc:any
  id:any
  products:any
  productname:any
  price:any
  category:any
  image:any
  description:any  

  proId:any

  editform = this.form.group({
    productname:['',[Validators.required]],
    price:['',[Validators.required]],
    image:['',[Validators.required]],
    catagory:['',[Validators.required]],
    description:['',[Validators.required]]
  })
  

  constructor(private http:HttpClient,private form:FormBuilder,private editser:AdminserviceService) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.http.get('http://localhost:3000/getproduct').subscribe((data:any) => {
      if(data){
        this.products = data.item
        // console.log('data',this.products);      
      }
    })
  }

  changeproduct(){
    // this.id=product._id
    // this.productname=product.name
    // this.price=product.price
    // this.category=product.category
    // this.description=product.description
    // this.image=product.image
    // this.abc=product
    
    // console.log("addaad",this.abc)
    // this.editser.editproduct(this.id,this.productname,this.price,this.image,this.category,this.description).subscribe((data:any)=>{
    //   if(data){
    //     console.log("daaataaa",data)
    //    this.getProduct()
    //   }
    // })

    let name = this.editform.value.productname
    let price = this.editform.value.price
    let image = this.editform.value.image
    let catagory= this.editform.value.catagory
    let description = this.editform.value.description

    console.log(name,price,image,catagory,description)
     this.editser.editproduct(this.proId,name,price,image,catagory,description).subscribe((data) => {
       console.log("Edit data",data);
    })
  

  }

  modify(product:any){ //to show the data in the model
    console.log("id",product)
    
    this.editform.patchValue(product)
    this.proId = product
    console.log(this.proId)
    
  }

  delete(id:any){
      
  //   console.log("idididi",id)
  //      this.http.delete("http://localhost:3000/deleteproduct/",id).subscribe((data:any)=> {
  //       if(data){
  //        console.log("DATAAAAA",data);
  //       }
  //     })
  // }
  this.editser.deleteproduct(id).subscribe((data:any)=> {
    if(data){
      alert(data.message)
      this.getProduct()
    }else{
      alert(data.error.message)
    }
  })}


}
