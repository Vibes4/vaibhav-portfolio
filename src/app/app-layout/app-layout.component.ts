import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { DetailsComponent } from '../details/details.component';
import { ContactsComponent } from '../contacts/contacts.component';
@Component({
  selector: 'vk-app-layout',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    ContactsComponent
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {
  menuItems: Array<{ display: string; value: string }> = [
    { display: 'Home', value: 'home' },
    { display: 'About', value: 'about' },
    { display: 'What I Know', value: 'what-i-know' },
    { display: 'Contact Me', value: 'contact-me' },
  ];
  private routerEventSubscriber!: Subscription;
  isLogoHidden: Boolean = false;
  constructor(private router: Router) {
    this.routerEventSubscriber = this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((x: any) => (this.isLogoHidden = x.url !== '/home'));
  }
  ngOnInIt() {}

  ngDestroy() {
    this.routerEventSubscriber?.unsubscribe();
  }
  menuClick(item: string) {}
}
