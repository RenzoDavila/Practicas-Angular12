import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single.component';
import { SingleRoutingModule } from './single-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SingleRoutingModule
  ],
  declarations: [SingleComponent]
})
export class SingleModule { }
