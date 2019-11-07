import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersFactsComponent } from './numbers-facts.component';

describe('NumbersFactsComponent', () => {
  let component: NumbersFactsComponent;
  let fixture: ComponentFixture<NumbersFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
