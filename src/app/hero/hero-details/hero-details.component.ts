import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';

import { Hero } from "../hero";

import { HeroService } from "../hero.service";
import { MessageService } from "../../message/message.service";
import { Subscriber } from 'rxjs/Subscriber';
import { slideInDownAnimation } from '../../animations/animations';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
  animations: [slideInDownAnimation]
})
export class HeroDetailsComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  saving : boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private heroService: HeroService,
    private location: Location,
    private messageService: MessageService
  ) { }

  // @Input() hero: Hero;
  // hero$ : Observable<Hero>;

  hero : Hero;

  ngOnInit() {
    let heroId = this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(heroId).subscribe(hero => {
      this.hero = hero;
    });
    // this.hero$ = this.route.paramMap.switchMap((params : ParamMap) => this.heroService.getHero(params.get("id")));
  }

  save(): void{
    this.saving = true;
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
