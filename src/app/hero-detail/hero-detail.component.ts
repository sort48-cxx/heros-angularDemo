import { Component, OnInit,Input} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {HeroService} from '../hero.service'

import {Hero} from '../heros/heros'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero:Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location

  ) { }

  ngOnInit() {
    this.getHeros();
  }
  //@Input() hero: Hero; //声明接收数据类型

  getHeros():void{
    console.log(this.route,this.location);
    const id=+this.route.snapshot.paramMap.get("id");
    this.heroService.getHeroe(id)
    .subscribe(hero=>this.hero=hero)
  }
}
