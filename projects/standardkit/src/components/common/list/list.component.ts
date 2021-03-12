import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { ColorType } from '../../../types/color.type';
import { CornerType } from '../../../types/corner.type';
import { ElevationType } from '../../../types/elevation.type';
import { FillType } from '../../../types/fill.type';
import { SkListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'sk-list',
  templateUrl: 'list.component.html'
})
export class SkListComponent implements AfterContentInit {
  @ContentChildren(SkListItemComponent) listItems!: QueryList<SkListItemComponent>;

  @Input() corner?: CornerType | string;
  @Input() elevation?: ElevationType | string;
  @Input() fill?: FillType | string;
  @Input() type?: ColorType | string;

  defaultCorner?: CornerType | string;
  defaultElevation?: ElevationType | string;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultCorner = configuration.list?.corner ?? configuration.corner;
    this.defaultElevation = configuration.list?.elevation ?? configuration.elevation;
  }

  ngAfterContentInit(): void {
    this.propagateSettingsToChildren();
  }

  propagateSettingsToChildren(): void {
    this.listItems.forEach((listItem: SkListItemComponent) => {
      if (!listItem.fill) {
        listItem.fill = this.fill;
      }

      if (!listItem.type) {
        listItem.type = this.type;
      }
    });
  }
}
