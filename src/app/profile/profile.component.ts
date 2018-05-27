import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: firebase.User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
  }

}
