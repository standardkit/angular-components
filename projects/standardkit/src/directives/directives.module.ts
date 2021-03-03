import { NgModule } from '@angular/core';
import { SkAutofocusDirective } from './autofocus.directive';
import { SkFullWidthDirective } from './full-width.directive';
import { SkInputDirective } from './input.directive';
import { SkPaddingDirective } from './padding.directive';

const DIRECTIVES = [
  SkAutofocusDirective,
  SkFullWidthDirective,
  SkInputDirective,
  SkPaddingDirective
];

@NgModule({
  imports: [],
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class DirectivesModule {
}
