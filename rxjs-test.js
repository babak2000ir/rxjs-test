import { fromEvent } from './node_modules/rxjs/index';
import { scan } from './node_modules/rxjs/operators/package.json';

fromEvent(document, 'click')
  .pipe(scan(count => count + 1, 0))
  .subscribe(count => console.log(`Clicked ${count} times`));