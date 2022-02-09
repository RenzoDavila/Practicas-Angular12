import { environment } from './../../environments/environment';
29;
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
})
export class AngularComponent implements OnInit {
  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;
  features: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private meta: Meta,
    private titleService: Title
  ) {
    this.features = [
      {
        type: 'CRUD',
        description: 'CRUD , API Rest, Components, Pages, Extends',
        image: 'demo-responsive-images-list.png',
        link: 'crud',
      },
      {
        type: 'Services',
        description: 'Use services to view a playlist and a youtube player',
        image: 'demo-services-playlist-youtube.png',
        link: 'services',
      },
      {
        type: 'Components',
        description: 'Channel Component with Input, Output and Event Emitter',
        image: 'demo-components.png',
        link: 'components',
      },
      {
        type: 'HttpClient',
        description: 'Use an external API with the HttpClient module',
        image: 'demo-httpclient.png',
        link: 'httpclient',
      },
      {
        type: 'Reactive Form',
        description: 'A model-driven approach to handling forminputs',
        image: 'demo-reactive-forms.png',
        link: 'forms',
      },
      {
        type: 'Template Driven Forms',
        description: 'Forms are the mainstay of business applications',
        image: 'demo-template-driven-forms.png',
        link: 'forms',
      },
      {
        type: 'Modal',
        description:
          'How to implement modal windows with Angular and Bootstrap',
        image: 'demo-template-driven-forms.png',
        link: 'modal',
      },
      {
        type: 'Prism',
        description: 'Use a lightweight, extensible syntax highlighter',
        image: 'demo-template-driven-forms.png',
        link: 'prism',
      },
    ];
  }
  ngOnInit() {
    this.loadScript('assets/params/js/index.js');
    this.titleService.setTitle(
      'Aplic Web para mostrar caracteristicas Angular'
    );
    this.meta.addTag({
      name: 'author',
      content: 'jorge guerra',
    });
    32;
    this.meta.updateTag({
      name: 'description',
      content:
        'Esta aplicacion esta desarrollada en Angular version 13.1.1 y bootstrap 5.1.3' +
        ' Se realicen operaciones diversas como Routing, Acceso API, pipe, etc',
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
