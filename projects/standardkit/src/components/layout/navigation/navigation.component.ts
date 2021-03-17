import { AfterContentInit, Component, ContentChildren, EventEmitter, Output, QueryList } from '@angular/core';
import { SkNavigationItemComponent } from '../navigation-item/navigation-item.component';

@Component({
  selector: 'sk-navigation',
  templateUrl: 'navigation.component.html'
})
export class SkNavigationComponent implements AfterContentInit {
  @ContentChildren(SkNavigationItemComponent) items!: QueryList<SkNavigationItemComponent>;

  @Output() navigate: EventEmitter<string | void> = new EventEmitter<string | void>();

  ngAfterContentInit(): void {
    this.items.forEach(
      (component: SkNavigationItemComponent) => {
        component.navigate.subscribe(
          (route?: string) => {
            this.navigate.emit(route);
          }
        );
      }
    );
  }

}
