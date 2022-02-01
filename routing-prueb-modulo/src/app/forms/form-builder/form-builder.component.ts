import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  exampleForm = this.fb.group({
    name: [''],
    releaseDate: [''],
    franchise: [''],
    budget: [''],
    worldwide: [''],
    summary: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.updateControls();
  }

  updateControls(): void {
    this.exampleForm.patchValue({
      name: 'Avengers: Endgame',
      releaseDate: '26/04/2019',
      franchise: true,
      budget: 356000000,
      worldwide: 2797800564,
      summary: 'Tras los devastadores acontecimientos de Avengers: Infinity War (2018), ' +
        'el universo esta en ruinas.'
    });
  }

  resetControls(): void {
    this.exampleForm.patchValue({
      name: null,
      releaseDate: null,
      franchise: true,
      budget: null,
      worldwide: null,
      summary: null,
    });
  }

  resetFranchise(): void {
    const franchise = !(this.exampleForm.value['franchise']);
    this.exampleForm.patchValue({ franchise: franchise });
  }
}
