import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkCommonModule, SkLayoutModule, SkTableModule, SkTypographyModule } from '@standardkit/angular-components';
import { StgAlertPage } from './alert/alert.page';
import { StgBarPage } from './bar/bar.page';
import { StgButtonPage } from './button/button.page';
import { StgCodeBlockPage } from './code-block/code-block.page';
import { StgFigurePage } from './figure/figure.page';
import { StgHighlightPage } from './highlight/highlight.page';
import { StgIconPage } from './icon/icon.page';
import { StgImagePage } from './image/image.page';
import { StgLinkPage } from './link/link.page';
import { StgListPage } from './list/list.page';
import { StgLoginPage } from './login/login.page';
import { StgModalPage } from './modal/modal.page';
import { StgOverviewPage } from './overview/overview.page';
import { StgParagraphPage } from './paragraph/paragraph.page';
import { StgSubtitlePage } from './subtitle/subtitle.page';
import { StgTablePage } from './table/table.page';
import { StgTitlePage } from './title/title.page';

const PAGES = [
  StgAlertPage,
  StgBarPage,
  StgButtonPage,
  StgCodeBlockPage,
  StgFigurePage,
  StgHighlightPage,
  StgIconPage,
  StgImagePage,
  StgLinkPage,
  StgListPage,
  StgLoginPage,
  StgModalPage,
  StgOverviewPage,
  StgParagraphPage,
  StgSubtitlePage,
  StgTablePage,
  StgTitlePage
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SkCommonModule,
    SkTypographyModule,
    CommonModule,
    SkLayoutModule,
    SkTableModule
  ],
  declarations: PAGES,
  exports: PAGES
})
export class StgPagesModule {
}
