import { NgModule } from '@angular/core';
import { SkAutofocusDirective } from './autofocus.directive';
import { SkCaseDirective } from './case.directive';
import { SkColorDirective } from './color.directive';
import { SkCornerDirective } from './corner.directive';
import { SkElevationDirective } from './elevation.directive';
import { SkFillDirective } from './fill.directive';
import { SkFullWidthDirective } from './full-width.directive';
import { SkInputDirective } from './input.directive';
import { SkMarginDirective } from './margin.directive';
import { SkPaddingDirective } from './padding.directive';
import { SkTextMarginDirective } from './text-margin.directive';
import { SkTextSizeDirective } from './text-size.directive';
import { SkWidthDirective } from './width.directive';

const DIRECTIVES = [
  SkAutofocusDirective,
  SkCaseDirective,
  SkColorDirective,
  SkCornerDirective,
  SkElevationDirective,
  SkFillDirective,
  SkFullWidthDirective,
  SkInputDirective,
  SkMarginDirective,
  SkPaddingDirective,
  SkTextMarginDirective,
  SkTextSizeDirective,
  SkWidthDirective
];

@NgModule({
  imports: [],
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class SkDirectivesModule {
}
