import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule} from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatCommonModule } from '@angular/material/core';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

let matComponents = [
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  FlexLayoutModule,
  MatMenuModule,
  MatExpansionModule,
  MatBadgeModule,
  MatDividerModule,
  MatTooltipModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matComponents
  ],
  exports: [
    matComponents
  ]
})
export class MaterialModule { }
