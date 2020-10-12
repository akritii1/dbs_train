import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HEROES } from './mock-heroes';
import { NgForm }   from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'newapp';

  heroes : Hero[];
  selectedHero: Hero;
  id : number;
  name : string;
  id1 : number;
  id2 : string = '';
  id3 : number;
  id4 : number;
  id5 : string = '';

  constructor(private heroService: HeroService) {}
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  addUser(form : NgForm){
    const value = form.value;
    console.log("Add user function");
    console.log(form.value);
    this.id = form.value.id1;
    console.log(this.id);
    this.name = form.value.id2;
    console.log(name);
    const newUser = new Hero(this.id,this.name);
    console.log(newUser);
    this.heroService.addUserService(newUser);
  }

  delUser(form :NgForm){
    const value = form.value;
    console.log("Delete user function");
    console.log(form.value);
    this.id = form.value.id3;
    console.log(this.id);
    this.heroService.delUserService(this.id);
  }

  updateName(form : NgForm){
    const value = form.value;
    console.log("Update name");
    console.log(form.value);
    this.id = form.value.id4;
    console.log(this.id);
    this.name = form.value.id5;
    console.log(this.name);
    const updateUser = new Hero(this.id,this.name);
    this.heroService.updateNameService(updateUser);
  }

  
}
