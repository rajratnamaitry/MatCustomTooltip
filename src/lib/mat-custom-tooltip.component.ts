import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { TooltipComponent } from '@angular/material/tooltip';

@Component({
  selector: 'mat-custom-tooltip',
  template: `
  <div
    #tooltip
      class="mdc-tooltip mdc-tooltip--shown mat-mdc-tooltip"
      (animationend)="_handleAnimationEnd($event)"
      [class.mdc-tooltip--multiline]="_isMultiline">
      <div class="mdc-tooltip__surface-animation" [innerHTML]="message">
      </div>
  </div>
  `,
  host: {
// Forces the element to have a layout in IE and Edge. This fixes issues where the element
    // won't be rendered if the animations are disabled or there is no web animations polyfill.
    '[style.zoom]': 'isVisible() ? 1 : null',
    '(mouseleave)': '_handleMouseLeave($event)',
    'aria-hidden': 'true',
  },
  // styleUrls: ["./mat-custom-tooltip.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatCustomTooltipComponent extends TooltipComponent {
  isMultiline = false;
  cdrRef: ChangeDetectorRef;
  constructor(
    elementRef: ElementRef<HTMLElement>,
    cdr: ChangeDetectorRef
  ) {
    super(cdr,elementRef);
    this.cdrRef = cdr;
  }

  protected override _onShow(): void {
    this._markForCheck();
  }
}

