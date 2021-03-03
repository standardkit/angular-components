import { AfterContentInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[skAutofocus]'
})
export class SkAutofocusDirective implements AfterContentInit, OnChanges {
  @Input() skAutofocus?: boolean;

  loading = true;

  constructor(private element: ElementRef) {
  }

  ngAfterContentInit(): void {
    this.loading = false;
    this.focus();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.loading) {
      this.focus();
    }
  }

  protected focus(): void {
    if (this.skAutofocus) {
      setTimeout(() => {
        this.element.nativeElement.focus();
      }, 0);
    }
  }
}
