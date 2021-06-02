import {EventEmitter, Injectable, Output} from '@angular/core';

const state = {
  isLoading: false
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  @Output()
  snackbarEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }

  toggleLoading() {
    state.isLoading = !state.isLoading;
  }

  get isLoading() {
    return state.isLoading;
  }

  public emitSnackbarEvent( message: string, data: any = null) {
    this.snackbarEvent.emit({message, data});
  }
}
