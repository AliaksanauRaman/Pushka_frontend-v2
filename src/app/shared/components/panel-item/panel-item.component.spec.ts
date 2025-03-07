import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelItemComponent } from './panel-item.component';

describe('PanelItemComponent', () => {
  let component: PanelItemComponent;
  let fixture: ComponentFixture<PanelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
