import { Component, Input } from '@angular/core';
import { AlertLevel } from '../../../types/alert-level.type';

@Component({
  selector: 'sk-alert',
  templateUrl: 'alert.component.html'
})
export class SkAlertComponent {
  @Input() type: AlertLevel = 'error';
}
