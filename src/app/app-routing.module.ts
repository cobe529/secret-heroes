import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ViewHeroesComponent } from './pages/view-heroes/view-heroes.component';
import { WhackHeroesComponent } from './pages/whack-heroes/whack-heroes.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'view-heroes', component: ViewHeroesComponent, pathMatch: 'full' },
  { path: 'whack-heroes', component: WhackHeroesComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
