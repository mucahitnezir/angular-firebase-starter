import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  authState: firebase.User;

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState
      .subscribe((auth) => {
        this.authState = auth;
      });
  }

  signUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  loginWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  loginWithSocial(type: string) {
    let provider: firebase.auth.AuthProvider;

    switch (type) {
      case 'facebook':
        provider = new firebase.auth.FacebookAuthProvider();
        break;
      case 'google':
        provider = new firebase.auth.GoogleAuthProvider();
        break;
      case 'twitter':
        provider = new firebase.auth.TwitterAuthProvider();
        break;
    }

    return this.afAuth.auth.signInWithPopup(provider);
  }

  linkSocialAccount(providerId: string) {
    let provider: firebase.auth.AuthProvider;

    switch (providerId) {
      case 'facebook.com':
        provider = new firebase.auth.FacebookAuthProvider();
        break;
      case 'google.com':
        provider = new firebase.auth.GoogleAuthProvider();
        break;
      case 'twitter.com':
        provider = new firebase.auth.TwitterAuthProvider();
        break;
    }

    return this.afAuth.auth.currentUser.linkWithPopup(provider);
  }

  unlinkSocialAccount(providerId: string) {
    return this.afAuth.auth.currentUser.unlink(providerId);
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }

  resetPassword(emailAddress: string) {
    return this.afAuth.auth.sendPasswordResetEmail(emailAddress);
  }

  sendEmailVerification() {
    return this.afAuth.auth.currentUser.sendEmailVerification();
  }

  updateAccount(displayName: string = null, photoURL: string = null) {
    return this.afAuth.auth.currentUser.updateProfile({displayName, photoURL});
  }

  updateEmailAddress(emailAddress: string) {
    return this.afAuth.auth.currentUser.updateEmail(emailAddress);
  }

  updatePassword(password: string) {
    return this.afAuth.auth.currentUser.updatePassword(password);
  }

  deleteAccount() {
    return this.afAuth.auth.currentUser.delete();
  }

  get isAuthenticated(): boolean {
    return this.authState !== undefined && this.authState !== null;
  }

  get currentUser(): firebase.User {
    return this.isAuthenticated ? this.authState : null;
  }

  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

}
