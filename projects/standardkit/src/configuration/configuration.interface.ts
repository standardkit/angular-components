import { SkIconMapConfiguration } from './icon-map.configuration';

export interface SkConfigurationInterface {
  // Global
  iconSet?: string;
  iconClass?: string;
  iconMap?: SkIconMapConfiguration;

  // Component
  alert?: { hasIcon?: boolean; isDismissable?: boolean; };
}
