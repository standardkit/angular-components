import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'sk-navigation-item',
  templateUrl: 'navigation-item.component.html'
})
export class SkNavigationItemComponent implements AfterViewInit {
  @ViewChild('icon') iconReference!: ElementRef;

  @Input() route?: string;
  @Input() icon?: string;

  isInitialized = false;
  hasIconContent = false;

  ngAfterViewInit(): void {
    this.hasIconContent = this.iconReference?.nativeElement.children.length > 0;
    setTimeout(() => this.isInitialized = true, 0);
  }
}
