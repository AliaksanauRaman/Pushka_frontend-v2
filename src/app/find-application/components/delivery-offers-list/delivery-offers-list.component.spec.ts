import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryOffersListComponent } from './delivery-offers-list.component';

describe('DeliveryOffersListComponent', () => {
  let component: DeliveryOffersListComponent;
  let fixture: ComponentFixture<DeliveryOffersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DeliveryOffersListComponent],
    });
    fixture = TestBed.createComponent(DeliveryOffersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
