import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm }   from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assign3stu';
  x: number;
  id3 :number;
  id: number;
  delUser(form :NgForm){
    const value = form.value;
    console.log("Delete user function");
    console.log(form.value);
    this.x = form.value.id3;
    console.log(this.x);
  }
}
