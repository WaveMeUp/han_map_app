import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OmsProvider } from '../../providers/oms-provider'
import { OmsTimePage } from '../oms-time/oms-time'

@Component({
  selector: 'page-oms-page',
  templateUrl: 'oms-page.html',
  providers: [OmsProvider]
})
export class OmsPage {
  data: any

  constructor(public navCtrl: NavController, public oms: OmsProvider, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.data = this.oms.get()
    console.log('Hello OmsPagePage Page');
  }

  openItem(item: any) {
    this.navCtrl.push(OmsTimePage, {title: item.name})
  }



}
