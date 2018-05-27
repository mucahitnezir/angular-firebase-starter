import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { AuthNotGuard } from './auth/auth-not.guard';

import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { PrivacyPolityComponent } from './privacy-polity/privacy-polity.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      title: 'Homepage'
    }
  },
  {
    path: 'privacy-polity',
    component: PrivacyPolityComponent,
    data: {
      title: 'Privacy Polity'
    }
  },
  {
    path: 'auth',
    canActivate: [AuthNotGuard],
    children: [
      {path: 'login', component: LoginComponent, data: {title: 'Login'}},
      {path: 'signup', component: SignupComponent, data: {title: 'Sign Up'}},
      {path: 'forgot-password', component: ForgotPasswordComponent, data: {title: 'Forgot Password'}}
    ]
  },
  {
    path: 'timeline',
    component: TimelineComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Timeline'
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: '404 Page Not Found'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
