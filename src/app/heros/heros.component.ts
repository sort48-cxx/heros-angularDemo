import { Component, OnInit } from '@angular/core';
import {Hero} from './heros'
// import {HEROES} from './mock-heroes'

import {HeroService} from '../hero.service'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  // hero:Hero={
  //   id:1,
  //   name:'Windstorm',
  // }
  // heroes = HEROES;

  heroes:Hero[];
  selectedHero: Hero;
  constructor(private heroservice:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero:Hero):void{
    console.log(hero);
    this.selectedHero=hero;
  }

  getHeroes(){
   this.heroservice.getHeroes()
    .subscribe(heroes=>this.heroes=heroes);
  }
}
