import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCodeFieldComponent } from './country-code-field.component';

describe('CountryCodeFieldComponent', () => {
  let component: CountryCodeFieldComponent;
  let fixture: ComponentFixture<CountryCodeFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CountryCodeFieldComponent]
    });
    fixture = TestBed.createComponent(CountryCodeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
