import { SkIconSetConfiguration } from '../interfaces/icon-set.interface';

// TODO : Add icon maps
export const SkIconSets: SkIconSetConfiguration[] = [
  {name: 'font-awesome', class: 'fa', prefix: 'fa-', map: {error: 'times-circle'}},
  {name: 'bootstrap-icons', class: 'bi', prefix: 'bi-'},
  {name: 'material-design-icons', class: 'mdi', prefix: 'mdi-'},
  {name: 'css.gg', class: '', prefix: 'gg-'}
];

export const emptyIconSet = {class: '', prefix: '', name: ''};

