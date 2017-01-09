import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({ name: 'getDateTime'})
@Injectable()
export class getDatePipe implements PipeTransform {
  transform(day: any, month: any, year: any) {
      let date = new Date(year+ '/' + month + '/' + day)
      let options = {
        month: 'long',
        day: 'numeric'
      };
      date.toLocaleString('ru', options)
      let name = date.toLocaleString('ru', options)
      return name
  }
}

@Pipe({ name: 'getMonthName'})
@Injectable()
export class getMonthPipe implements PipeTransform {
  transform(year: any, month: any) {
    let date = new Date(year + '/' + month)
    let options = {
      month: 'long'
    };
    date.toLocaleString('ru', options)
    let name = date.toLocaleString('ru', options)
    name = name[0].toUpperCase() + name.slice(1)
    return name
  }
}
