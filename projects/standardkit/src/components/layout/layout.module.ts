import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkDirectivesModule } from '../../directives/directives.module';
import { SkCommonModule } from '../common/common.module';
import { SkBrandComponent } from './brand/brand.component';
import { SkCardLayoutComponent } from './card-layout/card-layout.component';
import { SkDashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SkNavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SkNavigationItemComponent } from './navigation-item/navigation-item.component';
import { SkNavigationTitleComponent } from './navigation-title/navigation-title.component';
import { SkNavigationComponent } from './navigation/navigation.component';
import { SkSectionComponent } from './section/section.component';
import { SkSidebarComponent } from './sidebar/sidebar.component';
import { SkSpacerComponent } from './spacer/spacer.component';

const COMPONENTS = [
  SkBrandComponent,
  SkCardLayoutComponent,
  SkDashboardLayoutComponent,
  SkNavigationComponent,
  SkNavigationBarComponent,
  SkNavigationItemComponent,
  SkNavigationTitleComponent,
  SkSectionComponent,
  SkSidebarComponent,
  SkSpacerComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SkDirectivesModule,
    SkCommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SkLayoutModule {
}
