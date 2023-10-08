import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpOffersPageComponent } from './help-offers-page.component';

describe('HelpOffersPageComponent', () => {
  let component: HelpOffersPageComponent;
  let fixture: ComponentFixture<HelpOffersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HelpOffersPageComponent]
    });
    fixture = TestBed.createComponent(HelpOffersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
