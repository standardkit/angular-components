import { Inject } from '@angular/core';
import { SkConfigurationInterface } from '../interfaces/configuration.interface';

export const SK_CONFIGURATION = 'SK_CONFIGURATION';

export class SkConfigurationService {

  constructor(@Inject(SK_CONFIGURATION) protected configuration: SkConfigurationInterface) {
  }

  get(): SkConfigurationInterface {
    return this.configuration;
  }
}
