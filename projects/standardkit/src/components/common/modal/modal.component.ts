import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { CornerType } from '../../../types/corner.type';
import { SizeType } from '../../../types/size.type';

@Component({
  selector: 'sk-modal',
  templateUrl: 'modal.component.html'
})
export class SkModalComponent {
  @Input() padding?: SizeType | string;
  @Input() elevation?: SizeType | string;
  @Input() corner?: CornerType | string;
  @Input() size?: SizeType | string;

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  defaultPadding?: SizeType | string;
  defaultCorner?: CornerType | string;
  defaultElevation?: SizeType | string;
  defaultSize?: SizeType | string;

  constructor(private configurationService: SkConfigurationService) {
    const config = configurationService.get();
    this.defaultPadding = config?.modal?.padding ?? config?.padding;
    this.defaultCorner = config?.modal?.corner ?? config?.corner;
    this.defaultSize = config?.modal?.size ?? config?.size;
    this.defaultElevation = config?.modal?.elevation ?? config?.elevation;
  }

  onClose(): void {
    this.close.emit();
  }

  onOutsideClick(): void {
    this.close.emit();
  }

  onModalClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
