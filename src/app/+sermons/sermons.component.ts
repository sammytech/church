import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'sermons',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: `
    <router-outlet></router-outlet>
  `
})
export class Sermons {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Sermons` component');
  }

}
