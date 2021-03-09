import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkDirectivesModule } from '../../directives/directives.module';
import { SkHighlightComponent } from './highlight/highlight.component';
import { SkLinkComponent } from './link/link.component';
import { SkParagraphComponent } from './paragraph/paragraph.component';
import { SkSubtitleComponent } from './subtitle/subtitle.component';
import { SkTitleComponent } from './title/title.component';

const COMPONENTS = [
  SkHighlightComponent,
  SkLinkComponent,
  SkParagraphComponent,
  SkSubtitleComponent,
  SkTitleComponent
];

@NgModule({
  imports: [
    CommonModule,
    SkDirectivesModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SkTypographyModule {
}
