import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RecupComponent } from './recup/recup.component';
import { UnfoundComponent } from './unfound/unfound.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'list',component:ListComponent},
  //routage paramétré
  {path:'recuperation/:formation',component:RecupComponent}, //formation est un paramétre

  {path:'**',component:UnfoundComponent} // les éléments au dessous de ce routage ne seront pas pris en compte
  //DRY : Don't Repeat Yourself

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
