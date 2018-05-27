import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html'
})
export class TitleComponent {
  title = '';

  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(() => {
        let currentRoute = this.route.root;
        let title = '';
        do {
          const childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach(routes => {
            if (routes.outlet === 'primary') {
              title = routes.snapshot.data.title;
              currentRoute = routes;
            }
          });
        } while (currentRoute);

        this.title = title;
        this.titleService.setTitle(this.title);
      });
  }
}
