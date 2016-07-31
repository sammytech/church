// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { AppState } from './app.service';
import { bootstrap }    from '@angular/platform-browser-dynamic';

// import { App } from './app.component';
// bootstrap(App);

// Application wide providers
export const APP_PROVIDERS = [
  AppState
];
