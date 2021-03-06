import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestation } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  pCollection: Prestation[];

  constructor() {
    this.collection = fakePrestation;
  }

// get collection
  get collection(): Prestation[] {
    return this.pCollection;
  }

//set collection
  set collection(col: Prestation[]) {
   this.pCollection = col;
  }


  update(item: Prestation, state?: State) {
    const data = {...item};
    data.state = state;
    item.state = state;
  }
}
