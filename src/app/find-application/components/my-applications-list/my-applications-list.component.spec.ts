import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApplicationsListComponent } from './my-applications-list.component';

describe('MyApplicationsListComponent', () => {
  let component: MyApplicationsListComponent;
  let fixture: ComponentFixture<MyApplicationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyApplicationsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyApplicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
