import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamService {

  private url = './teams.json';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getTeams() {
    return this.http.get(this.url)
      .map(res => res.json());
  }
}

