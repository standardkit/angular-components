import { Component, Input } from '@angular/core';
import { BreakpointType } from '../../../types/breakpoint.type';

@Component({
  selector: 'sk-dashboard-layout',
  templateUrl: 'dashboard-layout.component.html'
})
export class SkDashboardLayoutComponent {
  @Input() sticky?: boolean;
  @Input() collapsedUntil?: BreakpointType | string = 'm';
}
