import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTabsComponent } from './dialog-tabs.component';

describe('DialogTabsComponent', () => {
  let component: DialogTabsComponent;
  let fixture: ComponentFixture<DialogTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
