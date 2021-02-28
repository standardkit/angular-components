import { AfterContentInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[skAutoFocus]'
})
export class AutoFocusDirective implements AfterContentInit, OnChanges {
  @Input() skAutoFocus = false;

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
    if (this.skAutoFocus) {
      setTimeout(() => {
        this.element.nativeElement.focus();
      }, 0);
    }
  }
}
