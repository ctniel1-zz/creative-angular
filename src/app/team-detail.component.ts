import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Team }         from './team';
import { TeamService }  from './team.service';

@Component({
  selector: 'team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: [ './team-detail.component.css' ]
})

export class TeamDetailComponent implements OnInit {
  team: Team;
  constructor (
    private teamService: TeamService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.teamService.getTeam(+params.get('id')))
      .subscribe(team => this.team = team);
  }
  goBack(): void {
    this.location.back();
  }
}
