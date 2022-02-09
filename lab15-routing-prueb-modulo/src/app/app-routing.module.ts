import { PruebaComponent } from './prueba/prueba.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './about/about.module';
import { AngularModule } from './angular/angular.module';
import { SongModule } from './song/song.module';
import { FormsModule } from './forms/forms.module';
import { CrudModule } from './crud/crud.module';

const routes: Routes = [
  { path: 'about', loadChildren: () => import(`./about/about.module`).then(m => m.AboutModule) },
  { path: 'angular', loadChildren: () => import(`./angular/angular.module`).then(m => m.AngularModule) },
  { path: 'song', loadChildren: () => import(`./song/song.module`).then(m => m.SongModule) },
  { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) },
  { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
  { path: '', component: PruebaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
