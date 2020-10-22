import { Component, OnInit } from '@angular/core';
import { ServeService } from './../../server/serve.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jhonny = 'jhonny';
  constructor() { }

  ngOnInit(): void {
//  this.serveService.getUsers();
  }

}
