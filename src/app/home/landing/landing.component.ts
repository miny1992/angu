import { Component, OnInit } from '@angular/core';
import { MyIfDirective } from '../../shared/directives/my-if.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      
      //promise and observable
      
      const promise = new Promise(() => {
    console.log('promise: I was called!');
});
      const observable = new Observable(() => {
    console.log('observable: I was called only when subscribed!');
});
      //observable called only when subscribed
      console.log(observable.subscribe((data)=>data));
      
    const secondsPromise = new Promise((resolve, reject) => {
    let i = 0; 
    const token = setInterval(() => {
        resolve(i++);
    }, 1000);
  
   
});
      
      
const logSecondsPromise = 
    secondsPromise.then(value => console.log("prints values of interval starting from 1 using promise: "+value));
      
    const secondObservable = new Observable((observer) => {
        let i=0;
        const token = setInterval(()=>{
           observer.next(i++);
        },1000);
        
    })
    
    const logSecondsObservable = 
          secondObservable.subscribe((data)=>{
              if(data=='10'){
                  console.log("we dont want tokens after 10. so unsubscribing...")
                  logSecondsObservable.unsubscribe();
              }
              console.log("prints values from observable: "+data)
          },(error)=>console.error(error),()=>console.log("completed"));
      
      

  }

}
