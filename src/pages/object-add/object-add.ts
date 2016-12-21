import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the ObjectAdd page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-object-add',
  templateUrl: 'object-add.html'
})
export class ObjectAddPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss()
  }
  ionViewDidLoad() {
    console.log('Hello ObjectAddPage Page');
  }

}
