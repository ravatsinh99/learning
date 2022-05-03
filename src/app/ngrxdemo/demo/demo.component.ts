import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, Details } from '../demo.reducer';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  details: Observable<Details[]>;

  constructor(private store: Store<AppState>) {
    this.details = this.store.select(state => state.details);
  }

  ngOnInit() {
  }
  addDetails(name, city) {
    this.store.dispatch({
      type: 'Add_Details',
      payload: <Details>{
        name: name,
        city: city
      }
    });
  }

}
