import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsService {
  constructor() { }

  counter:number=100;
  
  addaOne(){
    this.counter++;
  }

}
