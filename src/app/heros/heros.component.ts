import { Component, OnInit } from '@angular/core';
import {Hero} from './heros'
import {HEROES} from './mock-heroes'

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
  heroes = HEROES;
  selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }
  onSelect(hero:Hero):void{
    console.log(hero);
    this.selectedHero=hero;
  }
}
