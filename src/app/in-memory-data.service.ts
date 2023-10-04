import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Zhou Mingrui' },
      { id: 1, name: 'Klein Moretti' },
      { id: 2, name: 'Sherlock Moriarty' },
      { id: 3, name: 'Gehrman Sparrow' },
      { id: 4, name: 'Dwayne Dantes' },
      { id: 5, name: 'Merlin Hermes' },
      { id: 6, name: 'The World'},
      { id: 7, name: 'The Fool that doesn\'t belong to this era' },
      { id: 8, name: 'The Mysterious Ruler above the gray fog' },
      { id: 9, name: 'The King of yellow and black who wields good luck' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (0).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 0;
  }
}