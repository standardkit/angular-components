import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkCommonModule, SkTypographyModule } from '@standardkit/angular-components';
import { StgAlertPage } from './alert/alert.page';
import { StgCodeBlockPage } from './code-block/code-block.page';
import { StgHighlightPage } from './highlight/highlight.page';
import { StgLinkPage } from './link/link.page';
import { StgOverviewPage } from './overview/overview.page';
import { StgParagraphPage } from './paragraph/paragraph.page';
import { StgSubtitlePage } from './subtitle/subtitle.page';
import { StgTitlePage } from './title/title.page';

const PAGES = [
  StgAlertPage,
  StgCodeBlockPage,
  StgHighlightPage,
  StgLinkPage,
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
    CommonModule
  ],
  declarations: PAGES,
  exports: PAGES
})
export class StgPagesModule {
}
