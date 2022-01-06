import { Component, Input } from '@angular/core';
import { ApiService } from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'test-front';

  date: Date = new Date();
  time: any;

  constructor(private service: ApiService) {
    
  }

  submit() {
    this.service.checkAvaliability(this.date, this.time)
  }

}
