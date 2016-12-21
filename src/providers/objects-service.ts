import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ObjectsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ObjectsService {

  data: any
  constructor(public http: Http) {
    console.log('Hello ObjectsService Provider');
  }

  load(filter: any) {
    let params = new URLSearchParams()
    params.set('chk1', filter.display.dumps)
    params.set('chk2', filter.display.roads)
    params.set('chk3', filter.display.offense)
    params.set('chk4', filter.display.improve)
    params.set('stat1', filter.status.solved)
    params.set('stat2', filter.status.processing)
    params.set('stat3', filter.status.not_solved)
    params.set('stat4', filter.status.accepted)

    return this.http.get('http://admhmansy.ru/map/json/getplacemark/index.php', { search: params })
  }

  set(data: any) {
    // console.log(data)
    this.data = data
  }

  get(objectId: number) {
    let object: Object = {};
    console.log(objectId)
    for (var prop in this.data) {
      // console.log(object, prop, this.data[prop])
      if (this.data[prop] instanceof Array ) object[prop] = this.data[prop][objectId]
    }
    return object;
  }

  transform(data: any) { // превращаем всё в массив объектов
    let mas = data
    let arr: Array<any> = []
    for (var i=0; i<data['Total']; i++) {
      let obj = {}
      Object.keys(mas).forEach(function(key) {
        obj[key] = mas[key][i]
      })
      arr.push(obj)
    }
    return arr
  }
}
