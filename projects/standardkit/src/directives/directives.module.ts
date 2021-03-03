import { NgModule } from '@angular/core';
import { SkAutofocusDirective } from './autofocus.directive';
import { SkInputDirective } from './input.directive';

const DIRECTIVES = [
  SkAutofocusDirective,
  SkInputDirective
];

@NgModule({
  imports: [],
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class DirectivesModule {
}
