import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value) {
      case 'fron-end': return 'code';
      case 'beck-end': return 'computer';
    }
    return 'code';
  }

}
