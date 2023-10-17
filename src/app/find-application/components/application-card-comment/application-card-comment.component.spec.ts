import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCardCommentComponent } from './application-card-comment.component';

describe('ApplicationCardCommentComponent', () => {
  let component: ApplicationCardCommentComponent;
  let fixture: ComponentFixture<ApplicationCardCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApplicationCardCommentComponent]
    });
    fixture = TestBed.createComponent(ApplicationCardCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
