import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
  ],
  exports: [MatButtonModule, MatButtonToggleModule, MatBadgeModule],
})
export class MaterialModule {}
