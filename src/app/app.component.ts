import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { Options } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  snOptions: Options = {
    position: ['bottom', 'right'],
    timeOut: 2500,
    clickToClose: true
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
