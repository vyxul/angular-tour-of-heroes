import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  // Constructor should just have the single instance of HeroService injected, the onInit method will do the actual work
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // Using subscribe() since heroService.getHeroes() returns an Observable object, need to use subscribe() to properly wait for the data and assign it
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name)
      return;

    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    // the code doesn't do anything with the Observable object returned by heroService.deleteHero(),
    // but as a rule, Observable does nothing until something subscribes so below line is still needed for it to process
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
