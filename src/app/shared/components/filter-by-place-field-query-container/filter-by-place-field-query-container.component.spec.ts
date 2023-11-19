import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByPlaceFieldQueryContainerComponent } from './filter-by-place-field-query-container.component';

describe('FilterByPlaceFieldQueryContainerComponent', () => {
  let component: FilterByPlaceFieldQueryContainerComponent;
  let fixture: ComponentFixture<FilterByPlaceFieldQueryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByPlaceFieldQueryContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByPlaceFieldQueryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
