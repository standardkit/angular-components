import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { AlertLevelType } from '../../../types/alert-level.type';

@Component({
  selector: 'sk-alert',
  templateUrl: './alert.component.html'
})
export class SkAlertComponent implements AfterViewInit {
  @ViewChild('icon') iconReference!: ElementRef;
  @ViewChild('dismiss') dismissReference!: ElementRef;

  @Input() type: AlertLevelType | string = 'error';
  @Input() hasIcon!: boolean;
  @Input() isDismissable!: boolean;
  @Input() icon!: string;
  @Input() dismissIcon!: string;

  hasIconContent = false;
  hasDismissContent = false;

  defaultHasIcon = false;
  defaultIsDismissable = false;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultHasIcon = !!configuration?.alert?.hasIcon;
    this.defaultIsDismissable = !!configuration?.alert?.isDismissable;
  }

  ngAfterViewInit(): void {
    this.hasIconContent = !!this.iconReference?.nativeElement.hasChildNodes();
    this.hasDismissContent = !!this.dismissReference?.nativeElement.hasChildNodes();
  }
}
