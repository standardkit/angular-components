import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'sk-card',
  templateUrl: 'card.component.html'
})
export class SkCardComponent implements AfterViewInit {
  @ViewChild('image') private imageRef!: ElementRef;
  @ViewChild('header') private headerRef!: ElementRef;
  @ViewChild('footer') public footerRef!: ElementRef;

  public hasImageContent = false;
  public hasHeaderContent = false;
  public hasFooterContent = false;

  private static hasContent(ref: ElementRef): boolean {
    return ref.nativeElement && ref.nativeElement.children.length > 0;
  }

  ngAfterViewInit(): void {
    // TODO: run this when the content changes as well. Check out cdkObserveContent for that
    this.hasImageContent = SkCardComponent.hasContent(this.imageRef);
    this.hasHeaderContent = SkCardComponent.hasContent(this.headerRef);
    this.hasFooterContent = SkCardComponent.hasContent(this.footerRef);
  }
}
