import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { Subscription } from 'rxjs';
import { Hero } from '../../models/Hero';
import { HeroAttribute } from "../../enums/enum";

@Component({
  selector: 'app-view-heroes',
  templateUrl: './view-heroes.component.html',
  styleUrls: ['./view-heroes.component.less']
})
export class ViewHeroesComponent implements OnInit, OnDestroy {
  private _heroSubscription!: Subscription;
  public heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this._heroSubscription = this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes.map(h => {
        return new Hero(h['id'], h['localized_name'], String(h['name']).replace('npc_dota_hero_', ''), h['legs'], HeroAttribute[h['primary_attr']], h['attack_type'])
      });
    });
  }

  ngOnDestroy(): void {
    this._heroSubscription.unsubscribe();
  }
}
