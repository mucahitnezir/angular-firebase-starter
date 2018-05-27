import { Component, OnInit, DoCheck } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  isAuthenticated: boolean;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
  }

}
