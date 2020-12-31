import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ResponsiveService } from './services/responsive/responsive.service';
import { MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { BreakPoint } from './enums/enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'secret-hero';
  responsiveWatcher!: Subscription;
  breakpoint!: string;
  expandMenu: boolean = false;

  constructor(private router: Router, private responsiveService: ResponsiveService) {}

  ngOnInit(): void {
    this.responsiveWatcher = this.responsiveService.getDeviceSize().subscribe((change: MediaChange) => {
      this.breakpoint = change.mqAlias;
    });
  }

  ngOnDestroy(): void {
    this.responsiveWatcher.unsubscribe();
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
