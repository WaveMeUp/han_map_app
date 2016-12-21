import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ServiceHours page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-service-hours',
  templateUrl: 'service-hours.html'
})
export class ServiceHoursPage {
  title: string = this.navParams.data.title
  hours: any = this.navParams.data.hours
  date: any = this.navParams.data.date

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log(this.title,this.hours,this.date)
    console.log('Hello ServiceHoursPage Page');
  }

}
