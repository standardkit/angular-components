import { Inject, Injectable, Optional } from '@angular/core';
import { SkConfigurationInterface } from './configuration.interface';

export const SK_CONFIGURATION = 'SK_CONFIGURATION';

@Injectable({
  providedIn: 'root'
})
export class SkConfigurationService {

  constructor(@Optional() @Inject(SK_CONFIGURATION) private configuration?: SkConfigurationInterface) {
  }

  get(): SkConfigurationInterface {
    return this.configuration ?? {};
  }
}
