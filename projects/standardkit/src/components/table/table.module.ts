import { NgModule } from '@angular/core';
import { SkDirectivesModule } from '../../directives/directives.module';
import { SkTableComponent } from './table/table.component';

const COMPONENTS = [
  SkTableComponent
];

@NgModule({
  imports: [
    SkDirectivesModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SkTableModule {
}
