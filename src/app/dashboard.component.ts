import { Component, OnInit } from '@angular/core';

import { Team }         from './team';
import { TeamService }  from './team.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  teams: Team[] = [];
  constructor(private teamService: TeamService) {}
  ngOnInit(): void {
    this.teamService.getTeams()
      .then(teams => this.teams = teams.slice(1, 5));
  }
}
