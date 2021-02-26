import { NgModule } from '@angular/core';
import { SkSpinnerComponent } from './spinner/spinner.component';

const COMPONENTS = [
  SkSpinnerComponent
];

@NgModule({
  imports: [],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SkCommonModule {
}
