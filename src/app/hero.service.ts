import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // Using Observable to have asynchrounous signature for getHeroes()
  // Synchronous signature wouldn't work for real apps because it wouldn't wait on the data before rest of the code could run, causing the other elements that     
  // rely on that data to mess up if data doesn't come back in time
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }
}
