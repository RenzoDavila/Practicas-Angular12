import { Component, OnInit } from '@angular/core';
import { ITEMS } from './items';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  items = ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
