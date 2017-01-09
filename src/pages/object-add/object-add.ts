import { Component } from '@angular/core';
import { NavController, ViewController, ActionSheetController, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms'
import { Camera } from 'ionic-native';
import { ObjectsService } from '../../providers/objects-service'
import { location } from '../../models/location'
import { LocationSelectPage } from '../location-select/location-select'

/*
  Generated class for the ObjectAdd page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-object-add',
  templateUrl: 'object-add.html',
  providers: [ObjectsService]
})
export class ObjectAddPage {
  form: any
  mapPage: any = LocationSelectPage
  coords: any = this.location.coords

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public actionSheetCtrl: ActionSheetController,
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController,
    private service: ObjectsService,
    public location: location,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
    this.form = this.formBuilder.group({
      description: ['', Validators.required],
      category: ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log(this.location.coords)
    console.log('Hello ObjectAddPage Page');
  }


  dismiss() {
    this.navCtrl.pop()
  }

  takePhoto() {
    Camera.getPicture({
      quality: 70,
      destinationType: 0
    }).then((imageData) => {
      this.form.value.picture = imageData
      // console.log(imageData)
    })
  }

  getPhotoFromGallery() {
    Camera.getPicture({
      sourceType: 0,
      destinationType: 0
    }).then((imageData) => {
      this.form.value.picture = imageData
      // console.log(imageData)
    })
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Загрузить фотографию',
      cssClass: 'action-sheet',
      buttons: [
        {
          text: 'Сделать фото',
          icon: 'camera',
          handler: () => {
            this.takePhoto()
            console.log('Take a photo clicked')
          }
        },
        {
          text: 'Выбрать из галлереи',
          icon: 'images',
          handler: () => {
            this.getPhotoFromGallery()
            console.log('Choose photo clicked')
          }
        },
        {
          text: 'Отмена',
          icon: 'close',
          role: 'cancel',
          handler: () => [
            console.log('Cancel clicked')
          ]
        }
      ]
    })
    actionSheet.present()
  }

  addObject() {
    // if (!this.form.valid) return false
    let loader = this.loadingCtrl.create({
      content: "Пожалуйста, подождите"
    })
    loader.present()
    console.log(this.form.value)
    this.service.add(this.form.value, this.location.get()).then(res => {
      console.log(res)
      loader.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Объект добавлен',
        duration: 3000
      })
      toast.present()
      this.navCtrl.popToRoot()
    }, err => {
      console.log(err)
      loader.dismiss()
      let toast = this.toastCtrl.create({
        message: 'Произошла ошибка. Повторите попытку позже',
        duration: 3000
      })
      toast.present()
      this.navCtrl.popToRoot()
    })
  }

  openMap() {
    this.navCtrl.push(LocationSelectPage)
  }


}
