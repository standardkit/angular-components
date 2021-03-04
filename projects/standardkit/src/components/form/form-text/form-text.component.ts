import { Component, Input } from '@angular/core';
import { AlertLevelType } from '../../../types/alert-level.type';

@Component({
  selector: 'sk-form-text',
  templateUrl: 'form-text.component.html'
})
export class SkFormTextComponent {
  @Input() state?: AlertLevelType;
}
