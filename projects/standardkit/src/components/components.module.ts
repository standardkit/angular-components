import { ModuleWithProviders, NgModule } from '@angular/core';
import { IconSetInterface } from '../interfaces/icon-set.interface';
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

  static withIcons(iconSet: string | IconSetInterface): ModuleWithProviders<SkComponentsModule> {
    return {
      ngModule: SkComponentsModule,
      providers: SkCommonModule.withIcons(iconSet).providers
    };
  }
}
