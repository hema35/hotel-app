import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';


let components = [
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  FlexLayoutModule

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
