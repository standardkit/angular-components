import { NgModule } from '@angular/core';
import { SkTitleComponent } from './title/title.component';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  SkTitleComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SkTypographyModule {
}
