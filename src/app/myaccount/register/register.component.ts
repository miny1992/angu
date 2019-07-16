import { Component, OnInit } from '@angular/core';
import { FormControl,NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any;
    name = "miny";
birthday = new Date(1988, 3, 15); // April 15, 1988
    
  constructor() { }

  ngOnInit() {
  }

  submit(){
      console.log(this.form);
  }

}
