import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PingDashboardComponent } from './ping-dashboard.component';

describe('PingDashboardComponent', () => {
  let component: PingDashboardComponent;
  let fixture: ComponentFixture<PingDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PingDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
