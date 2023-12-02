import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRequiresUpdateDialogComponent } from './app-requires-update-dialog.component';

describe('AppRequiresUpdateDialogComponent', () => {
  let component: AppRequiresUpdateDialogComponent;
  let fixture: ComponentFixture<AppRequiresUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRequiresUpdateDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppRequiresUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
