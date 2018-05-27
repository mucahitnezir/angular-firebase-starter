import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private notificationService: NotificationsService,
              private authService: AuthService) { }

  ngOnInit() {
    // Query params
    this.activatedRoute.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'] || '/timeline';
    });
  }

  onLogin(form: NgForm): void {
    const emailAddress = form.value.emailAddress
      , password = form.value.password;

    this.authService.loginWithEmail(emailAddress, password)
      .then(response => {
        form.resetForm();
        this.notificationService.success('Successful Login', 'You are logged in successfully.');
        this.router.navigateByUrl(this.returnUrl);
      })
      .catch(err => {
        this.notificationService.error('Failed Login', err.message);
      });
  }

  loginWithSocial(type: string) {
    this.authService.loginWithSocial(type)
      .then(() => {
        this.notificationService.success('Successful Login with Social', 'You are logged in successfully.');
        this.router.navigateByUrl(this.returnUrl);
      })
      .catch(err => {
        this.notificationService.error('Failed Login with Social', err.message);
      });
  }

}
