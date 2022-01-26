import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './about/about.module';
import { AboutComponent } from './about/about/about.component';
import { AngularModule } from './angular/angular.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { SongModule } from './song/song.module';

@NgModule({
  declarations: [AppComponent, PruebaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    AngularModule,
    SongModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
