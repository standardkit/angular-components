import { SkIconMapInterface } from './icon-map.interface';

export interface SkIconSetConfiguration {
  name: string;
  class: string;
  prefix: string;
  map?: SkIconMapInterface;
}
