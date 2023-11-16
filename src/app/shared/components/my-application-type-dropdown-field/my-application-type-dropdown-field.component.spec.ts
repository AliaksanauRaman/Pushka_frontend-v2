import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApplicationTypeDropdownFieldComponent } from './my-application-type-dropdown-field.component';

describe('MyApplicationTypeDropdownFieldComponent', () => {
  let component: MyApplicationTypeDropdownFieldComponent;
  let fixture: ComponentFixture<MyApplicationTypeDropdownFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyApplicationTypeDropdownFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyApplicationTypeDropdownFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
