import { Component, OnInit } from '@angular/core';
//import the hero interface from the hero.ts
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
//Add code here
//Creates Hero object
hero: Hero = {
   id: 1,
   name: 'Windstorm'
 };

  constructor() { }

  ngOnInit() {
  }

}
