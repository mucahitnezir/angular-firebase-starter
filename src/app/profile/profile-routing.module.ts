import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SocialComponent } from './social/social.component';
import {EditComponent} from './edit/edit.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Profile Dashboard'
    }
  },
  {
    path: 'social',
    component: SocialComponent,
    data: {
      title: 'Social Providers'
    }
  },
  {
    path: 'edit',
    component: EditComponent,
    data: {
      title: 'Edit Your Profile'
    }
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: {
      title: 'Logout..'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
