import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input} from '@angular/core';
import { DataServiceService } from 'src/service/data-service.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  id:any 
  dataa:any
  Proname:any

  // new:any

  constructor(private service:DataServiceService) {
  }

  ngOnInit(): void {
    



     
  }  
   

}
