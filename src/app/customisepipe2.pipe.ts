import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customisepipe2'
})
export class Customisepipe2Pipe implements PipeTransform {

  
  transform(value: any,limit: number): unknown {
    return value.substr(0,limit);
  }

}
