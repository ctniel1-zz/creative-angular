import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { TeamsComponent }       from './teams.component';
import { TeamDetailComponent }  from './team-detail.component';
import { TeamService }          from './team.service';

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  JsonpModule,
                  AppRoutingModule
  ],
  declarations: [ AppComponent,
                  TeamsComponent,
                  TeamDetailComponent,
  ],
  providers:    [ TeamService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
