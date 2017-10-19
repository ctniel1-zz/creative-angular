import 'rxjs/add/operator/switchMap';
import { Component, Input }        from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location }                 from '@angular/common';

import { TeamService }  from './team.service';

@Component({
  selector: 'team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: [ './team-detail.component.css' ]
})

export class TeamDetailComponent {
  @Input() teamID: number;
  constructor (
    private teamService: TeamService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  teams = this.teamService
    .getTeams()
    .subscribe(data => {console.log('Data: ', data); this.teams = data; });
  goBack(): void {
    this.location.back();
  }
}
