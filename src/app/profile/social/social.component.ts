import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NotificationsService } from 'angular2-notifications';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit, DoCheck {

  providers: Provider[] = [];

  constructor(private route: ActivatedRoute, private notificationService: NotificationsService, private authService: AuthService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    const providers = this.authService.currentUser.providerData;
    this.providers = [
      {
        providerId: 'facebook.com',
        name: 'Facebook',
        status: !!providers.find(p => p['providerId'] === 'facebook.com'),
        class: 'btn-facebook'
      },
      {
        providerId: 'twitter.com',
        name: 'Twitter',
        status: !!providers.find(p => p['providerId'] === 'twitter.com'),
        class: 'btn-twitter'
      },
      {
        providerId: 'google.com',
        name: 'Google',
        status: !!providers.find(p => p['providerId'] === 'google.com'),
        class: 'btn-google'
      }
    ];
  }

  linkSocialAccount(providerId: string) {
    this.authService.linkSocialAccount(providerId)
      .then(value => {
        this.notificationService.success('Başarılı', 'Sosyal medya hesabı başarılı bir şekilde bağlandı.');
      })
      .catch(err => {
        this.notificationService.error('Hata', err.message);
      });
  }

  unlinkSocialAccount(providerId: string) {
    this.authService.unlinkSocialAccount(providerId)
      .then(value => {
        this.notificationService.success('Başarılı', 'Sosyal medya hesabı bağlantısı kaldırıldı.');
      })
      .catch(err => {
        this.notificationService.error('Hata', err.message);
      });
  }

}

interface Provider {
  providerId: string;
  name: string;
  status: boolean;
  class: string;
}
