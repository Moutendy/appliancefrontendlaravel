import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
export let navigation: { refreshed: boolean; url: string; };
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'applianceLaraevlfrontend';

  subscription: Subscription;
  constructor(public router: Router) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        navigation = {
          refreshed: !router.navigated,
          url: event.url
        }
      }
    });
  }
}
