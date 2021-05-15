import {Component, OnInit} from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'store';

  get isLoading() {
    return this.stateSrv.isLoading;
  }

  constructor(private stateSrv: AppStateService, private router: Router) {

  }

  ngOnInit() {
    debugger;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.stateSrv.toggleLoading();
      }
      if (event instanceof  NavigationEnd) {
        this.stateSrv.toggleLoading();
      }
    })
  }
}
