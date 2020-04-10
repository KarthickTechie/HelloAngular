import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indiancurrency'
})
export class IndiancurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
