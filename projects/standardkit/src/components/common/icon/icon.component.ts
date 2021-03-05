import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SkConfigurationInterface } from '../../../configuration/configuration.interface';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { SkIconMapConfiguration } from '../../../configuration/icon-map.configuration';
import { SkIconMapPresets } from '../../../configuration/icon-map.presets';
import { SkIconSetPresets } from '../../../configuration/icon-set.presets';
import { AlertLevelType } from '../../../types/alert-level.type';

@Component({
  selector: 'sk-icon',
  templateUrl: 'icon.component.html'
})
export class SkIconComponent implements OnInit, OnChanges {
  @Input() class?: string;
  @Input() type?: AlertLevelType | string;
  @Input() icon?: string;

  /** Configurable */
  defaultClass?: string;
  map: SkIconMapConfiguration = {};

  /** Render */
  baseClass?: string;
  iconClass?: string;

  constructor(private configurationService: SkConfigurationService) {
    this.cascade(configurationService.get());
  }

  ngOnInit(): void {
    this.calculate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.icon && !changes.icon.isFirstChange() || changes.class && !changes.class.isFirstChange()) {
      this.calculate();
    }
  }

  calculate(): void {
    this.baseClass = this.class ?? this.defaultClass;
    this.iconClass = this.icon ?? this.getIconFromType();
  }

  private cascade(configuration: SkConfigurationInterface): void {
    this.defaultClass = configuration.iconClass ?? this.getClassFromSet(configuration.iconSet);

    Object.assign(this.map, this.getMapFromSet(configuration.iconSet), configuration.iconMap);
  }

  private getIconFromType(): string | undefined {
    return this.type ? this.map[this.type] : undefined;
  }

  private getClassFromSet(iconSet: string | undefined): string {
    return iconSet ? SkIconSetPresets[iconSet] : '';
  }

  private getMapFromSet(iconSet: string | undefined): SkIconMapConfiguration {
    return iconSet ? SkIconMapPresets[iconSet] : {};
  }
}
