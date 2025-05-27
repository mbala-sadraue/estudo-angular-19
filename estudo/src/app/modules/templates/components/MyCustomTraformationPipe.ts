import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'myCustomTransformation',
})
export class MyCustomTransformationPipe  implements PipeTransform {
  transform(value:string): string{
    return value.toUpperCase();;
  }
}