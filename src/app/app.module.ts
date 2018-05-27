import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthNotGuard } from './auth/auth-not.guard';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TitleComponent } from './header/title/title.component';
import { PrivacyPolityComponent } from './privacy-polity/privacy-polity.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    TimelineComponent,
    NotFoundComponent,
    TitleComponent,
    PrivacyPolityComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthNotGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
