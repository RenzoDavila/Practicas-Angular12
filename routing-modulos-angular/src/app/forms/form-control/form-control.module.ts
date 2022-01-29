import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './form-control.component';
import { FormControlRoutingModule } from './form-control-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormControlRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [FormControlComponent],
  exports: [FormControlComponent, RouterModule],
})
export class FormControlModule {}
