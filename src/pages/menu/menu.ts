import { Component } from '@angular/core';
import { MyApp } from '../../app/app.component';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { DashboardPage } from '../dashboard/dashboard'
import { ServicesPage } from '../services/services'
import { PoolsPage } from '../pools/pools'


/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  DashboardPage: any = DashboardPage
  ServicesPage: any = ServicesPage
  PoolsPage: any = PoolsPage

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl
  }

  openPage(page: any) {
    this.navCtrl.push(page)
  }

  ionViewDidLoad() {
    console.log('Hello MenuPage Page');
  }

  exit() {
    this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'backwards'})
  }

}
