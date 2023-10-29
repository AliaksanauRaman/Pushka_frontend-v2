import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendParcelFormComponent } from './send-parcel-form.component';

describe('SendParcelFormComponent', () => {
  let component: SendParcelFormComponent;
  let fixture: ComponentFixture<SendParcelFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SendParcelFormComponent]
    });
    fixture = TestBed.createComponent(SendParcelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
