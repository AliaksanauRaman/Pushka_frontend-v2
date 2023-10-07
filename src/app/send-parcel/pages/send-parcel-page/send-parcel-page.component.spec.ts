import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendParcelPageComponent } from './send-parcel-page.component';

describe('SendParcelPageComponent', () => {
  let component: SendParcelPageComponent;
  let fixture: ComponentFixture<SendParcelPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SendParcelPageComponent]
    });
    fixture = TestBed.createComponent(SendParcelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
