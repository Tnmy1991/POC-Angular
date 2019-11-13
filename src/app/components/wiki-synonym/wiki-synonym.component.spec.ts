import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSynonymComponent } from './wiki-synonym.component';

describe('WikiSynonymComponent', () => {
  let component: WikiSynonymComponent;
  let fixture: ComponentFixture<WikiSynonymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiSynonymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiSynonymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
