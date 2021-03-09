import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StgDashboardLayout } from '../layout/dashboard/dashboard.layout';
import { StgOverviewPage } from '../pages/overview/overview.page';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'overview'},
  {
    path: '', component: StgDashboardLayout, children: [
      {path: 'overview', component: StgOverviewPage}
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StgRoutingModule {
}
