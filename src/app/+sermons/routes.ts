import { Sermons } from './sermons.component';
import { Index } from './index.component';
import { Outline } from './outline.component';
import { Reading } from './reading.component';

// async components must be named routes for WebpackAsyncRoute
export const routes = {
  path: 'sermons', component: Sermons,
  children: [
    { path: '', component: Index },
    { path: 'outline', component: Outline },
    { path: 'reading', component: Reading }
  ]
};
