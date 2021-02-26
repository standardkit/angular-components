import { NgModule } from '@angular/core';
import { SkComponentsModule } from './components/components.module';

const MODULES = [
  SkComponentsModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class StandardkitModule {
}
