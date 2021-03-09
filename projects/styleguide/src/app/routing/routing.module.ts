import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StgOverviewPage } from '../pages/overview/overview.page';

const routes: Routes = [{
  path: '', component: StgOverviewPage
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
