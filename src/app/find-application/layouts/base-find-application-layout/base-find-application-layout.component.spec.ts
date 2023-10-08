import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFindApplicationLayoutComponent } from './base-find-application-layout.component';

describe('BaseFindApplicationLayoutComponent', () => {
  let component: BaseFindApplicationLayoutComponent;
  let fixture: ComponentFixture<BaseFindApplicationLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BaseFindApplicationLayoutComponent]
    });
    fixture = TestBed.createComponent(BaseFindApplicationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
