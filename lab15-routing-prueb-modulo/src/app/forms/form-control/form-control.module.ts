import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './form-control.component';
import { FormControlRoutingModule } from './form-control-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: FormControlComponent, children: [] }
];

@NgModule({
  imports: [
    CommonModule,
    FormControlRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormControlComponent],
  exports: [
    FormControlComponent, RouterModule
  ],
})
export class FormControlModule { }
