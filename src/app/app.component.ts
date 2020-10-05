import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  activeMap = [];

  wheelMap(id) {
    this.activeMap = [];
    this.activeMap[id] = true;
  }
}
