import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHelpRequestFormComponent } from './create-help-request-form.component';

describe('CreateHelpRequestFormComponent', () => {
  let component: CreateHelpRequestFormComponent;
  let fixture: ComponentFixture<CreateHelpRequestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateHelpRequestFormComponent]
    });
    fixture = TestBed.createComponent(CreateHelpRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
