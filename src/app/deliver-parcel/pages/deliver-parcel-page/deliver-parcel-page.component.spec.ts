import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverParcelPageComponent } from './deliver-parcel-page.component';

describe('DeliverParcelPageComponent', () => {
  let component: DeliverParcelPageComponent;
  let fixture: ComponentFixture<DeliverParcelPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DeliverParcelPageComponent]
    });
    fixture = TestBed.createComponent(DeliverParcelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
