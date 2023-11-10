import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverParcelFormComponent } from './deliver-parcel-form.component';

describe('DeliverParcelFormComponent', () => {
  let component: DeliverParcelFormComponent;
  let fixture: ComponentFixture<DeliverParcelFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DeliverParcelFormComponent]
    });
    fixture = TestBed.createComponent(DeliverParcelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
