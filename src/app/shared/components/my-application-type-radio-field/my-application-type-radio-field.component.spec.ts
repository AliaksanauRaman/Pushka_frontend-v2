import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApplicationTypeRadioFieldComponent } from './my-application-type-radio-field.component';

describe('MyApplicationTypeRadioFieldComponent', () => {
  let component: MyApplicationTypeRadioFieldComponent;
  let fixture: ComponentFixture<MyApplicationTypeRadioFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyApplicationTypeRadioFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyApplicationTypeRadioFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
