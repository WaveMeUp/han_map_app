import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the OmsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OmsProvider {

  constructor(public http: Http) {
    console.log('Hello OmsProvider Provider');
  }

  get() {
    let data = [
      {
        "id": 1,
        "name": "Принятие на учет граждан"
      },
      {
        "id": 2,
        "name": "Предоставление информации"
      },
      {
        "id": 3,
        "name": "Консультация"
      }
    ]
    return data
  }

  getTime() {
    let data = [
      {
        "date": "04.01.2017",
        "maxTime": "11:15",
        "minTime": "09:15",
        "nowTime": "10:06",
        "time": ["09:15", "09:55", "10:35", "11:15"],
        "today": "30.12.2016",
        "visitLength": "40"
      },
      {
        "date": "11.01.2017",
        "maxTime": "11:15",
        "minTime": "09:15",
        "nowTime": "10:14",
        "time": ["09:15", "09:55", "10:35", "11:15"],
        "today": "30.12.2016",
        "visitLength": "40"
      }
    ]

    return data
  }

}
