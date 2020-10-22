import { Component, OnInit } from '@angular/core';
import { ServeService } from './../../../server/serve.service';

@Component({
  selector: 'app-target-monitor',
  templateUrl: './target-monitor.component.html',
  styleUrls: ['./target-monitor.component.css'],
})
export class TargetMonitorComponent implements OnInit {
 


  constructor(public serveService: ServeService) {}
  user: {};
  ngOnInit() {
    this.serveService.getUsers().subscribe((data) => {
      this.user = data;
      // this.user = this.serveService.getUsers()
      return data;
    });
  }

  color = 'accent';
  mode = 'determinate';
  // value = ;

}
