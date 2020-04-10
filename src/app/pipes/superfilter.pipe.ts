import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'superfilter'
})
export class SuperfilterPipe implements PipeTransform {

  transform(value: any, query?:string): any {
    return value.filter(function(item){
      return JSON.stringify(item).toLowerCase().includes(query.toLowerCase());
  });
  }
}
