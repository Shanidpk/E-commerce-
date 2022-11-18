import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/service/data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
    
  }

}
