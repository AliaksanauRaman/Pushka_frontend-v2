import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteApplicationDialogComponent } from './delete-application-dialog.component';

describe('DeleteApplicationDialogComponent', () => {
  let component: DeleteApplicationDialogComponent;
  let fixture: ComponentFixture<DeleteApplicationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteApplicationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteApplicationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
