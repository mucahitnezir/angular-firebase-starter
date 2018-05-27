import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

import * as firebase from 'firebase';
import { NotificationsService } from 'angular2-notifications';

import { AuthService } from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  currentUser: firebase.User;

  accountForm: FormGroup;

  constructor(private router: Router, private notificationService: NotificationsService, private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
    this.accountForm = new FormGroup({
      displayName: new FormControl(this.currentUser.displayName, [Validators.required]),
      photoURL: new FormControl(this.currentUser.photoURL, [])
    });
  }

  editAccount() {
    let displayName = this.accountForm.value.displayName;
    let photoURL = this.accountForm.value.photoURL;

    this.authService.updateAccount(displayName, photoURL)
      .then(() => {
        this.notificationService.success('Successful');
      })
      .catch(err => {
        this.notificationService.error('Not Updated', err.message);
      });
  }

  updateEmailAddress(form: NgForm) {
    this.authService.updateEmailAddress(form.value.emailAddress)
      .then(result => {
        this.notificationService.success('Successful', 'Your email address updated successfully.');
      })
      .catch(err => {
        this.notificationService.error('Not Updated Email Address', err.message);
      });
  }

  updatePassword(form: NgForm) {
    this.authService.updatePassword(form.value.password)
      .then(result => {
        this.notificationService.success('Successful', 'Your password changed successfully.');
      })
      .catch(err => {
        this.notificationService.error('Not Changed Password', err.message);
      });
  }

  deleteAccount() {
    const _confirm = confirm('Do you want to really delete your account?');
    if (_confirm) {
      this.authService.deleteAccount()
        .then(result => {
          this.notificationService.success('Deleted Account', 'Your account is deleted successfully.');
          this.router.navigate(['/']);
        })
        .catch(err => {
          this.notificationService.error('Not Deleted Account', err.message);
        });
    }
  }

}
