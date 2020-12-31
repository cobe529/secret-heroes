import { Injectable } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService implements OnDestroy {
  mediaWatcher!: Subscription;
  deviceSize!: string;

  constructor(public mediaObserver: MediaObserver) { }

  ngOnDestroy() {
    this.mediaWatcher.unsubscribe();
  }

  getDeviceSize(): Observable<MediaChange> {
    return this.mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      );
  }
}
