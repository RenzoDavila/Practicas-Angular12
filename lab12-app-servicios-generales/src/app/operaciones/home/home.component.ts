import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;
  features: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private meta: Meta,
    private titleService: Title
  ) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      let navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function () {
          if (navMain) {
            navMain.classList.remove('show');
          }
        };
      }
    }
    this.titleService.setTitle('Aplicacion Web en Angular 12');
    this.meta.addTag({
      name: 'author',
      content: 'jorge guerra',
    });
    this.meta.updateTag({
      name: 'description',
      content:
        'Esta aplicacion fue desarrollada con Angularversion 13.1.1 y bootstrap 5.1.3' +
        ' Se aplica Routing, Lazy loading, Server side rendering y Progressive Web App (PWA)',
    });
  }
  loadScript(name: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = name;
      s.async = false;
      document.getElementsByTagName('head')[0].appendChild(s);
    }
  }
}
