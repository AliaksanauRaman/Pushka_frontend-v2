import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUpdateIsAvailableDialogComponent } from './app-update-is-available-dialog.component';

describe('AppUpdateIsAvailableDialogComponent', () => {
  let component: AppUpdateIsAvailableDialogComponent;
  let fixture: ComponentFixture<AppUpdateIsAvailableDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppUpdateIsAvailableDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppUpdateIsAvailableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
