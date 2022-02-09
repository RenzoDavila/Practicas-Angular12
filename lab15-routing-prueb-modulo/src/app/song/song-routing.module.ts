import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SongComponent } from './song.component';

const routes: Routes = [
  { path: '', component: SongComponent, children: [
    { path: 'song', component: SongComponent }
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SongRoutingModule { }
