import { Component } from '@angular/core';

@Component({
  selector: 'reading',

  templateUrl: './reading.template.html'
})
export class Reading {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Reading` component');
  }
}
