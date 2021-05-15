import { Component } from '@angular/core';
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';

  get isLoading() {
    return this.stateSrv.isLoading;
  }

  constructor(private stateSrv: AppStateService) {

  }
}
