import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationSelectionComponent } from './localization-selection.component';

describe('LocalizationSelectionComponent', () => {
  let component: LocalizationSelectionComponent;
  let fixture: ComponentFixture<LocalizationSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LocalizationSelectionComponent],
    });
    fixture = TestBed.createComponent(LocalizationSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
