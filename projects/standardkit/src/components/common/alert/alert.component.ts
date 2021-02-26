import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { AlertLevelType } from '../../../types/alert-level.type';

@Component({
  selector: 'sk-alert',
  templateUrl: 'alert.component.html'
})
export class SkAlertComponent implements AfterViewInit, OnChanges {
  @ViewChild('icon') iconRef!: ElementRef;

  @Input() type: AlertLevelType = 'error';
  @Input() hasIcon!: boolean;

  defaultHasIcon = false;
  hasIconContent = false;

  constructor() {
    // TODO : Get default setting from config
  }

  ngAfterViewInit(): void {
    this.checkContent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkContent();
  }

  private checkContent(): void {
    this.hasIconContent = this.iconRef.nativeElement.hasChildNodes();
  }
}
