import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { SkNavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { SkSidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'sk-dashboard-layout',
  templateUrl: 'dashboard-layout.component.html'
})
export class SkDashboardLayoutComponent implements AfterContentInit {
  @ContentChild(SkNavigationBarComponent) navigationBar?: SkNavigationBarComponent;
  @ContentChild(SkSidebarComponent) sidebar?: SkSidebarComponent;

  @Input() sticky?: boolean;

  isExpanded = false;

  ngAfterContentInit(): void {
    this.navigationBar?.toggle.subscribe(() => this.isExpanded = !this.isExpanded);
    this.sidebar?.navigate.subscribe(() => this.isExpanded = false);
  }
}
