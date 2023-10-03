import { Component } from '@angular/core';
import { Hero } from '../hero';

import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES;
  // Initialize as null when app starts so that the bottom portion of html file doesn't appear until a hero button is clicked
  selectedHero?: Hero;

  // Passed by object reference by heroes component html file
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
