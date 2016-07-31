/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'live',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: [
    './live.style.css'
  ],
  templateUrl: './live.template.html',
  
})

export class Live {
  @Input()
  visible:Boolean;
  
  constructor(
    public appState: AppState) {

  }

  hideLive(){
     if(this.appState.state.visible){
       this.appState.set('visible', false);
      // console.log("live");
    }
  }

  ngOnInit() {
    console.log('Initial App Statess', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
