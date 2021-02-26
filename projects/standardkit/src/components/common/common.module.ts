import { ModuleWithProviders, NgModule } from '@angular/core';
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
  imports: [],
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

  // TODO : Take mapping and isolate it. Use find() to get configuration
  static getConfiguration(iconSet: string): IconSetInterface {
    switch (iconSet) {
      case 'bootstrap-icons':
        return {name: 'bootstrap-icons', class: 'bi', prefix: 'bi-'};
      case 'material-design-icons':
        return {name: 'material-design-icons', class: 'mdi', prefix: 'mdi-'};
      case 'font-awesome':
        return {name: 'font-awesome', class: 'fa', prefix: 'fa-'};
      case 'css.gg':
        return {name: 'css.gg', class: '', prefix: 'gg-'};
      default:
        return {name: 'empty', class: '', prefix: ''};
    }
  }
}
