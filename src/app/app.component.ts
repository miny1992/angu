import { Component } from '@angular/core';
import {ServiceService} from './shared/services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private serviceService:ServiceService){}
  title = 'projectAngular';
  

  ngOnInit(){
   
  }
}
