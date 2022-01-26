import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MiPrimerPipe',
})
export class MiPrimerPipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return 'Este es mi primer pipe soy la verga';
  }
}
