import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpRequestsListComponent } from './help-requests-list.component';

describe('HelpRequestsListComponent', () => {
  let component: HelpRequestsListComponent;
  let fixture: ComponentFixture<HelpRequestsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpRequestsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
