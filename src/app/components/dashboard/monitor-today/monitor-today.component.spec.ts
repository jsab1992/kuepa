import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorTodayComponent } from './monitor-today.component';

describe('MonitorTodayComponent', () => {
  let component: MonitorTodayComponent;
  let fixture: ComponentFixture<MonitorTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
