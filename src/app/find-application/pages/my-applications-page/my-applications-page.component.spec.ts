import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApplicationsPageComponent } from './my-applications-page.component';

describe('MyApplicationsPageComponent', () => {
  let component: MyApplicationsPageComponent;
  let fixture: ComponentFixture<MyApplicationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MyApplicationsPageComponent]
    });
    fixture = TestBed.createComponent(MyApplicationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
