import { Component, OnInit, HostListener } from '@angular/core';
import { HeroService } from '../../services/hero/hero.service';
import { GameService } from '../../services/game/game.service';
import { forkJoin } from 'rxjs';
import { Hero } from '../../models/Hero';
import { WhackHero } from '../../models/WhackHero';
import { ScoreBoard } from '../../models/ScoreBoard';
import { HeroAttribute, AttackType } from "../../enums/enum";

@Component({
  selector: 'app-whack-heroes',
  templateUrl: './whack-heroes.component.html',
  styleUrls: ['./whack-heroes.component.less']
})
export class WhackHeroesComponent implements OnInit {
  public whackKey!: string;
  public whackValue!: string;
  public qualifiedHeroes: Hero[] = [];
  public whackHeroes: WhackHero[] = [];
  public shrinkWhackHeroScoreBoard: boolean = false;
  public whackHeroScoreBoard: ScoreBoard = new ScoreBoard;
  public unwhackedHeroesCount!: number;
  public allocatedSeconds!: number;
  
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    if (event.target['scrollingElement'].scrollTop === 0) {
      this.shrinkWhackHeroScoreBoard = false;
    } else {
      this.shrinkWhackHeroScoreBoard = true;
    }
  }

  constructor(private gameService: GameService, private heroService: HeroService) { }

  ngOnInit(): void {
    forkJoin([this.gameService.getWhackType(), this.heroService.getHeroes()])
      .subscribe(([whackType, heroes]) => {
        const whackKeys: string[] = Object.values(whackType);
        this.whackKey = whackKeys[Math.floor(Math.random() * whackKeys.length)];

        switch (this.whackKey) {
          case 'HeroAttribute': {
            const values: string[] = Object.values(HeroAttribute);
            this.whackValue = values[Math.floor(Math.random() * values.length)];
            break;
          }
          case 'AttackType': {
            const values: string[] = Object.values(AttackType);
            this.whackValue = values[Math.floor(Math.random() * values.length)];
            break;
          }
        }

        heroes.forEach(h => {
          // Add into whackHeroes
          this.whackHeroes.push(new WhackHero(h['id'], h['localized_name'], String(h['name']).replace('npc_dota_hero_', ''), h['legs'], HeroAttribute[h['primary_attr']], AttackType[h['attack_type']]));
  
          // Add into qualifiedHeroes
          let qualified: boolean = false;
          switch (this.whackKey) {
            case 'HeroAttribute': {
              if (HeroAttribute[h['primary_attr']] === this.whackValue) {
                qualified = true;
              }
              break;
            }
            case 'AttackType': {
              if (AttackType[h['attack_type']] === this.whackValue) {
                qualified = true;
              }
              break;
            }
          }

          if (qualified) {
            this.qualifiedHeroes.push(new Hero(h['id'], h['localized_name'], String(h['name']).replace('npc_dota_hero_', ''), h['legs'], HeroAttribute[h['primary_attr']], AttackType[h['attack_type']]));
          }
        })

        for (let i: number = this.whackHeroes.length - 1; i > 0; i--) {
          const j: number = Math.floor(Math.random() * (i + 1));
          [this.whackHeroes[i], this.whackHeroes[j]] = [this.whackHeroes[j], this.whackHeroes[i]];
        }

        this.unwhackedHeroesCount = this.qualifiedHeroes.length;
        this.allocatedSeconds = Math.round(this.unwhackedHeroesCount);
      });
  }

  whackHero(whackHero: WhackHero): void {
    whackHero.whacked = true;

    let scored: boolean = false;
    switch (this.whackKey) {
      case 'HeroAttribute': {
        if (whackHero['primary_attr'] === this.whackValue) {
          scored = true;
        }
        break;
      }
      case 'AttackType': {
        if (whackHero['attack_type'] === this.whackValue) {
          scored = true;
        }
        break;
      }
    }

    if (scored) {
      whackHero.result = true;
      this.whackHeroScoreBoard.scoreCorrect();
      this.unwhackedHeroesCount--;
    } else {
      whackHero.result = false;
      this.whackHeroScoreBoard.scoreWrong();
    }
  }

  gameOver(): void {
    this.whackHeroScoreBoard.game_over = true;
  }
}
