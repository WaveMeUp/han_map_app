import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PoolsProvider } from '../../providers/pools-provider'

@Component({
  selector: 'page-pools',
  templateUrl: 'pools.html',
  providers: [PoolsProvider]
})
export class PoolsPage {
  pools: any

  constructor(public navCtrl: NavController, public poolsProvider: PoolsProvider) {}

  ionViewDidLoad() {
    this.pools = this.poolsProvider.load()
    console.log('Hello PoolsPage Page');
  }

}
