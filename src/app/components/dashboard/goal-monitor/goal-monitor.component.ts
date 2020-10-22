import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal-monitor',
  templateUrl: './goal-monitor.component.html',
  styleUrls: ['./goal-monitor.component.css'],
})
export class GoalMonitorComponent implements OnInit {
  color = 'accent';
  mode = 'determinate';
  value = 55;
  bufferValue = 50;

  constructor() {}

  ngOnInit(): void {}
}
