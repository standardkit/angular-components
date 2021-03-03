import { NgModule } from '@angular/core';
import { SkColumnComponent } from './column/column.component';
import { SkContainerComponent } from './container/container.component';
import { SkRowComponent } from './row/row.component';

const COMPONENTS = [
  SkColumnComponent,
  SkContainerComponent,
  SkRowComponent
];

@NgModule({
  imports: [],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SkGridModule {
}
