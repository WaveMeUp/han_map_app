import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

/*

  Провайдер для получения услуг и записи на них с сервера МФЦ

*/
@Injectable()
export class ServiceProvider {
  server: String = 'http://online.mfchmao.ru/enter' // URL системы МФЦ
  data: any

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }

  load() {
    return this.http.get(this.server + '/menu')
  }

  get(serviceId: any) {
    return this.data[serviceId]
  }

  setData(data: any) {
    this.data = data
  }

  getHours(id: any, date: any) {
    let params = new URLSearchParams()
    params.set('menuLinkId', id)
    params.set('date', date)
    return this.http.get(this.server + '/schedule/days', { search: params})
  }

  check(serviceId: any) {
    let params = new URLSearchParams()
    params.set('menuLinkId', serviceId)
    return this.http.get(this.server + '/schedule/days', { search: params })
  }

}
