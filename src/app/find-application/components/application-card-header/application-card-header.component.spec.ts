import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCardHeaderComponent } from './application-card-header.component';

describe('ApplicationCardHeaderComponent', () => {
  let component: ApplicationCardHeaderComponent;
  let fixture: ComponentFixture<ApplicationCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationCardHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
