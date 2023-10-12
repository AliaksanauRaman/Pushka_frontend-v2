import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindApplicationTabsComponent } from './find-application-tabs.component';

describe('FindApplicationTabsComponent', () => {
  let component: FindApplicationTabsComponent;
  let fixture: ComponentFixture<FindApplicationTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FindApplicationTabsComponent]
    });
    fixture = TestBed.createComponent(FindApplicationTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
