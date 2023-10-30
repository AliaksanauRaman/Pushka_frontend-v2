import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCardTagComponent } from './application-card-tag.component';

describe('ApplicationCardTagComponent', () => {
  let component: ApplicationCardTagComponent;
  let fixture: ComponentFixture<ApplicationCardTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApplicationCardTagComponent]
    });
    fixture = TestBed.createComponent(ApplicationCardTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
