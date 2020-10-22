import { Component, OnInit } from '@angular/core';
import { ServeService } from './../../../server/serve.service';

@Component({
  selector: 'app-calendar-monitor',
  templateUrl: './calendar-monitor.component.html',
  styleUrls: ['./calendar-monitor.component.css'],
})
export class CalendarMonitorComponent implements OnInit {
  constructor(public serveService: ServeService) {}
  monitor: {};
  ngOnInit(): void {
    this.serveService.getmonitor().subscribe((info) => {
      this.monitor = info;
      // this.user = this.serveService.getUsers()
      console.log(info[2].localized_name);
      return info;
    });
  }
}
