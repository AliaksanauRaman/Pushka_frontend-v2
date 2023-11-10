import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByPlaceFieldComponent } from './filter-by-place-field.component';

describe('FilterByPlaceFieldComponent', () => {
  let component: FilterByPlaceFieldComponent;
  let fixture: ComponentFixture<FilterByPlaceFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilterByPlaceFieldComponent]
    });
    fixture = TestBed.createComponent(FilterByPlaceFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
