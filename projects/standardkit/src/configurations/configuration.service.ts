import { Inject, Injectable } from '@angular/core';
import { SkConfigurationInterface } from '../interfaces/configuration.interface';

export const SK_CONFIGURATION = 'SK_CONFIGURATION';

@Injectable()
export class SkConfigurationService {

  constructor(@Inject(SK_CONFIGURATION) protected configuration: SkConfigurationInterface) {
  }

  get(): SkConfigurationInterface {
    return this.configuration;
  }
}
