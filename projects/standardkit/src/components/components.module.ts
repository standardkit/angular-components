import { ModuleWithProviders, NgModule } from '@angular/core';
import { SK_CONFIGURATION, SkConfigurationService } from '../configuration/configuration.service';
import { SkConfigurationInterface } from '../configuration/configuration.interface';
import { SkCommonModule } from './common/common.module';
import { SkFormModule } from './form/form.module';
import { SkGridModule } from './grid/grid.module';
import { SkLayoutModule } from './layout/layout.module';
import { SkTableModule } from './table/table.module';
import { SkTypographyModule } from './typography/typography.module';

const MODULES = [
  SkCommonModule,
  SkFormModule,
  SkGridModule,
  SkLayoutModule,
  SkTableModule,
  SkTypographyModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class SkComponentsModule {

  static forRoot(configuration: SkConfigurationInterface): ModuleWithProviders<SkComponentsModule> {
    return {
      ngModule: SkComponentsModule,
      providers: [SkConfigurationService, {provide: SK_CONFIGURATION, useValue: configuration}]
    };
  }
}
