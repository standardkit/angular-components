import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkCommonModule, SkLayoutModule } from '@standardkit/angular-components';
import { StgDashboardLayout } from './dashboard/dashboard.layout';

const LAYOUTS = [
  StgDashboardLayout
];

@NgModule({
  imports: [
    RouterModule,
    SkLayoutModule,
    SkCommonModule
  ],
  declarations: LAYOUTS,
  exports: LAYOUTS
})
export class StgLayoutModule {
}
