import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import(`./about/about.module`).then((m) => m.AboutModule),
  },
  {
    path: 'angular',
    loadChildren: () =>
      import(`./angular/angular.module`).then((m) => m.AngularModule),
  },
  {
    path: 'song',
    loadChildren: () => import(`./song/song.module`).then((m) => m.SongModule),
  },
  { path: '', component: PruebaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
