import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users:any
  constructor(private http:HttpClient,private adminser:AdminserviceService) { }

  ngOnInit(): void {
    this.getuser()
  }

  getuser(){
    this.http.get('http://localhost:3000/users').subscribe((user:any) => {
      console.log(user);
          
      this.users = user
        
       })
  }

  deleteuser(id:any){
    this.adminser.deleteuser(id).subscribe((data:any) => {
      if(data){
        alert(data.message)
        this.getuser()
      }else{
        alert(data.error.message)
      }
    })
  }

}
