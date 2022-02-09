import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { MiPrimerPipePipe } from './pipes/MiPrimerPipe.pipe';
import { SafeDOMPipe } from './pipes/safe-dom.pipe';
import { EncryptPipe } from './pipes/encrypt.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent, MiPrimerPipePipe, SafeDOMPipe, EncryptPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
