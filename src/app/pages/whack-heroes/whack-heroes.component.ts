import { Component, OnInit } from '@angular/core';
import { HeroAttribute } from '../../enums/enum';

@Component({
  selector: 'app-whack-heroes',
  templateUrl: './whack-heroes.component.html',
  styleUrls: ['./whack-heroes.component.less']
})
export class WhackHeroesComponent implements OnInit {
  randomAttr!: string;

  constructor() { }

  ngOnInit(): void {
    // Random HeroAttribute
    const heroAttrKeys:string[] = Object.values(HeroAttribute);
    this.randomAttr = heroAttrKeys[Math.floor(Math.random() * heroAttrKeys.length)];
  }
}
