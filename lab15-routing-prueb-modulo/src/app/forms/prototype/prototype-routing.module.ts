import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrototypeComponent } from './prototype.component';

const routes: Routes = [
  { path: '', component: PrototypeComponent, children: [] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PrototypeRoutingModule { }
