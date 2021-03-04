import { Component, Input } from '@angular/core';
import { AlertLevelType } from '../../../types/alert-level.type';

@Component({
  selector: 'sk-badge',
  templateUrl: 'badge.component.html'
})
export class SkBadgeComponent {
  @Input() type: AlertLevelType | string = 'info';
}
