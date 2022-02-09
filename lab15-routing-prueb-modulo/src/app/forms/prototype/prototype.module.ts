import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrototypeComponent } from './prototype.component';
import { PrototypeRoutingModule } from './prototype-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    PrototypeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PrototypeComponent],
  exports: [
    PrototypeComponent
  ],
})
export class PrototypeModule { }
