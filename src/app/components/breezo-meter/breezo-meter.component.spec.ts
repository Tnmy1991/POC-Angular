import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreezoMeterComponent } from './breezo-meter.component';

describe('BreezoMeterComponent', () => {
  let component: BreezoMeterComponent;
  let fixture: ComponentFixture<BreezoMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreezoMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreezoMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
