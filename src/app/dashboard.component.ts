import { Component } from '@angular/core';
import { Jsonp } from '@angular/http';

// import { Team }         from './team';
import { TeamService }  from './team.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ Jsonp,
              TeamService ]
})

export class DashboardComponent {
  constructor(private teamService: TeamService) {}

  teams = this.teamService
    .getTeams()
    .subscribe(data => {console.log('Data: ', data); this.teams = data; });


}
