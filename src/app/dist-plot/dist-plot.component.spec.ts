import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistPlotComponent } from './dist-plot.component';

describe('DistPlotComponent', () => {
  let component: DistPlotComponent;
  let fixture: ComponentFixture<DistPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
