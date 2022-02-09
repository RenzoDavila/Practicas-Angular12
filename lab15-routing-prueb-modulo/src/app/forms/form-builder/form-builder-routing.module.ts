import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from './form-builder.component';

const routes: Routes = [
  { path: '', component: FormBuilderComponent, children: [] }
];

@NgModule({
  declarations: [
   ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule { }
