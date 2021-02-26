import { ModuleWithProviders, NgModule } from '@angular/core';
import { SkComponentsModule } from './components/components.module';
import { IconSetInterface } from './interfaces/icon-set.interface';

const MODULES = [
  SkComponentsModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class StandardKitModule {

  static withIcons(iconSet: string | IconSetInterface): ModuleWithProviders<StandardKitModule> {
    return {
      ngModule: StandardKitModule,
      providers: SkComponentsModule.withIcons(iconSet).providers
    };
  }
}
