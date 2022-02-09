import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single2',
  templateUrl: './single2.component.html',
  styleUrls: ['./single2.component.css']
})
export class Single2Component implements OnInit {

  firstName = 'Paul';
  lastName = 'Atreides';

  constructor() { }

  ngOnInit() {
  }

}
