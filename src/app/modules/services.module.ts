import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ServicesPage } from '../../pages/services/services'
import { ServiceDatePage } from '../../pages/service-date/service-date'
import { ServiceHoursPage } from '../../pages/service-hours/service-hours'
import { OmsPage } from '../../pages/oms-page/oms-page'
import { OmsTimePage } from '../../pages/oms-time/oms-time'
import { getDatePipe, getMonthPipe } from '../../pipes/get-date'


@NgModule({
  imports: [
    IonicModule.forRoot(ServicesPage),
    IonicModule.forRoot(ServiceDatePage),
    IonicModule.forRoot(ServiceHoursPage),
    IonicModule.forRoot(OmsPage),
    IonicModule.forRoot(OmsTimePage)
  ],
  declarations: [
    ServicesPage,
    ServiceDatePage,
    ServiceHoursPage,
    getDatePipe,
    getMonthPipe,
    OmsPage,
    OmsTimePage
  ],
  exports: [
    ServicesPage,
    ServiceDatePage,
    ServiceHoursPage,
    OmsPage,
    OmsTimePage
  ]
})
export class ServicesModule {}
