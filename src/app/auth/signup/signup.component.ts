import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { NotificationsService } from 'angular2-notifications';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private notificationService: NotificationsService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const emailAddress = f.value.emailAddress
      , password = f.value.password;

    this.authService.signUp(emailAddress, password)
      .then(result => {
        this.notificationService.success('Successful Sign Up', 'Your membership account has been successfully created.');
        this.router.navigate(['/profile']);
      })
      .catch(err => {
        this.notificationService.error('Failed Sign Up', err.message);
      });
  }

}
