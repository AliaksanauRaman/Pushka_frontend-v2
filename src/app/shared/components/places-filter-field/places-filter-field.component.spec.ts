import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesFilterFieldComponent } from './places-filter-field.component';

describe('PlacesFilterFieldComponent', () => {
  let component: PlacesFilterFieldComponent;
  let fixture: ComponentFixture<PlacesFilterFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlacesFilterFieldComponent]
    });
    fixture = TestBed.createComponent(PlacesFilterFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
