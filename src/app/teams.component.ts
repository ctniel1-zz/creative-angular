import { Component} from '@angular/core';
import { Router }   from '@angular/router';
import { Jsonp } from '@angular/http';

import { TeamService }  from './team.service';

@Component({
  selector: 'my-teams',
  templateUrl: './teams.component.html',
  styleUrls: [ './teams.component.css' ],
  providers: [ Jsonp, TeamService ]
})

export class TeamsComponent {
  selectedteam: number = 1;
  constructor(private teamService: TeamService,
              private router: Router) {}

  teams = this.teamService
    .getTeams()
    .subscribe(data => {console.log('Data: ', data); this.teams = data; });

  gotoDetail(teamID: number): void {
    this.selectedteam = teamID;
    console.log(teamID);
  }
}
