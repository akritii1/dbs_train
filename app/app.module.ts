import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeComponent } from './college/college.component';
import { StuComponent } from './stu/stu.component';
import { StudiesComponent } from './studies/studies.component';
import {RouterModule, Routes} from '@angular/router';
//import {Observable, of} from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


const appRoutes : Routes = [
  {path: 'college',
   component:CollegeComponent
  },
  {path: 'stu/:id',
   component: StuComponent
  
  },
  {path: 'study',
   component: StudiesComponent
  }
  ];
  

@NgModule({
  declarations: [
    AppComponent,
    CollegeComponent,
    StuComponent,
    StudiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
