import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: string): string {
    if(value==""){
        return "Unknown";
    }else{
        return value;
    }
  }
}
