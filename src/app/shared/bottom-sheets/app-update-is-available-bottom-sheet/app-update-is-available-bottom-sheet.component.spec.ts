import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUpdateIsAvailableBottomSheetComponent } from './app-update-is-available-bottom-sheet.component';

describe('AppUpdateIsAvailableBottomSheetComponent', () => {
  let component: AppUpdateIsAvailableBottomSheetComponent;
  let fixture: ComponentFixture<AppUpdateIsAvailableBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppUpdateIsAvailableBottomSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppUpdateIsAvailableBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
