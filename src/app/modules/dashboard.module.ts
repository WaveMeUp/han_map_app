import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DashboardPage } from '../../pages/dashboard/dashboard';
import { ObjectsFiltersPage } from '../../pages/objects-filters/objects-filters';
import { ObjectDetailPage } from '../../pages/object-detail/object-detail';
import { ObjectsStatusPage } from '../../pages/objects-status/objects-status';
import { ObjectAddPage } from '../../pages/object-add/object-add'

@NgModule({
  imports: [
    IonicModule.forRoot(DashboardPage),
    IonicModule.forRoot(ObjectsFiltersPage),
    IonicModule.forRoot(ObjectDetailPage),
    IonicModule.forRoot(ObjectsStatusPage),
    IonicModule.forRoot(ObjectAddPage)
  ],
  declarations: [
    DashboardPage,
    ObjectsFiltersPage,
    ObjectDetailPage,
    ObjectsStatusPage,
    ObjectAddPage,
  ],
  exports: [
    DashboardPage,
    ObjectsFiltersPage,
    ObjectDetailPage,
    ObjectsStatusPage,
    ObjectAddPage
  ]
})
export class DashboardModule {}
