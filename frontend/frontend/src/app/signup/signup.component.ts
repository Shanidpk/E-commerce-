import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/service/data-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = this.Form.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    phone:['',[Validators.required,Validators.pattern('[0-9]*')]],
    email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password:['',[Validators.required,Validators.minLength(6)]]
})



  constructor(private Form:FormBuilder,private data:DataServiceService,private router:Router) { 
  
    
  }

  ngOnInit(): void {
  }

  signup(){
    let name = this.signupForm.value.name
    let phone = this.signupForm.value.phone
    let email = this.signupForm.value.email
    let password = this.signupForm.value.password
   
    console.log('form values',this.signupForm.value);
   
   this.data.signup(name,phone,email,password).subscribe((data:any) => {
      if(data){
        if(this.signupForm.valid){
          alert(data.message)
          this.router.navigateByUrl('homepage')
        }else{
          alert(data.error.message)
        }
      }else{
        alert("Fill Your details")
      }
        
    })
  }
}
