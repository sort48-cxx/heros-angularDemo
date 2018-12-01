import { Component, OnInit } from '@angular/core';

import {Hero} from '../heros/heros'
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Hero[];
  constructor(private heroservice:HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros():void{
    this.heroservice.getHeroes()
    .subscribe(heros => this.heroes=heros.slice(1, 5));
  }



}
