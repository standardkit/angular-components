import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkHighlightComponent } from './highlight/highlight.component';
import { SkParagraphComponent } from './paragraph/paragraph.component';
import { SkSubtitleComponent } from './subtitle/subtitle.component';
import { SkTitleComponent } from './title/title.component';

const COMPONENTS = [
  SkHighlightComponent,
  SkParagraphComponent,
  SkSubtitleComponent,
  SkTitleComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SkTypographyModule {
}
