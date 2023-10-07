import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindApplicationPageComponent } from './find-application-page.component';

describe('FindApplicationPageComponent', () => {
  let component: FindApplicationPageComponent;
  let fixture: ComponentFixture<FindApplicationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FindApplicationPageComponent]
    });
    fixture = TestBed.createComponent(FindApplicationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
