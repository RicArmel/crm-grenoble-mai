import { Injectable } from '@angular/core';
import { fakeClient } from './fake-clients';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  pCollection: Client[];

  constructor() {
    this.collection = fakeClient;
  }

// get collection
  get collection(): Client[] {
    return this.pCollection;
  }

//set collection
  set collection(col: Client[]) {
   this.pCollection = col;
  }


  update(item: Client, state?: StateClient) {
    const data = {...item};
    data.state = state;
    item.state = state;
  }
}
