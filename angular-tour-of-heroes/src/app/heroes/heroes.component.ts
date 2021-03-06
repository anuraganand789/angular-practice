import { Component, OnInit } from '@angular/core';

import { Hero }              from '../hero';
import { HeroService }       from '../hero.service';
import { MessageService }    from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes        : Hero[] = [];

  constructor(private heroService    : HeroService){}

  loadHeroes() : void {
    this.heroService
        .getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.loadHeroes();
  }

   add(name: string) : void {
    if(!(name = name.trim())) { return ; }
    this.heroService
        .addHero({ name } as Hero)
	.subscribe( hero => { this.heroes.push(hero) });
  }

   delete(heroToBeDeleted : Hero) : void{
    this.heroes = this.heroes.filter(hero => heroToBeDeleted !== hero);
    this.heroService.deleteHero(heroToBeDeleted).subscribe();
  }

}
