import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

  addUserService(user:Hero){
    HEROES.push(user);
    console.log(HEROES);
  }

  
  delUserService(id : number){
   let x = 0;
   for ( let i = 0; i < HEROES.length ; i++){
     const element = HEROES[i].id;
     if (element == id){
       x = i;
     }
   }
   HEROES.splice(x,1);
  }

  updateNameService(user:Hero){
    let update = user;
    //myList.find(item => item.id == itemUpdated.id).name = itemUpdated.name;
    HEROES.find(hero => hero.id == update.id).name = update.name;
  }
  }
  
