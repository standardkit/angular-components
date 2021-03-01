import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkParagraphComponent } from './paragraph/paragraph.component';
import { SkSubtitleComponent } from './subtitle/subtitle.component';
import { SkTitleComponent } from './title/title.component';

const COMPONENTS = [
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
