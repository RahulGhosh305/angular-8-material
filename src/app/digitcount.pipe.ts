import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "digitcount",
})
export class DigitcountPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value.toString().length;
  }
}
