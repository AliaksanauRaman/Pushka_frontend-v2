import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEntryDialogComponent } from './user-entry-dialog.component';

describe('UserEntryDialogComponent', () => {
  let component: UserEntryDialogComponent;
  let fixture: ComponentFixture<UserEntryDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserEntryDialogComponent],
    });
    fixture = TestBed.createComponent(UserEntryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
