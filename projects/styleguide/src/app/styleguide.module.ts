import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StgLayoutModule } from './layout/layout.module';
import { StgPagesModule } from './pages/pages.module';
import { StgRoutingModule } from './routing/routing.module';
import { StyleguideComponent } from './styleguide.component';

@NgModule({
  declarations: [
    StyleguideComponent
  ],
  imports: [
    BrowserModule,
    StgRoutingModule,
    StgPagesModule,
    StgLayoutModule
  ],
  bootstrap: [
    StyleguideComponent
  ]
})
export class StyleguideModule {
}
