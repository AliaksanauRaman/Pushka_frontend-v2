import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRequiresUpdateBottomSheetComponent } from './app-requires-update-bottom-sheet.component';

describe('AppRequiresUpdateBottomSheetComponent', () => {
  let component: AppRequiresUpdateBottomSheetComponent;
  let fixture: ComponentFixture<AppRequiresUpdateBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRequiresUpdateBottomSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppRequiresUpdateBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
