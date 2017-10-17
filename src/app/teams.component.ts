import { Component, OnInit} from '@angular/core';
import { Router }           from '@angular/router';

import { Team }         from './team';
import { TeamService }  from './team.service';

@Component({
  selector: 'my-teams',
  templateUrl: './teams.component.html',
  styleUrls: [ './teams.component.css' ]
})

export class TeamsComponent implements OnInit {
  teams: Team[];
  selectedTeam: Team;
  constructor(
    private teamService: TeamService,
    private router: Router
  ) {}
  getTeams(): void {
    this.teamService
      .getTeams()
      .then(teams => this.teams = teams);
  }
  ngOnInit(): void {
    this.getTeams();
  }
  onSelect(team: Team): void {
    this.selectedTeam = team;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedTeam.id]);
  }
}
