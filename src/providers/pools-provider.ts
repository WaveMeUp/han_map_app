import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PoolsProvider {

  constructor(public http: Http) {
    console.log('Hello Pools Provider');
  }

  load() {
    let pools =
    [{
      title: 'Вам нравится наше приложение?',
      answers: [{
        title: 'Да',
        result: 500
      },
      {
        title: 'Нет',
        result: 30
      }]
    },
    {
      title: 'Сколько вы получаете?',
      answers: [{
        title: '<15000',
        result: 100
      },
      {
        title: '15 000 - 30 000',
        result: 300
      },
      {
        title: '30 000 - 50 000',
        result: 400
      },
      {
        title: '>50000',
        result: 250
      }]
    }]

    return pools
  }

}
