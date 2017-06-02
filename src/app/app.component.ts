import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Material Demo';
  startDate: Date;

  constructor() {
    this.startDate = new Date();
  }
}
