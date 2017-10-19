import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <my-teams></my-teams>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'NBA League Overview';
}
