import { NgModule } from '@angular/core';
import { SkAutofocusDirective } from './autofocus.directive';
import { SkCaseDirective } from './case.directive';
import { SkFillDirective } from './fill.directive';
import { SkFullWidthDirective } from './full-width.directive';
import { SkInputDirective } from './input.directive';
import { SkMarginDirective } from './margin.directive';
import { SkPaddingDirective } from './padding.directive';
import { SkSizeDirective } from './size.directive';

const DIRECTIVES = [
  SkAutofocusDirective,
  SkCaseDirective,
  SkFillDirective,
  SkFullWidthDirective,
  SkInputDirective,
  SkMarginDirective,
  SkPaddingDirective,
  SkSizeDirective
];

@NgModule({
  imports: [],
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class SkDirectivesModule {
}
