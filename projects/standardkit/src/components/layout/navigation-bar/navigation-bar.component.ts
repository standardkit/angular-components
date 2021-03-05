import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { CaseType } from '../../../types/case.type';
import { ColorType } from '../../../types/color.type';
import { FillType } from '../../../types/fill.type';
import { SizeType } from '../../../types/size.type';

@Component({
  selector: 'sk-navigation-bar',
  templateUrl: 'navigation-bar.component.html'
})
export class SkNavigationBarComponent {
  @HostBinding('class') class = 'navigation-bar__container';

  @Input() padding?: SizeType | string;
  @Input() fill?: FillType | string;
  @Input() color?: ColorType | string;
  @Input() size?: SizeType | string;
  @Input() case?: CaseType | string;
  @Input() sidebarToggleIcon?: string;

  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();

  defaultSidebarToggleIcon?: string;

  constructor(private configurationService: SkConfigurationService) {
    this.defaultSidebarToggleIcon = configurationService.get()?.iconMap?.menu;
  }

  onToggleSidebar(): void {
    this.toggle.emit();
  }
}
