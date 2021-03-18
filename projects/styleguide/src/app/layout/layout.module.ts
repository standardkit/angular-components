import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkCommonModule, SkLayoutModule, SkTypographyModule } from '@standardkit/angular-components';
import { StgCardLayout } from './card/card.layout';
import { StgDashboardLayout } from './dashboard/dashboard.layout';

const LAYOUTS = [
  StgCardLayout,
  StgDashboardLayout
];

@NgModule({
  imports: [
    RouterModule,
    SkLayoutModule,
    SkTypographyModule,
    SkCommonModule
  ],
  declarations: LAYOUTS,
  exports: LAYOUTS
})
export class StgLayoutModule {
}
