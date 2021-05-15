import { Injectable } from '@angular/core';

const state = {
  isLoading: false
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() {

  }

  toggleLoading() {
    state.isLoading = !state.isLoading;
  }

  get isLoading() {
    return state.isLoading;
  }
}
