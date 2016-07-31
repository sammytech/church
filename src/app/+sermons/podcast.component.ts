import { Component } from '@angular/core';

@Component({
  selector: 'reading',

  template: `
    <h1>Hello from Reading</h1>
  `
})
export class Reading {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Reading` component');
  }
}
