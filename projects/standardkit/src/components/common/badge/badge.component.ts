import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-badge',
  templateUrl: 'badge.component.html'
})
export class SkBadgeComponent {
  @Input() type: 'error' | 'warning' | 'success' | 'info' = 'info';
}
