import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// based on the path string, the corresponding component will be executed and shown in browser
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  // the : character in the path indicates that :id is a placeholder for a specific hero id
  { path: 'detail/:id', component: HeroDetailComponent }
]

// @NgModule intializes the router and starts it listening for browser location changes
@NgModule({
  // Adds the RouterModule to the AppRoutingModule and configures it with routes in one step
  imports: [RouterModule.forRoot(routes)],
  // Exports makes the RouterModule avialable throughout the whole application
  exports: [RouterModule]
})
export class AppRoutingModule { }
