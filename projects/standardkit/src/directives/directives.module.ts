import { NgModule } from '@angular/core';
import { SkAutofocusDirective } from './autofocus.directive';
import { SkFillDirective } from './fill.directive';
import { SkFullWidthDirective } from './full-width.directive';
import { SkInputDirective } from './input.directive';
import { SkMarginDirective } from './margin.directive';
import { SkPaddingDirective } from './padding.directive';

const DIRECTIVES = [
  SkAutofocusDirective,
  SkFillDirective,
  SkFullWidthDirective,
  SkInputDirective,
  SkMarginDirective,
  SkPaddingDirective
];

@NgModule({
  imports: [],
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class DirectivesModule {
}
