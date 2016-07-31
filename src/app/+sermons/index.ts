export { Sermons } from './sermons.component';
export { Index } from './index.component';
export { Outline } from './outline.component';
export { Reading } from './reading.component';

console.log('`Sermons` bundle loaded asynchronously');
// Must be exported for WebpackAsyncRoute
export * from './routes';
