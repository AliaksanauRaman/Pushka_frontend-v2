import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpRequestCardComponent } from './help-request-card.component';

describe('HelpRequestCardComponent', () => {
  let component: HelpRequestCardComponent;
  let fixture: ComponentFixture<HelpRequestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpRequestCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
