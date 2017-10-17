import { Injectable }     from '@angular/core';
import { Headers, Http }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Team } from './team';

@Injectable()
export class TeamService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private teamsUrl = 'https://api.mysportsfeeds.com/v1.1/pull/nba/2016-2017-regular/overall_team_standings.json?teamstats=W,L,PTS,PTSA';
  constructor(private http: Http) {}
  getTeams(): Promise<Team[]> {
    return this.http.get(this.teamsUrl)
      .toPromise()
      .then(response => response.json().data as Team[])
      .catch(this.handleError);
  }
  getTeam(id: number): Promise<Team> {
    const url = `${this.teamsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Team)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
