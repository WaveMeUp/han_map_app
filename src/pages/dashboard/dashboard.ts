import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController, PopoverController } from 'ionic-angular';
import { ObjectsService } from '../../providers/objects-service'
import { ObjectsFiltersPage } from '../objects-filters/objects-filters'
import { ObjectsStatusPage } from '../objects-status/objects-status';
import { ObjectDetailPage } from '../object-detail/object-detail';
import { ObjectAddPage } from '../object-add/object-add'
import { Filter } from '../../models/filters'

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [ObjectsService]
})

export class DashboardPage {
  data: Array<any>
  full_data: Array<any> = []
  loading: any
  checkbox: Filter
  constructor(
    public navCtrl: NavController,
    public ObjectsService: ObjectsService,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public Filter: Filter,
    public popoverCtrl: PopoverController
  )
    {
      this.checkbox = Filter
      this.loading = this.loadingCtrl.create({
        content: 'Пожалуйста, подождите'
      });
    }
  showFilters() {
    let curFilters = this.checkbox.toString();
    console.log('current values is:', curFilters)
    let profileModal = this.modalCtrl.create(ObjectsFiltersPage);
    profileModal.onDidDismiss(() => {
      console.log('closed!!')
      console.log(curFilters)
      console.log(this.checkbox)
      this.loading = this.loadingCtrl.create({
        content: 'Пожалуйста, подождите'
      });
      this.loadData()
    });
    profileModal.present();
  }

  openStatusChange() {
    let profileModal = this.modalCtrl.create(ObjectsStatusPage);
    profileModal.onDidDismiss(() => {
      console.log('closed!!')
      this.loading = this.loadingCtrl.create({
        content: 'Пожалуйста, подождите'
      });
      this.loadData()
    });
    profileModal.present();
  }

  loadData() {
    this.loading.present()
    this.ObjectsService.load(this.checkbox).subscribe(res => { // получаем результаты запросы по объектам
      this.full_data = this.ObjectsService.transform(res ? res.json() : {})
      this.data = []
      for (var i = 0; i < 15; i++) {
        this.data.push(this.full_data[i])
      }
      console.log(this.data)
      this.ObjectsService.set(this.data)
      this.loading.dismiss()
    }, err => {
      // TODO обработку ошибоу
      console.log(err)
      this.loading.dismiss()
    })
  }

  openObject(object: any) {
    this.navCtrl.push(ObjectDetailPage, object)
  }

  addObject() {
    // this.navCtrl.push(ObjectAddPage)
    let ObjectAddModal = this.modalCtrl.create(ObjectAddPage);
    ObjectAddModal.present();
  }

  doInfinite(infiniteScroll) {
    let length = this.data.length
    if (length === this.full_data.length) {
      infiniteScroll.complete()
      return
    }
    setTimeout(() => {
      let check = (this.full_data.length - length) >= 15 ? 15 : (this.full_data.length - length)
      console.log(length, check)
      for (var i = 0; i < check; i++) {
        this.data.push(this.full_data[length + i])
      }
      console.log(this.data)
      infiniteScroll.complete()
    }, 500)
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(ObjectsFiltersPage);
    popover.present();
  }

  ionViewDidLoad() {
    this.loadData()
  }
}
