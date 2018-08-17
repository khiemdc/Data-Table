import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from '../employees/employee';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(value: IEmployee[], filterBy: string): IEmployee[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((employee: IEmployee) =>
            employee.Name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
