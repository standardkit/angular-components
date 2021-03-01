import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sk-card',
  templateUrl: 'card.component.html'
})
export class SkCardComponent implements AfterViewInit {
  @ViewChild('footer') footerRef!: ElementRef;
  @ViewChild('image') imageRef!: ElementRef;
  @ViewChild('header') headerRef!: ElementRef;

  hasImageContent = false;
  hasHeaderContent = false;
  hasFooterContent = false;

  ngAfterViewInit(): void {
    // TODO: run this when the content changes as well. Check out cdkObserveContent for that
    this.hasImageContent = !!this.imageRef?.nativeElement.hasChildNodes();
    this.hasHeaderContent = !!this.headerRef?.nativeElement.hasChildNodes();
    this.hasFooterContent = !!this.footerRef?.nativeElement.hasChildNodes();
  }
}
