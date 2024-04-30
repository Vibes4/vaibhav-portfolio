import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'vk-app-layout',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {
  menuItems: Array<{ display: string; value: string }> = [
    { display: 'Home', value: 'home' },
    { display: 'About', value: 'about' },
    { display: 'Contact-me', value: 'contact-me' },
  ];

  ngOnInIt() {}

  menuClick(item: string) {}
}
