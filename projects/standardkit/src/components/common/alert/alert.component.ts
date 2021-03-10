import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { AlertLevelType } from '../../../types/alert-level.type';
import { CornerType } from '../../../types/corner.type';
import { FillType } from '../../../types/fill.type';
import { SizeType } from '../../../types/size.type';
import { VerticalPositionType } from '../../../types/vertical-position.type';

@Component({
  selector: 'sk-alert',
  templateUrl: 'alert.component.html'
})
export class SkAlertComponent implements AfterViewInit {
  @ViewChild('icon') iconReference!: ElementRef;
  @ViewChild('dismiss') dismissReference!: ElementRef;

  @Input() type: AlertLevelType | string = 'info';
  @Input() hasIcon?: boolean;
  @Input() dismissable?: boolean;
  @Input() icon?: string;
  @Input() alignIcon?: VerticalPositionType | string;
  @Input() dismissIcon?: string;
  @Input() alignDismiss?: VerticalPositionType | string;
  @Input() fill?: FillType | string;
  @Input() margin?: SizeType | string;
  @Input() padding?: SizeType | string;
  @Input() fullWidth?: boolean;
  @Input() corner?: CornerType | string;

  @Output() dismiss: EventEmitter<void> = new EventEmitter<void>();

  defaultHasIcon?: boolean;
  defaultDismissable?: boolean;
  defaultFill?: FillType | string;
  defaultMargin?: SizeType | string;
  defaultPadding?: SizeType | string;
  defaultFullWidth?: boolean;
  defaultCorner?: CornerType | string;

  isInitialized = false;
  hasIconContent = false;
  hasDismissContent = false;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultHasIcon = configuration?.alert?.hasIcon;
    this.defaultDismissable = configuration?.alert?.dismissable;
    this.defaultFill = configuration.alert?.fill ?? configuration.fill;
    this.defaultMargin = configuration.alert?.margin ?? configuration.margin;
    this.defaultPadding = configuration.alert?.padding ?? configuration.padding;
    this.defaultFullWidth = configuration.alert?.fullWidth;
    this.defaultCorner = configuration.alert?.corner ?? configuration.corner;
  }

  ngAfterViewInit(): void {
    this.hasIconContent = this.iconReference?.nativeElement.children.length > 0;
    this.hasDismissContent = this.dismissReference?.nativeElement.children.length > 0;
    setTimeout(() => this.isInitialized = true, 0);
  }

  onDismiss(): void {
    this.dismiss.emit();
  }
}
