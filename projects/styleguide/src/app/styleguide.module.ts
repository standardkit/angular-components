import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing/routing.module';
import { StyleguideComponent } from './styleguide.component';

@NgModule({
  declarations: [
    StyleguideComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  bootstrap: [
    StyleguideComponent
  ]
})
export class StyleguideModule {
}
