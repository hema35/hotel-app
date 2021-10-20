import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';

let components = [
  MatButtonModule,
  MatInputModule,
  MatToolbarModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
