import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider'
import { ServiceDatePage } from '../service-date/service-date'

/*
  Generated class for the Services page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
  providers: [ServiceProvider]
})
export class ServicesPage {
  data: any
  title: any = this.navParams.data.object ? this.navParams.data.object.Name : 'Услуги МФЦ'

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private service: ServiceProvider, public navParams: NavParams) {}

  ionViewDidLoad() {
    if (this.navParams.data.object) {
      console.log(this.navParams.data.object)
      this.data = this.navParams.data.object.SubItems
      this.service.setData(this.data)
    }
      else
        this.loadServices()
    console.log('Hello ServicesPage Page');
  }

  loadServices() {
    let loader = this.loadingCtrl.create({
      content: "Пожалуйста, подождите"
    })
    loader.present()
    this.service.load().subscribe(res => {
      loader.dismiss();
      this.data = res.json().MenuItems
      this.service.setData(this.data)
      console.log(this.data)
    }, err => {
      loader.dismiss();
      console.log(err)
    })
  }

  openItem(item: any) {
    if (item.SubItems) {
      this.navCtrl.push(ServicesPage, {object: item})
    } else {
      this.service.check(item.Id).subscribe(res => {
        let dates = res.json()
        console.log(dates)
        this.navCtrl.push(ServiceDatePage, {item, dates})
      }, err => {
        console.log(err)
      })
      console.log('SubItems not found')
    }
  }

}
