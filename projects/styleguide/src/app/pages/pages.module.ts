import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkCommonModule, SkTypographyModule } from '@standardkit/angular-components';
import { StgAlertPage } from './alert/alert.page';
import { StgHighlightPage } from './highlight/highlight.page';
import { StgOverviewPage } from './overview/overview.page';

const PAGES = [
  StgAlertPage,
  StgHighlightPage,
  StgOverviewPage
];

@NgModule({
  imports: [
    RouterModule,
    SkCommonModule,
    SkTypographyModule,
    CommonModule
  ],
  declarations: PAGES,
  exports: PAGES
})
export class StgPagesModule {
}