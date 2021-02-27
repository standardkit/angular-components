import { ModuleWithProviders, NgModule } from '@angular/core';
import { SkComponentsModule } from './components/components.module';
import { SK_CONFIGURATION, SkConfigurationService } from './configurations/configuration.service';
import { SkConfigurationInterface } from './interfaces/configuration.interface';

const MODULES = [
  SkComponentsModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class StandardKitModule {

  static withConfiguration(configuration: SkConfigurationInterface): ModuleWithProviders<StandardKitModule> {
    return {
      ngModule: StandardKitModule,
      providers: [SkConfigurationService, {provide: SK_CONFIGURATION, useValue: configuration}]
    };
  }
}
