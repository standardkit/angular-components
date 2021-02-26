import { IconMapInterface } from './icon-map.interface';

export interface IconSetInterface {
  name: string;
  class: string;
  prefix: string;
  map?: IconMapInterface;
}
