import { IEmployee } from '../employees/employee';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortemployees'
})
export class SortEmployeesPipe implements PipeTransform {

  transform(companies: IEmployee[], path: string[], order: number = 1): IEmployee[] {

    // Check if is not null
    if (!companies || !path || !order) {
        return companies;
    }

    return companies.sort((a: IEmployee, b: IEmployee) => {
      // We go for each property followed by path
      path.forEach(property => {
        a = a[property];
        b = b[property];
      });

      // Order * (-1): We change our order
      return a > b ? order : order * (- 1);
    });
  }

}
