import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component {
  /** Based on the screen size, switch from standard to one column per row */
  cards: Observable<{title: string; cols: number; rows: number;}[]> =
      this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(({matches}) => {
        if (matches) {
          return [
            {title: 'Card 1', cols: 1, rows: 1}, {title: 'Card 2', cols: 1, rows: 1},
            {title: 'Card 3', cols: 1, rows: 1}, {title: 'Card 4', cols: 1, rows: 1}
          ];
        }

        return [
          {title: 'Card 1', cols: 2, rows: 1}, {title: 'Card 2', cols: 1, rows: 1},
          {title: 'Card 3', cols: 1, rows: 2}, {title: 'Card 4', cols: 1, rows: 1}
        ];
      }));

  constructor(private breakpointObserver: BreakpointObserver) {}
}
