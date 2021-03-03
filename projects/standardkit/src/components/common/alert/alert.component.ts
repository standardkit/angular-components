import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { AlertLevelType } from '../../../types/alert-level.type';
import { SizeType } from '../../../types/size.type';
import { VerticalPositionType } from '../../../types/vertical-position.type';

@Component({
  selector: 'sk-alert',
  templateUrl: 'alert.component.html'
})
export class SkAlertComponent implements AfterViewInit {
  @ViewChild('icon') iconReference?: ElementRef;
  @ViewChild('dismiss') dismissReference?: ElementRef;

  @Input() type: AlertLevelType | string = 'info';
  @Input() hasIcon?: boolean;
  @Input() dismissable?: boolean;
  @Input() icon?: string;
  @Input() alignIcon?: VerticalPositionType | string;
  @Input() dismissIcon?: string;
  @Input() alignDismiss?: VerticalPositionType | string;
  @Input() padding?: SizeType | string;
  @Input() fullWidth?: boolean;

  @Output() dismiss: EventEmitter<void> = new EventEmitter<void>();

  defaultHasIcon?: boolean;
  defaultDismissable?: boolean;
  defaultPadding?: SizeType | string;
  defaultFullWidth?: boolean;

  hasIconContent = false;
  hasDismissContent = false;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultHasIcon = configuration?.alert?.hasIcon;
    this.defaultDismissable = configuration?.alert?.dismissable;
    this.defaultPadding = configuration.alert?.padding ?? configuration.padding;
    this.defaultFullWidth = configuration.alert?.fullWidth;
  }

  ngAfterViewInit(): void {
    this.hasIconContent = !!this.iconReference?.nativeElement.hasChildNodes();
    this.hasDismissContent = !!this.dismissReference?.nativeElement.hasChildNodes();
  }

  onDismiss(): void {
    this.dismiss.emit();
  }
}
