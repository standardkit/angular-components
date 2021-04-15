import { NgModule } from '@angular/core';
import { SkAlignmentDirective } from './alignment.directive';
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
import { SkPositionDirective } from './position.directive';
import { SkSizeDirective } from './size.directive';
import { SkVerticalAlignmentDirective } from './vertical-alignment.directive';
import { SkWidthDirective } from './width.directive';

const DIRECTIVES = [
  SkAutofocusDirective,
  SkAlignmentDirective,
  SkVerticalAlignmentDirective,
  SkCaseDirective,
  SkColorDirective,
  SkCornerDirective,
  SkElevationDirective,
  SkFillDirective,
  SkFullWidthDirective,
  SkInputDirective,
  SkMarginDirective,
  SkPaddingDirective,
  SkPositionDirective,
  SkMarginDirective,
  SkSizeDirective,
  SkWidthDirective
];

@NgModule({
  imports: [],
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class SkDirectivesModule {
}
