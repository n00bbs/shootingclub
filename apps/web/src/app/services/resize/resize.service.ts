import { Injectable } from '@angular/core';
import { distinctUntilChanged, fromEvent, map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  private resize$ = fromEvent(window, 'resize').pipe(
    map(() => ({ width: window.innerWidth, height: window.innerHeight })),
    startWith({ width: window.innerWidth, height: window.innerHeight }),
  );

  constructor() {}

  public getResize() {
    return this.resize$;
  }

  private isMobile$ = this.resize$.pipe(
    map(({ width }) => width < 768),
    distinctUntilChanged(),
  );

  public getIsMobile() {
    return this.isMobile$;
  }
}
