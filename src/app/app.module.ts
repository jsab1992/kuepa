import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TargetMonitorComponent } from './components/dashboard/target-monitor/target-monitor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {ThemePalette} from '@angular/material/core';
import {MatProgressSpinnerModule, ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { GoalMonitorComponent } from './components/dashboard/goal-monitor/goal-monitor.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CalendarMonitorComponent } from './components/dashboard/calendar-monitor/calendar-monitor.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MonitorTodayComponent } from './components/dashboard/monitor-today/monitor-today.component';
import {HttpClientModule} from '@angular/common/http' 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TargetMonitorComponent,
    GoalMonitorComponent,
    CalendarMonitorComponent,
    MonitorTodayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
