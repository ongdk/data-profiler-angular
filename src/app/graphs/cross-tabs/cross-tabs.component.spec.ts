import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossTabsComponent } from './cross-tabs.component';

describe('CrossTabsComponent', () => {
  let component: CrossTabsComponent;
  let fixture: ComponentFixture<CrossTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
