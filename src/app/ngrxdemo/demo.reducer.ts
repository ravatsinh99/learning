import { Action } from '@ngrx/store';

export const Add_Details = 'Add_Details';

export function demoReducer(state: Details[] = [], action) {
  switch (action.type) {
    case Add_Details:
      return [...state, action.payload];
    default:
      return state;
  }
}

export interface Details {
  name: string;
  city: string;
}

export interface AppState {
  readonly details: Details[];
}
