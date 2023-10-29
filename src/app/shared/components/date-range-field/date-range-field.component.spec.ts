import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeFieldComponent } from './date-range-field.component';

describe('DateRangeFieldComponent', () => {
  let component: DateRangeFieldComponent;
  let fixture: ComponentFixture<DateRangeFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DateRangeFieldComponent]
    });
    fixture = TestBed.createComponent(DateRangeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
