import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { BreakpointType } from '../../../types/breakpoint.type';
import { SkNavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'sk-dashboard-layout',
  templateUrl: 'dashboard-layout.component.html'
})
export class SkDashboardLayoutComponent implements AfterContentInit {
  @ContentChild(SkNavigationBarComponent) navigationBar?: SkNavigationBarComponent;

  @Input() sticky?: boolean;
  @Input() collapsedUntil?: BreakpointType | string = 'm';

  isExpanded = false;

  ngAfterContentInit(): void {
    this.navigationBar?.toggle.subscribe(() => this.isExpanded = !this.isExpanded);
  }
}
