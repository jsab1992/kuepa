import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMonitorComponent } from './calendar-monitor.component';

describe('CalendarMonitorComponent', () => {
  let component: CalendarMonitorComponent;
  let fixture: ComponentFixture<CalendarMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
