import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationSelectionContainerComponent } from './localization-selection-container.component';

describe('LocalizationSelectionContainerComponent', () => {
  let component: LocalizationSelectionContainerComponent;
  let fixture: ComponentFixture<LocalizationSelectionContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LocalizationSelectionContainerComponent]
    });
    fixture = TestBed.createComponent(LocalizationSelectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
