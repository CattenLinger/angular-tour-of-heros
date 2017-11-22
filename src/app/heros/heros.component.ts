import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";

import { HeroService } from '../hero.service';
import { MessageService } from "../message.service";

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private heroService:HeroService, private messageService : MessageService) { }

  heroes : Hero[];

  selectedHero : Hero;

  onSelect(hero : Hero){
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroes()
    .subscribe(heroes => {
      this.heroes = heroes;
      this.messageService.add("HeroComponent : hero data loaded. ");
    });
  }

  ngOnInit() {
    this.getHeroes();
  }

}
