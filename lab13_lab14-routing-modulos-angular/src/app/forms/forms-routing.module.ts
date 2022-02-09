import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./single/single.module').then((mod) => mod.SingleModule),
      },
      {
        path: 'single2',
        loadChildren: () =>
          import('./single2/single2.module').then((mod) => mod.Single2Module),
      },
      {
        path: 'form-control',
        loadChildren: () =>
          import('./form-control/form-control.module').then(
            (mod) => mod.FormControlModule
          ),
      },
      {
        path: 'prototype',
        loadChildren: () =>
          import('./Prototype/Prototype.module').then(
            (mod) => mod.PrototypeModule
          ),
      },
      {
        path: 'form-builder',
        loadChildren: () =>
          import('./form-builder/form-builder.module').then(
            (mod) => mod.FormBuilderModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
