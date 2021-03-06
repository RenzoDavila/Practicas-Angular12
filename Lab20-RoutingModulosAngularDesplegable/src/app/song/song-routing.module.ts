import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SongComponent } from './song.component';

const routes: Routes = [
  {
    path: '',
    component: SongComponent,
    children: [{ path: 'Song', component: SongComponent }],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongRoutingModule {}
