import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApplicationCardComponent } from './my-application-card.component';

describe('MyApplicationCardComponent', () => {
  let component: MyApplicationCardComponent;
  let fixture: ComponentFixture<MyApplicationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyApplicationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyApplicationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
