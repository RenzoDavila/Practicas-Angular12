import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular.component';
import { AngularRoutingModule } from './angular-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AngularRoutingModule
  ],
  declarations: [AngularComponent]
})
export class AngularModule { }
