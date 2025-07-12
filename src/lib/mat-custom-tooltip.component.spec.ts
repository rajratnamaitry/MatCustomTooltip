import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { MatCustomTooltipComponent } from 'projects/cust-mat-tooltip/src/public-api';

describe('MatCustomTooltipComponent', () => {
  let component: MatCustomTooltipComponent;
  let fixture: ComponentFixture<MatCustomTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatCustomTooltipComponent],
      providers: [
        { provide: ElementRef, useValue: new ElementRef(document.createElement('div')) },
        { provide: ChangeDetectorRef, useValue: { markForCheck: () => {} } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCustomTooltipComponent);
    component = fixture.componentInstance;
    component['message'] = 'Test Tooltip';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tooltip message', () => {
    const tooltipSurface = fixture.nativeElement.querySelector('.mdc-tooltip__surface');
    expect(tooltipSurface.innerHTML).toContain('Test Tooltip');
  });
});
