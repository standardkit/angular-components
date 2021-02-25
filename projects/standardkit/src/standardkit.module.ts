import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';

const MODULES = [
  ComponentsModule
];

@NgModule({
  imports: [],
  declarations: [],
  exports: MODULES
})
export class StandardkitModule {
}
