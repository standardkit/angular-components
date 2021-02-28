import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SK_CONFIGURATION, SkConfigurationService } from '../../configuration/configuration.service';
import { SkConfigurationInterface } from '../../configuration/configuration.interface';
import { SkAlertComponent } from './alert/alert.component';
import { SkIconComponent } from './icon/icon.component';
import { SkSpinnerComponent } from './spinner/spinner.component';

const COMPONENTS = [
  SkAlertComponent,
  SkIconComponent,
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
