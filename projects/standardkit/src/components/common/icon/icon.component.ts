import { Component, Input } from '@angular/core';
import { SkConfigurationService } from '../../../configurations/configuration.service';
import { emptyIconSet, SkIconSets } from '../../../configurations/icon-sets.configuration';
import { SkIconSetConfiguration } from '../../../interfaces/icon-set.interface';
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

  protected configuration!: SkIconSetConfiguration;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get().iconSet;
    this.configuration = this.mapConfiguration(configuration);
  }

  get classes(): string {
    const baseClass = this.class ?? this.configuration.class;
    const prefix = this.prefix ?? this.configuration.prefix;
    const icon = this.icon ?? this.getFromType() ?? '';

    return `${baseClass} ${prefix}${icon}`;
  }

  private mapConfiguration(configuration?: string | SkIconSetConfiguration): SkIconSetConfiguration {
    switch (typeof configuration) {
      case 'object':
        return configuration;
      case 'string':
        return SkIconSets.find(set => set.name === configuration) ?? emptyIconSet;
      default:
        return emptyIconSet;
    }
  }

  private getFromType(): string | undefined {
    // @ts-ignore
    return this.configuration?.map[this.type];
  }
}
