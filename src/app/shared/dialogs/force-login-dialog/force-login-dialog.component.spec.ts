import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceLoginDialogComponent } from './force-login-dialog.component';

describe('ForceLoginDialogComponent', () => {
  let component: ForceLoginDialogComponent;
  let fixture: ComponentFixture<ForceLoginDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForceLoginDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForceLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
