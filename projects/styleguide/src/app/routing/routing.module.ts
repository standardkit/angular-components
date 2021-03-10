import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StgDashboardLayout } from '../layout/dashboard/dashboard.layout';
import { StgAlertPage } from '../pages/alert/alert.page';
import { StgHighlightPage } from '../pages/highlight/highlight.page';
import { StgOverviewPage } from '../pages/overview/overview.page';
import { StgRoutes } from './routes';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: StgRoutes.OVERVIEW},
  {
    path: '', component: StgDashboardLayout, children: [
      {path: StgRoutes.OVERVIEW, component: StgOverviewPage},

      {path: StgRoutes.ALERT, component: StgAlertPage},
      {path: StgRoutes.HIGHLIGHT, component: StgHighlightPage}
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StgRoutingModule {
}
