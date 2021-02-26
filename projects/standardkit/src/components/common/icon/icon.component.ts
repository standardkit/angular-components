import { Component, Inject, Input } from '@angular/core';
import { SK_ICON_SET } from '../../../injection-tokens/icon-set.injection-token';
import { IconSetInterface } from '../../../interfaces/icon-set.interface';
import { AlertLevelType } from '../../../types/alert-level.type';

@Component({
  selector: 'sk-icon',
  templateUrl: 'icon.component.html'
})
export class SkIconComponent {
  @Input() class!: string;
  @Input() prefix!: string;
  @Input() icon!: string;
  @Input() type!: AlertLevelType;

  constructor(@Inject(SK_ICON_SET) private iconSet: IconSetInterface) {
  }

  // TODO Something with mapped icons for alert types // We have it
  // TODO FINISH this
  get classes(): string {
    const baseClass = this.class ?? this.iconSet.class ?? '';
    const prefix = this.prefix ?? this.iconSet.prefix ?? '';

    // Get icon
    const icon = this.icon ?? this.type ? this.getFromType() : '';
    return '';
  }

  private getFromType(): string {
    // this.type = this.type;
    // TODO : Implement
    return '';
  }
}
