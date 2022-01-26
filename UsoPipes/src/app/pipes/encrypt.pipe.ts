import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encrypt',
})
export class EncryptPipe implements PipeTransform {
  transform(value: string, hidden: boolean = true): any {
    if (hidden) {
      value = value.replace(/[a-zA-Z1-9]/gi, '*');
    }
    return value;
  }
}
