import { SkIconSetConfiguration } from './icon-set.interface';

export interface SkConfigurationInterface {
  // Global
  iconSet?: string | SkIconSetConfiguration;

  // Component
  alert?: { hasIcon?: boolean; isDismissable?: boolean; };
}
