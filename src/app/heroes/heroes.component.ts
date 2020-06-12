import { Component, OnInit } from '@angular/core';
//import the hero data interface from the hero.ts
import { Hero } from '../hero';
//import the HEROES data from the mock-heroes.ts
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
//Add code here
//Creates Hero object
// hero: Hero = {
//    id: 1,
//    name: 'Windstorm'
//  };

//heroes will be called in repeater iterator
 heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
