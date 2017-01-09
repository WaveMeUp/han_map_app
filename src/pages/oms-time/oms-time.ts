import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OmsProvider } from '../../providers/oms-provider'

@Component({
  selector: 'page-oms-time',
  templateUrl: 'oms-time.html',
  providers: [OmsProvider]
})
export class OmsTimePage {
  title: string = this.navParams.data.title
  notEmpty: boolean = true
  data: any

  constructor(public navCtrl: NavController, public oms: OmsProvider, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.data = this.oms.getTime()
    if (this.data[0].date == 'Нет времени для записи') this.notEmpty = false
    console.log('Hello OmsTimePage Page');
  }

}
