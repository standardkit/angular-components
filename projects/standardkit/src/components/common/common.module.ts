import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SK_CONFIGURATION, SkConfigurationService } from '../../configuration/configuration.service';
import { SkConfigurationInterface } from '../../configuration/configuration.interface';
import { SkAlertComponent } from './alert/alert.component';
import { SkBadgeComponent } from './badge/badge.component';
import { SkButtonGroupComponent } from './button-group/button-group.component';
import { SkButtonComponent } from './button/button.component';
import { SkCardComponent } from './card/card.component';
import { SkCodeBlockComponent } from './code-block/code-block.component';
import { SkIconComponent } from './icon/icon.component';
import { SkImageComponent } from './image/image.component';
import { SkSpinnerComponent } from './spinner/spinner.component';

const COMPONENTS = [
  SkAlertComponent,
  SkBadgeComponent,
  SkButtonComponent,
  SkButtonGroupComponent,
  SkCardComponent,
  SkCodeBlockComponent,
  SkIconComponent,
  SkImageComponent
  SkSpinnerComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SkCommonModule {
  static forRoot(configuration: SkConfigurationInterface): ModuleWithProviders<SkCommonModule> {
    return {
      ngModule: SkCommonModule,
      providers: [SkConfigurationService, {provide: SK_CONFIGURATION, useValue: configuration}]
    };
  }
}
