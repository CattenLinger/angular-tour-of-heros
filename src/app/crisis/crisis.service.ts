import { Injectable } from '@angular/core';
import { Crisis } from './crisis';

const CRISIS = [
  new Crisis(1, "Dragon Burning Cities"),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

@Injectable()
export class CrisisService {

  constructor() { }

  getCrisis() : Crisis[] {
    return CRISIS;
  }

  getOneCrisis(id : number | string) : Crisis {
    return CRISIS[id];
  }

}
