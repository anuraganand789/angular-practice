import { Component, OnInit , Input } from '@angular/core';
import { Hero }              from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location }      from '@angular/common';
import { HeroService }   from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero? : Hero;

  constructor(
    private route: ActivatedRoute,
    private location : Location,
    private heroService : HeroService
  ) {}

  ngOnInit(): void {
    this.setHero();
  }

  setHero() : void{
    //+ converts string to number
    const heroId = +this.route.snapshot.paramMap.get('id')!;
    this
      .heroService
      .getHero(heroId)
      .subscribe((hero: Hero) => this.hero = hero);
  }

  clear() : void {
    this.hero = undefined;
  }

  goBack() : void {
    this.location.back();
  }

  save() : void {
    this.heroService.updateHero((this.hero as Hero)).subscribe(() => this.goBack());
  }

}
