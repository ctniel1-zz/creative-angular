import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { Observable }         from 'rxjs/Observable';
import { Subject }            from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { TeamSearchService }  from './team-search.service';
import { Team }               from './team';

@Component({
  selector: 'team-search',
  templateUrl: './team-search.component.html',
  styleUrls: [ './team-search.component.css' ],
  providers: [ TeamSearchService ]
})

export class TeamSearchComponent implements OnInit {
  teams: Observable<Team[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private teamSearchService: TeamSearchService,
    private router: Router
  ) {}
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.teams = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
      ? this.teamSearchService.search(term)
      : Observable.of<Team[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Team[]>([]);
      });
  }
  gotoDetail(team: Team): void {
    let link = ['/detail', team.id];
    this.router.navigate(link);
  }
}
