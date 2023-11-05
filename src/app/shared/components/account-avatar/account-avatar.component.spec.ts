import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAvatarComponent } from './account-avatar.component';

describe('AccountAvatarComponent', () => {
  let component: AccountAvatarComponent;
  let fixture: ComponentFixture<AccountAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AccountAvatarComponent]
    });
    fixture = TestBed.createComponent(AccountAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
