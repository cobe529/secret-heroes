import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less']
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() seconds: number = 60;
  @Input() gameIsOver: boolean = false;
  @Output() gameOver: EventEmitter<boolean> = new EventEmitter();

  private subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(1000)
      .subscribe(x => {
        if (this.seconds > 0) {
          this.seconds--;
        } 
        if (this.seconds === 0) {
          this.subscription.unsubscribe();
          this.gameOver.emit();
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
