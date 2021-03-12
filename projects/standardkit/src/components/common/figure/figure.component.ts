import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sk-figure',
  templateUrl: 'figure.component.html'
})
export class SkFigureComponent implements AfterViewInit {
  @ViewChild('caption') captionReference!: ElementRef;

  isInitialized = false;
  hasCaptionContent = false;

  ngAfterViewInit(): void {
    this.hasCaptionContent = this.captionReference?.nativeElement.children.length > 0;
    setTimeout(() => this.isInitialized = true, 0);
  }
}
