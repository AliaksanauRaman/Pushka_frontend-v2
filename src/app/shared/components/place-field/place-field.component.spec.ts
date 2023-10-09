import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceFieldComponent } from './place-field.component';

describe('PlaceFieldComponent', () => {
  let component: PlaceFieldComponent;
  let fixture: ComponentFixture<PlaceFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlaceFieldComponent]
    });
    fixture = TestBed.createComponent(PlaceFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
