import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TimeComponent } from './time/time.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TimeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  selectedTimezone = '';
  valassz='válassz...';

  handleTimezoneChange(timezone: string) {
    this.selectedTimezone = timezone;
  }
}