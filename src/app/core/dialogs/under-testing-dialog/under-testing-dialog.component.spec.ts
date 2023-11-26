import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderTestingDialogComponent } from './under-testing-dialog.component';

describe('UnderTestingDialogComponent', () => {
  let component: UnderTestingDialogComponent;
  let fixture: ComponentFixture<UnderTestingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderTestingDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnderTestingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
