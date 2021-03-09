import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkLayoutModule } from '@standardkit/angular-components';
import { StgDashboardLayout } from './dashboard/dashboard.layout';

const LAYOUTS = [
  StgDashboardLayout
];

@NgModule({
  imports: [
    RouterModule,
    SkLayoutModule
  ],
  declarations: LAYOUTS,
  exports: LAYOUTS
})
export class StgLayoutModule {
}
