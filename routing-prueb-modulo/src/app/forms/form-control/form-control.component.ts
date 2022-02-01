import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  name = new FormControl('');
  releaseDate = new FormControl('');
  franchise = new FormControl('');
  budget = new FormControl('');
  worldwide = new FormControl('');
  summary = new FormControl('');
  constructor() { }

  ngOnInit() {
    this.updateControls();
  }

  updateControls(): void {
    this.name.setValue('Avengers: Endgame');
    this.releaseDate.setValue('26/04/2019');
    this.franchise.setValue(true);
    this.budget.setValue('356000000');
    this.worldwide.setValue('2797800564');
    this.summary.setValue('Tras los devastadores acontecimientos de Vengadores: Infinity War (2018), ' +
      'el universo esta en ruinas.');
  }

  resetControls(): void {
    this.name.setValue(null);
    this.releaseDate.setValue(null);
    this.franchise.setValue(null);
    this.budget.setValue(null);
    this.worldwide.setValue(null);
    this.summary.setValue(null);
  }

}
