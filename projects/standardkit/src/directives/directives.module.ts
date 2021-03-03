import { NgModule } from '@angular/core';
import { SkAutofocusDirective } from './autofocus.directive';
import { SkInputDirective } from './input.directive';
import { SkPaddingDirective } from './padding.directive';

const DIRECTIVES = [
  SkAutofocusDirective,
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
