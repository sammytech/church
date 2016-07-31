/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { Live } from './live.component'
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  templateUrl: './app.template.html',
  directives:[Live]
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Holiness Christain Radio';
  url = 'https://twitter.com/AngularClass';
  live = false;

  constructor(
    public appState: AppState) {
// this.appState.set('visible', false);
  }
  showLive(){
    if(!this.live){
      this.live = true;
      console.log("live");
    }

    if(!this.appState.get('visible')){
       this.appState.set('visible', true);
      // console.log("live");
    }
    
  }
  ngOnInit() {
    console.log('Initial App State', this.appState.state);
    this.appState.set('visible', false);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
