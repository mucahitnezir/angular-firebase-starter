import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SocialComponent } from './social/social.component';
import { EditComponent } from './edit/edit.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DashboardComponent, SocialComponent, EditComponent, LogoutComponent]
})
export class ProfileModule { }
