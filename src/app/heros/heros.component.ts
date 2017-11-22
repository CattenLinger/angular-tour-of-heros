import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private heroService:HeroService) { }

  heroes : Hero[];

  selectedHero : Hero;

  onSelect(hero : Hero){
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

}
