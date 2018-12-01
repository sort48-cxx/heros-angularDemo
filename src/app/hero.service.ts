import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

import {HEROES} from '../app/heros/mock-heroes'
import {Hero} from '../app/heros/heros'
import {MessageService} from '../app/message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageservice:MessageService) { }

  // getHeroes(){
  //   return HEROES;
  // }

  getHeroes():Observable<Hero[]>{
    this.messageservice.add("HeroService: fetched heroes");
    return of(HEROES);
  }

  getHeroe(id:number):Observable<Hero>{
    this.messageservice.add(`HeroService: fetched hero id=${id}`);
    return of (HEROES.find(hero=>hero.id===id));
  }
}
