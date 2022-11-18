import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
selectdata:any
Proname:any
  constructor(private http:HttpClient) { }


  signup(name:any,phone:any,email:any,password:any){
    const data = {
      name,phone,email,password
    }
 
    return this.http.post('http://localhost:3000/signup',data)
  }

  login(email:any,password:any){
    const data = {
      email,password
    }
    console.log(data);
    
    return this.http.post('http://localhost:3000/login',data)
  }

  getproducts(){
    return this.http.get('http://localhost:3000/getproduct')
  }

   productdetails(id:any){
    
     return this.http.get('http://localhost:3000/single-product/'+id)
    //  .subscribe((data:any)=>{
    //     if(data){
    //       console.log("favasaaaaa",data)
    //       this.selectdata=data
    //       this.Proname = this.selectdata.productname
    //       console.log("f",this.selectdata)

    //     }
    // })
//-------------------------------------------------------------
  //   const data:any = await this.http.get(`http://localhost:3000/single-product/636bfd675dee1838cd3904cc`)
    
  //   this.selectdata = data.data
    
  //   console.log("DATA async",this.selectdata)
    
  // }
}


  buynow(productname:any,price:any,image:any,category:any,description:any,firstname:any,secondname:any,pin:any,address:any,email:any,phone:any,payment:any,amount:any,orderStatus:any){
      const data = {
        productname,
        price,
        image,
        category,
        description,
        firstname,
        secondname,
        pin,
        address,
        email,
        phone
        ,payment,
        amount,
        orderStatus
     }
     return this.http.post('http://localhost:3000/orders',data)
    }
}