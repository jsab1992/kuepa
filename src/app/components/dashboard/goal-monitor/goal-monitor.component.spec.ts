import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalMonitorComponent } from './goal-monitor.component';

describe('GoalMonitorComponent', () => {
  let component: GoalMonitorComponent;
  let fixture: ComponentFixture<GoalMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
