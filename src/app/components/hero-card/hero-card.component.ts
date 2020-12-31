import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/Hero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.less']
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;

  constructor() { }

  ngOnInit(): void {
  }
}
