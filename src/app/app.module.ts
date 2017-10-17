import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }            from './dashboard.component';
import { TeamsComponent }       from './teams.component';
import { TeamDetailComponent }  from './team-detail.component';
import { TeamService }          from './team.service';
import { TeamSearchComponent }  from './team-search.component';

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  AppRoutingModule
  ],
  declarations: [ AppComponent,
                  DashboardComponent,
                  TeamsComponent,
                  TeamDetailComponent,
                  TeamSearchComponent
  ],
  providers:    [ TeamService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
