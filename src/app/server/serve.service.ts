import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from "rxjs/Observable";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServeService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get('https://api.opendota.com/api/heroes/12/players/');
  }

  getmonitor() {
    return this.http.get('https://api.opendota.com/api/heroes');
  }

  getMonitorToday(){
    return this.http.get('https://api.opendota.com/api/teams');
  }
}
