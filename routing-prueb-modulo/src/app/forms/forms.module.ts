import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { FormsRoutingModule } from './forms-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SingleModule } from './single/single.module';
import { FormControlModule } from './form-control/form-control.module';
import { Single2Module } from './single2/single2.module';
import { PrototypeModule } from './prototype/prototype.module';
import { FormBuilderModule } from './form-builder/form-builder.module';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    HttpClientModule,
    RouterModule,
    SingleModule,
    FormControlModule,
    Single2Module,
    PrototypeModule,
    FormBuilderModule
  ],
    exports: [
      FormsComponent,
  ],
  declarations: [FormsComponent]
})
export class FormsModule { }
