import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { PruebaComponent } from './prueba/prueba.component';
import { AngularModule } from './angular/angular.module';
import { SongModule } from './song/song.module';
import { FormsModule } from './forms/forms.module';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    AngularModule,
    SongModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
