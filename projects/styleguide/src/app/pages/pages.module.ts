import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkCommonModule, SkLayoutModule, SkTypographyModule } from '@standardkit/angular-components';
import { StgAlertPage } from './alert/alert.page';
import { StgBarPage } from './bar/bar.page';
import { StgButtonPage } from './button/button.page';
import { StgCodeBlockPage } from './code-block/code-block.page';
import { StgFigurePage } from './figure/figure.page';
import { StgHighlightPage } from './highlight/highlight.page';
import { StgImagePage } from './image/image.page';
import { StgLinkPage } from './link/link.page';
import { StgListPage } from './list/list.page';
import { StgOverviewPage } from './overview/overview.page';
import { StgParagraphPage } from './paragraph/paragraph.page';
import { StgSubtitlePage } from './subtitle/subtitle.page';
import { StgTitlePage } from './title/title.page';

const PAGES = [
  StgAlertPage,
  StgBarPage,
  StgButtonPage,
  StgCodeBlockPage,
  StgFigurePage,
  StgHighlightPage,
  StgImagePage,
  StgLinkPage,
  StgListPage,
  StgParagraphPage,
  StgSubtitlePage,
  StgTitlePage,
  StgOverviewPage
];

@NgModule({
  imports: [
    RouterModule,
    SkCommonModule,
    SkTypographyModule,
    CommonModule,
    SkLayoutModule
  ],
  declarations: PAGES,
  exports: PAGES
})
export class StgPagesModule {
}
