import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './form-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: FormControlComponent, children: [] }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FormControlRoutingModule { }
