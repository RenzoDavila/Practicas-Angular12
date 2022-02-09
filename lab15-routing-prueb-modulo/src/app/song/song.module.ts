import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent } from './song.component';
import { SafePipe } from './song/safe.pipe';
import { SongRoutingModule } from './song-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SongRoutingModule
  ],
  declarations: [
    SongComponent,
    SafePipe
  ]
})
export class SongModule { }
