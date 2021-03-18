import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { ColorType } from '../../../types/color.type';
import { CornerType } from '../../../types/corner.type';
import { ElevationType } from '../../../types/elevation.type';
import { FillType } from '../../../types/fill.type';
import { SizeType } from '../../../types/size.type';

@Component({
  selector: 'sk-button',
  templateUrl: 'button.component.html'
})
export class SkButtonComponent {
  @Input() disabled = false;
  @Input() isSubmit = false;
  @Input() type?: ColorType | string;
  @Input() fill?: FillType | string;
  @Input() size?: SizeType | string;
  @Input() margin?: SizeType | string;
  @Input() padding?: SizeType | string;
  @Input() fullWidth?: boolean;
  @Input() corner?: CornerType | string;
  @Input() elevation?: ElevationType | string;

  @Output() skClick = new EventEmitter<void>();

  defaultFill?: FillType | string;
  defaultMargin?: SizeType | string;
  defaultPadding?: SizeType | string;
  defaultFullWidth?: boolean;
  defaultCorner?: CornerType | string;
  defaultElevation?: ElevationType | string;
  defaultSize?: SizeType | string;
  defaultType?: ColorType | string;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultFill = configuration?.button?.fill ?? configuration?.fill;
    this.defaultSize = configuration?.button?.size ?? configuration?.size;
    this.defaultMargin = configuration?.button?.margin ?? configuration?.margin;
    this.defaultPadding = configuration?.button?.padding ?? configuration?.padding;
    this.defaultFullWidth = configuration?.button?.fullWidth;
    this.defaultType = configuration?.button?.type;
    this.defaultCorner = configuration?.button?.corner ?? configuration?.corner;
    this.defaultElevation = configuration?.button?.elevation ?? configuration?.elevation;
  }

  onClick(): void {
    if (!this.disabled) {
      this.skClick.emit();
    }
  }
}
