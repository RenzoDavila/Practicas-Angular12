import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Single2Component } from './single2.component';
import { Single2RoutingModule } from './single2-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    Single2RoutingModule,
    FormsModule
  ],
  declarations: [Single2Component]
})
export class Single2Module { }
