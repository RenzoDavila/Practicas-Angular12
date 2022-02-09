import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent } from './song.component';
import { SongRoutingModule } from './song-routing.module';
import { SafePipe } from './song/safe.pipe';

@NgModule({
  imports: [CommonModule, SongRoutingModule],
  declarations: [SongComponent, SafePipe],
})
export class SongModule {}
