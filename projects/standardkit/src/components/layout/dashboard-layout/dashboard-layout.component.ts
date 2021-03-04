import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-dashboard-layout',
  templateUrl: 'dashboard-layout.component.html'
})
export class SkDashboardLayoutComponent {
  @Input() sticky?: boolean;
}
