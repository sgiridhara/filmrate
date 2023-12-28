import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import path from 'node:path';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
  {path:' ', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'movie', component:MovieComponent},
  {path:'**', component:LoginComponent},



];
