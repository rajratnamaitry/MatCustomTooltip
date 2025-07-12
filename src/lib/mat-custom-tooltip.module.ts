import { NgModule } from '@angular/core';
import { MatCustomTooltipComponent } from './mat-custom-tooltip.component';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToolTipDirective } from './mat-custom-tooltip.directive';




@NgModule({
  declarations: [
    MatCustomTooltipComponent
  ],
  imports: [
    MatTooltipModule,
    CommonModule,
    ToolTipDirective
  ],
  exports: [
    ToolTipDirective,
    MatCustomTooltipComponent
  ]
})
export class MatCustomTooltipModule { }
