import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {


  constructor(private http:HttpClient) { }

  addproduct(productname:any,price:any,image:any,category:any,description:any){
    const data = {
      productname,price,image,category,description
    }
    return this.http.post('http://localhost:3000/addProduct',data)
  }

  editproduct(id:any,productname:any,price:any,image:any,category:any,description:any){
    const data= {
      productname,price,image,category,description
    }
    return this.http.put('http://localhost:3000/editProduct/'+id,data)

  }

  deleteproduct(id:any){
    console.log("ID",id);
    return this.http.delete('http://localhost:3000/deleteproduct/'+id)
  }

  deleteuser(userid:any){
    return this.http.delete('http://localhost:3000/deleteuser/'+userid)
  }

  getorders(){
    return this.http.get('http://localhost:3000/orderpage')
  }
  

}
