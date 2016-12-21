import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ServicesPage } from '../../pages/services/services'
import { ServiceDatePage } from '../../pages/service-date/service-date'
import { ServiceHoursPage } from '../../pages/service-hours/service-hours'

@NgModule({
  imports: [
    IonicModule.forRoot(ServicesPage),
    IonicModule.forRoot(ServiceDatePage),
    IonicModule.forRoot(ServiceHoursPage)
  ],
  declarations: [
    ServicesPage,
    ServiceDatePage,
    ServiceHoursPage
  ],
  exports: [
    ServicesPage,
    ServiceDatePage,
    ServiceHoursPage
  ]
})
export class ServicesModule {}
