import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { AuthProvider } from './auth-provider'
import 'rxjs/add/operator/map';

/*

  Провайдер для получения услуг и записи на них с сервера МФЦ

*/
@Injectable()
export class ServiceProvider {
  server: String = 'http://online.mfchmao.ru/enter' // URL системы МФЦ
  data: any
  token: string = null

  constructor(public http: Http, private auth: AuthProvider) {
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
    return this.http.get(this.server + '/schedule/days', { search: params })
  }

  check(serviceId: any) {
    let params = new URLSearchParams()
    params.set('menuLinkId', serviceId)
    return this.http.get(this.server + '/schedule/days', { search: params })
  }

  getToken() {
    if (!this.token) {
      let headers = new Headers();
      headers.set('Content-Type', 'application/x-www-form-urlencoded')
      let login = 'wavemeup1@gmail.com'
      let pass = '3115455'
      let params = new URLSearchParams()
      params.set('login', login)
      params.set('password', pass)
      let body = params.toString()
      return new Promise((resolve, reject) => {
        this.http.post(this.server + '/login', body, { headers: headers }).subscribe(token => {
          resolve(token.json())
        }, err => {
          reject(err.json())
        })
      })
    }
  }

  book(time: any, item: any, token: string) {
    let second_name = this.auth.user.second_name
    let headers = new Headers();
    headers.set('Content-Type', 'application/x-www-form-urlencoded')
    headers.set('Authorization', token)
    let ProductRequiredFieldTypeId = item.Product.RequiredFields[0].Id
    let dataFields = JSON.stringify([{ProductRequiredFieldTypeId: ProductRequiredFieldTypeId, Value: second_name}])
    let params = new URLSearchParams()
    params.set('menuLinkId', item.Id)
    params.set('date', time.date),
    params.set('time', time.hours)
    params.set('dataFields', dataFields)
    params.set('confirm', 'true')
    let body = params.toString()
    return new Promise((resolve, reject) => {
      this.http.post(this.server + '/book', body, {headers: headers}).subscribe(res => {
        resolve(res.json())
      }, err => {
        reject(err.json())
      })
    })
  }
}
