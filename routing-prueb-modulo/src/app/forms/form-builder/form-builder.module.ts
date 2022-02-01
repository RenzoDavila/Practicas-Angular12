import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder.component';
import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PrettyJsonPipe } from './pretty-json.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormBuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormBuilderComponent,
    PrettyJsonPipe
],
exports: [
  FormBuilderComponent
],
})
export class FormBuilderModule { }
