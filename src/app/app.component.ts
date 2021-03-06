import { Component, HostListener, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  auth: boolean = false;

  @ViewChild('sidenav') sideNav!: MatSidenav;
  currentDate!: Date;
  loop = []; /*['', '', '', '', '', '', '', '', '', '', ]*/

  constructor() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 850) {
      this.sideNav.close().then();
    } else {
      this.sideNav.open().then();
    }
  }
}
