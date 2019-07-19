import { Pipe, PipeTransform } from '@angular/core';
import { Week } from '../models/custom-info.model';
import { skipUntil } from 'rxjs/operators';

@Pipe({
  name: 'weekDaysText'
})
export class WeekDaysTextPipe implements PipeTransform {

  transform(value: Week, ...args: any[]): any {
    const {sun, mon, tue, wed, thu, fri, sat} = value;

    if (sun && !mon && !tue && !wed && !thu && !fri && sat) return 'Weekends';
    if (!sun && mon && tue && wed && thu && fri && !sat) return 'Week days';

    const daysArray: String[] = [];

    if (sun) daysArray.push('Sun');
    if (mon) daysArray.push('Mon');
    if (tue) daysArray.push('Tue');
    if (wed) daysArray.push('Wed');
    if (thu) daysArray.push('Thu');
    if (fri) daysArray.push('Fri');
    if (sat) daysArray.push('Sat');

    return daysArray.join(', ');

  }

}
