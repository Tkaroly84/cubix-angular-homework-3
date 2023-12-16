import { Component,EventEmitter,Input,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})

export class TimeComponent {

  @Input() timezone = " ";   //a html-ben választható a <select>-tel
  @Input() isCurrent:any = this.timezone;


  @Output() changeTimezone = new EventEmitter<string>(); //kiközvetítjük a szülő felé, hogy a másik button-nal jelölés történt
  
  isBudapestTimezone: boolean = false;
  isAmericaTimezone: boolean = false;
  isDubaiTimezone: boolean = false;
  isVostokTimezone: boolean = false;

  budapestColor: string = 'black';
  americaColor: string = 'black';
  dubaiColor: string = 'yellow';
  vostokColor: string = 'red';

  textColor: string = 'black';


  time='';
   timezones = [
    { value: 'valassz', label: 'Válassz...' },
    { value: 'Europe/Budapest', label: 'Budapest' },
    { value: 'America/New_York', label: 'New York' },
    { value: 'Asia/Dubai', label: 'Dubai' },
    { value: 'Antarctica/Vostok', label: 'Vostok' },

  
  ];

// a gyerekkomponens button-functionja
  update(){

    this.time = new Date().toLocaleString('hu-HU', { timeZone: this.timezone });

    this.isBudapestTimezone = this.timezone === 'Europe/Budapest';
    this.isAmericaTimezone = this.timezone === 'America/New_York';
    this.isDubaiTimezone = this.timezone === 'Asia/Dubai';
    this.isVostokTimezone = this.timezone === 'Antarctica/Vostok';

    if (this.isBudapestTimezone) {
      this.textColor = this.budapestColor;
    } else if (this.isAmericaTimezone) {
      this.textColor = this.americaColor;
    } else if (this.isDubaiTimezone) {
      this.textColor = this.dubaiColor;
    } else if (this.isVostokTimezone) {
      this.textColor = this.vostokColor;
    } else {
      this.textColor = 'black';
    }
  }

  timeZoneSelectorClick(){
    this.changeTimezone.emit(this.timezone)//kiközvetítjük a szülő felé, hogy a másik button-nal jelölés történt
  }
}
