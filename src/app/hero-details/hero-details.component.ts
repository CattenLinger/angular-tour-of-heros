import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Hero } from "../hero";

import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private messageService: MessageService
  ) { }

  @Input() hero; Hero;

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => {
      this.messageService.add(`HeroDetailsComponenet: data of hero id=${id} loaded`);
      this.hero = hero;
    })
  }

  goBack(): void {
    this.location.back();
  }
}
