import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/service/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm = this.FB.group({
  email:['',[Validators.required]],
  password:['',[Validators.required]]
 })

  constructor(private FB:FormBuilder,private loginService:DataServiceService,private route:Router) { }

  ngOnInit(): void {
    
    
  }
  
  login() {
   
    let email = this.loginForm.value.email
    let password = this.loginForm.value.password

    this.loginService.login(email,password).subscribe((data:any) => {
      if(data){
        if(this.loginForm.valid){
          alert(data.message)
          this.route.navigateByUrl('homepage')
        }
        else{
          alert("plese fill it")
        }
      }
      
        else{
          alert(data.error.message)
        }
        
      
     
    })
  }
}
