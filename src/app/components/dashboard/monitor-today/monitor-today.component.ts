import { Component, OnInit } from '@angular/core';
import { ServeService } from './../../../server/serve.service';

@Component({
  selector: 'app-monitor-today',
  templateUrl: './monitor-today.component.html',
  styleUrls: ['./monitor-today.component.css']
})
export class MonitorTodayComponent implements OnInit {

  constructor(public serveService: ServeService) { }
mtoday : any;
  ngOnInit(): void {
    this.serveService.getUsers().subscribe((datamonitor) => {
      this.mtoday = datamonitor;
      // this.user = this.serveService.getUsers()
      return datamonitor;
    });
  }

}
