import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';  
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css'],
  providers:[MathsService] // injecting the service in component level only
})
export class ThirdComponentComponent implements OnInit {
  ngOnInit():void {  
     
  }  
  constructor(public _math:MathsService){
  }  
  Increase2()
  {
    this._math.addaOne();
  }

  //step 2(P-C)
  @Input() subjectChild;


  //step 1(c-p)
  @Output() private numberGenerated1=new EventEmitter<number>();


  //step 3(c-p)
  public generateNumber()
  {
    const randomNumber=Math.random();
    this.numberGenerated1.emit(randomNumber);
  }
}
