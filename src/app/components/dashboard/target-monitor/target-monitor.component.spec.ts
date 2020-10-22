import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetMonitorComponent } from './target-monitor.component';

describe('TargetMonitorComponent', () => {
  let component: TargetMonitorComponent;
  let fixture: ComponentFixture<TargetMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
