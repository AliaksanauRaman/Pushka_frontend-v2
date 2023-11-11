import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTabItemComponent } from './dialog-tab-item.component';

describe('DialogTabItemComponent', () => {
  let component: DialogTabItemComponent;
  let fixture: ComponentFixture<DialogTabItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogTabItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogTabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
