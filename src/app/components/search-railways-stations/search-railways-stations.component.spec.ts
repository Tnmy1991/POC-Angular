import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRailwaysStationsComponent } from './search-railways-stations.component';

describe('SearchRailwaysStationsComponent', () => {
  let component: SearchRailwaysStationsComponent;
  let fixture: ComponentFixture<SearchRailwaysStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRailwaysStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRailwaysStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
