import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../shared/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serviceService:ServiceService) { }

  ngOnInit() {
    
  }

  click(){
    this.serviceService.counter+=1;
    this.serviceService.displayCounter();
  }

}
