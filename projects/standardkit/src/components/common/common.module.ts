import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IconSets } from '../../configurations/icon-sets';
import { SK_ICON_SET } from '../../injection-tokens/icon-set.injection-token';
import { IconSetInterface } from '../../interfaces/icon-set.interface';
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
  static withIcons(iconSet: string | IconSetInterface): ModuleWithProviders<SkCommonModule> {
    return {
      ngModule: SkCommonModule,
      providers: [{
        provide: SK_ICON_SET,
        useValue: typeof iconSet === 'string' ? this.getConfiguration(iconSet) : iconSet
      }]
    };
  }

  static getConfiguration(name: string): IconSetInterface {
    return IconSets.find(iconSet => iconSet.name === name) ?? {class: '', prefix: '', name: ''};
  }
}
