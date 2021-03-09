import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StgOverviewPage } from './overview/overview.page';

const PAGES = [
  StgOverviewPage
];

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: PAGES,
  exports: PAGES
})
export class StgPagesModule {
}
