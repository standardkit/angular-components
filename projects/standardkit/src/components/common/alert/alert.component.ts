import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { AlertLevelType } from '../../../types/alert-level.type';

@Component({
  selector: 'sk-alert',
  templateUrl: 'alert.component.html'
})
export class SkAlertComponent implements AfterViewInit {
  @ViewChild('icon') iconReference!: ElementRef;
  @ViewChild('dismiss') dismissReference!: ElementRef;

  @Input() type: AlertLevelType | string = 'info';
  @Input() hasIcon!: boolean;
  @Input() dismissable!: boolean;
  @Input() icon!: string;
  @Input() dismissIcon!: string;

  @Output() dismiss: EventEmitter<void> = new EventEmitter<void>();

  defaultHasIcon = false;
  defaultDismissable = false;

  hasIconContent = false;
  hasDismissContent = false;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultHasIcon = !!configuration?.alert?.hasIcon;
    this.defaultDismissable = !!configuration?.alert?.dismissable;
  }

  ngAfterViewInit(): void {
    this.hasIconContent = !!this.iconReference?.nativeElement.hasChildNodes();
    this.hasDismissContent = !!this.dismissReference?.nativeElement.hasChildNodes();
  }

  onDismiss(): void {
    this.dismiss.emit();
  }
}
