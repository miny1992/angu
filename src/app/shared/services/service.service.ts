import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  counter = 0;
  addCounter(){
    this.counter++;
  }
  displayCounter(){
    console.log(`the counter is ${this.counter}`)
  }
}
