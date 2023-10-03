import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  // Initialize as null when app starts so that the bottom portion of html file doesn't appear until a hero button is clicked
  selectedHero?: Hero;

  // Constructor should just have the single instance of HeroService injected, the onInit method will do the actual work
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  // Passed by object reference by heroes component html file
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Heroes Component: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    // Using subscribe() since heroService.getHeroes() returns an Observable object, need to use subscribe() to properly wait for the data and assign it
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
