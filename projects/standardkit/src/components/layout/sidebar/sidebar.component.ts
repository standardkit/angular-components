import { AfterContentInit, Component, ContentChildren, EventEmitter, Output, QueryList } from '@angular/core';
import { SkNavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'sk-sidebar',
  templateUrl: 'sidebar.component.html'
})
export class SkSidebarComponent implements AfterContentInit {
  @ContentChildren(SkNavigationComponent) navigations!: QueryList<SkNavigationComponent>;

  @Output() navigate: EventEmitter<string | void> = new EventEmitter<string | void>();

  ngAfterContentInit(): void {
    this.navigations.forEach(
      (component: SkNavigationComponent) => {
        component.navigate.subscribe(
          (route?: string) => {
            this.navigate.emit(route);
          }
        );
      }
    );
  }
}
