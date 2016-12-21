import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ObjectDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-object-detail',
  templateUrl: 'object-detail.html'
})
export class ObjectDetailPage {
  data: Object

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.data
  }

  ionViewDidLoad() {
    // console.log('Hello ObjectDetailPage Page', this.data);
  }

}
