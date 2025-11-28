import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';  
import { MathsService } from '../services/maths.service';
import { Observable,Subscription, filter, interval, map, of, take } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-first-component',

  /*the below selector as a attribute refer app.component.html
  selector: '[app-first-component]',*/

 /*the below selector as a class,
  selector: '.app-first-component',*/

  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit,OnDestroy {
  
  //Unsubscribe S3
  myDestroy: Subscription;
  
  ngOnInit():void { 

//observable S1
const myfunction$ = new Observable((result) => {
  console.log('observable started');
  
  //result.error();
  
  result.next(1);
  result.next(2);
  result.next(3);
  result.next(4);
  //result.error('not working');
  //result.complete();

  /*observable async*/
  /*setTimeout(() => {
    result.next(5);
  }, 8000);*/
  result.next(6);
  result.next(7);
  result.next(8);
  result.next(9);
  console.log('observable ended');
});

//subscribe S2
this.myDestroy=myfunction$.subscribe(sub=>{
  console.log(sub);
},
myerror=>{
  console.log('error is occured '+myerror);
},
()=>{
  console.log('completed');
}
);
//Unsubscribe S4
//this.myDestroy.unsubscribe();

//observable with RxJSoperator-1
/*const myfunctionwithoperator$=interval(1000).pipe(take(25))

//subscribe with RxJSoperator-1
this.myDestroy=myfunctionwithoperator$.subscribe(sub=>{
  console.log(sub);
});*/


//observable with RxJSoperator-2
/*const myfunctionwithoperatorOF$=of(1,2,3,4,5,6,7,8,9)
.pipe(filter(f=>f%2==0),map(m=>m*100));

//subscribe with RxJSoperator-2
this.myDestroy=myfunctionwithoperatorOF$.subscribe(sub=>{
  console.log(sub);
});*/


}
//Unsubscribe for RxJSoperator-1
ngOnDestroy(){
//this.myDestroy.unsubscribe();
}

  constructor(public _math:MathsService){
  }  

  Increase()
  {
    this._math.addaOne();
  }

  // T1  step3
  /*onsubmit(myform:NgForm)
  {
    console.log(myform);
    console.log('this is example for getting the form submitted values');
  }*/

  // T2  step2
  @ViewChild('userForm') uf:NgForm;
  
  //T2  step3 (Optional)
  setDefaultValue()
  {
  this.uf.setValue({
  email:'raja@gmail.com',
  password:'xyz',
  address:{
    country:'usa',
    city:'alaska'
  } 
  });

  //T2  step4 (Optional)
  /*this.uf.form.patchValue({
  email:'raja@gmail.com'
});*/

  }

  //T2  step5
  onsubmit()
  {
    console.log(this.uf);
   this.uf.reset();
  }
}
