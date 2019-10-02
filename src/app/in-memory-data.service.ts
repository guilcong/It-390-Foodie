import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1000, name: 'American Food' },
      { id: 12, name: 'Asian Spots' },
      { id: 13, name: 'Fast Food' },
      { id: 14, name: 'Drink Spots' },
      { id: 15, name: 'Boba!' },
      { id: 16, name: 'Spicy food' },
      { id: 17, name: 'Ramen' },
      { id: 18, name: 'Pizza places' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}