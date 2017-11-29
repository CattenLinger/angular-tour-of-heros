import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import 'rxjs/add/operator/switchMap';

import { Hero } from "../hero";

import { HeroService } from "../hero.service";
import { MessageService } from "../../message/message.service";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  saving : boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private heroService: HeroService,
    private location: Location,
    private messageService: MessageService
  ) { }

  @Input() hero; Hero;

  ngOnInit() {
    this.hero = this.route.paramMap.switchMap((params : ParamMap) => this.heroService.getHero(params.get("id")));
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  save(): void{
    this.saving = true;
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
