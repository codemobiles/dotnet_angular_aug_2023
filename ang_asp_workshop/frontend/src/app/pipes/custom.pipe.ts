import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ${
        args[0]
      }`;
    } else {
      return `0 บาท`;
    }
  }
}
