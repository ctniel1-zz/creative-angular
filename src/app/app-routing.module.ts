import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { TeamsComponent }       from './teams.component';
import { TeamDetailComponent }  from './team-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard',   component: DashboardComponent},
  {path: 'detail',  component: TeamDetailComponent},
  {path: 'teams',       component: TeamsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
