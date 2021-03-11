import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StgDashboardLayout } from '../layout/dashboard/dashboard.layout';
import { StgAlertPage } from '../pages/alert/alert.page';
import { StgCodeBlockPage } from '../pages/code-block/code-block.page';
import { StgHighlightPage } from '../pages/highlight/highlight.page';
import { StgLinkPage } from '../pages/link/link.page';
import { StgOverviewPage } from '../pages/overview/overview.page';
import { StgParagraphPage } from '../pages/paragraph/paragraph.page';
import { StgSubtitlePage } from '../pages/subtitle/subtitle.page';
import { StgTitlePage } from '../pages/title/title.page';
import { StgRoutes } from './routes';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: StgRoutes.OVERVIEW},
  {
    path: '', component: StgDashboardLayout, children: [
      {path: StgRoutes.OVERVIEW, component: StgOverviewPage},

      {path: StgRoutes.ALERT, component: StgAlertPage},
      {path: StgRoutes.CODE_BLOCK, component: StgCodeBlockPage},
      {path: StgRoutes.HIGHLIGHT, component: StgHighlightPage},
      {path: StgRoutes.LINK, component: StgLinkPage},
      {path: StgRoutes.PARAGRAPH, component: StgParagraphPage},
      {path: StgRoutes.SUBTITLE, component: StgSubtitlePage},
      {path: StgRoutes.TITLE, component: StgTitlePage}
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StgRoutingModule {
}
