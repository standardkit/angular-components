import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StandardKitModule } from '@standardkit/angular-components';
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
    StgLayoutModule,
    StandardKitModule.forRoot({
      iconSet: 'font-awesome',
      iconMap: {custom: 'bug'},
    })
  ],
  bootstrap: [
    StyleguideComponent
  ]
})
export class StyleguideModule {
}
