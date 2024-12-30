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
  {path:'recuperation/:formation',component:RecupComponent},
  {path:'**',component:UnfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
