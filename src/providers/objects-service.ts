import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { AuthProvider } from './auth-provider'
import 'rxjs/add/operator/map';

@Injectable()
export class ObjectsService {

  data: any
  selected_location: Array<number>

  constructor(public http: Http, private auth: AuthProvider) {
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

  add(form: any, coords: Array<number> ) {
    console.log(coords)
    let headers = new Headers();
    headers.set('Content-Type', 'application/x-www-form-urlencoded')
    let params = new URLSearchParams()
    params.set('access_token', this.auth.user.access_token)
    params.set('category', form.category)
    params.set('description', form.description)
    params.set('coordinates', JSON.stringify(coords))
    console.log(form.picture.toString())
    if (form.picture) params.set('picture', form.picture)
    let body = params.toString()
    return new Promise((resolve, reject) => {
      this.http.post('http://api.flower-almaty.kz' + '/place/add', body, {headers: headers}).subscribe(res => {
        resolve(res.json())
      }, err => {
        reject(err.json())
      })
    })


  }
}
