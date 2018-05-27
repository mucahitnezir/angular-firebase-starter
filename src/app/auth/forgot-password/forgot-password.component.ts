import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private authService: AuthService, private notificationService: NotificationsService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const emailAddress = form.value.emailAddress;
    this.authService.resetPassword(emailAddress)
      .then(result => {
        form.reset();
        this.notificationService.success('Successful', 'The password reset link has been sent to your e-mail address.');
      })
      .catch(err => {
        this.notificationService.error('Error', err.message);
      });
  }

}
