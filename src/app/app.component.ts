import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstangular';

  //step -1(P-C)
  subjectParent:object=[
    {id:1,name:'from (app.component) parent'},
    {id:2,name:'from (app.component) parent'}
  ];

  //step -6(c-p)
  myrandomNumber:Number;
  //step -5(c-p)
  public onNumberGenerated(randomNumber: Number)
  {
    this.myrandomNumber=randomNumber;
  }

  }

