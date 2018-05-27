import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import * as firebase from 'firebase';

import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: firebase.User;

  constructor(private notificationService: NotificationsService, private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
  }

  sendVerificationEmail() {
    this.authService.sendEmailVerification()
      .then(() => {
        this.notificationService.success('Başarılı', 'Eposta başarılı bir şekilde gönderildi.');
      })
      .catch(err => {
        this.notificationService.error('Eposta gönderilemedi', err.message);
      });
  }

}
