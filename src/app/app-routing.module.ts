import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamsComponent }       from './teams.component';
import { TeamDetailComponent }  from './team-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/teams', pathMatch: 'full'},
  {path: 'detail',  component: TeamDetailComponent},
  {path: 'teams',       component: TeamsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
