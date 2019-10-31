import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostOfficesComponent } from './search-post-offices.component';

describe('SearchPostOfficesComponent', () => {
  let component: SearchPostOfficesComponent;
  let fixture: ComponentFixture<SearchPostOfficesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPostOfficesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
