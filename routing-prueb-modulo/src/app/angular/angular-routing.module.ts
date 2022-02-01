import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AngularComponent } from './angular.component';

const routes: Routes = [
  { path: '', component: AngularComponent, children: [
    { path: 'angular', component: AngularComponent }
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
