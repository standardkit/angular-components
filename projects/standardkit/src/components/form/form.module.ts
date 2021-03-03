import { NgModule } from '@angular/core';
import { SkAutocompleteComponent } from './autocomplete/autocomplete.component';
import { SkCheckboxComponent } from './checkbox/checkbox.component';
import { SkDatePickerComponent } from './date-picker/date-picker.component';
import { SkFormTextComponent } from './form-text/form-text.component';
import { SkInputGroupComponent } from './input-group/input-group.component';
import { SkInputComponent } from './input/input.component';
import { SkLabelComponent } from './label/label.component';
import { SkNumberInputComponent } from './number-input/number-input.component';
import { SkOptionComponent } from './option/option.component';
import { SkPriceInputComponent } from './price-input/price-input.component';
import { SkRadioButtonComponent } from './radio-button/radio-button.component';
import { SkRangeComponent } from './range/range.component';
import { SkSelectComponent } from './select/select.component';
import { SkTextareaComponent } from './textarea/textarea.component';
import { SkToggleComponent } from './toggle/toggle.component';

const COMPONENTS = [
  SkAutocompleteComponent,
  SkCheckboxComponent,
  SkDatePickerComponent,
  SkFormTextComponent,
  SkInputComponent,
  SkInputGroupComponent,
  SkLabelComponent,
  SkNumberInputComponent,
  SkOptionComponent,
  SkPriceInputComponent,
  SkRadioButtonComponent,
  SkRangeComponent,
  SkSelectComponent,
  SkTextareaComponent,
  SkToggleComponent
];

@NgModule({
  imports: [],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SkFormModule {
}
