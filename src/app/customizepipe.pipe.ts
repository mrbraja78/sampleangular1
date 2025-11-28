import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customizepipe'
})
export class CustomizepipePipe implements PipeTransform {

  transform(value: any): unknown {
    return Math.sqrt(value);
  }


  
}
