import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SkConfigurationInterface } from '../../configuration/configuration.interface';
import { SK_CONFIGURATION, SkConfigurationService } from '../../configuration/configuration.service';
import { SkDirectivesModule } from '../../directives/directives.module';
import { SkAlertComponent } from './alert/alert.component';
import { SkAvatarComponent } from './avatar/avatar.component';
import { SkBadgeComponent } from './badge/badge.component';
import { SkButtonGroupComponent } from './button-group/button-group.component';
import { SkButtonComponent } from './button/button.component';
import { SkCardComponent } from './card/card.component';
import { SkCodeBlockComponent } from './code-block/code-block.component';
import { SkDividerComponent } from './divider/divider.component';
import { SkIconComponent } from './icon/icon.component';
import { SkImageComponent } from './image/image.component';
import { SkSpinnerComponent } from './spinner/spinner.component';

const COMPONENTS = [
  SkAlertComponent,
  SkAvatarComponent,
  SkBadgeComponent,
  SkButtonComponent,
  SkButtonGroupComponent,
  SkCardComponent,
  SkCodeBlockComponent,
  SkDividerComponent,
  SkIconComponent,
  SkImageComponent,
  SkSpinnerComponent
];

@NgModule({
  imports: [
    CommonModule,
    SkDirectivesModule
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
