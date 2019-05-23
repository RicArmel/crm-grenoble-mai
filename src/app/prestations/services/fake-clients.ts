import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

export const fakeClient: Client[] = [
  new Client({
    id: 'lkjsdf',
    name: 'Atos',
    email: 'mail@mail.com'
   
  }),
  new Client({
    id: 'lkjsdf',
    name: 'Patos',
    email: 'mail@mail.com'
    
  }),
  new Client({
    id: 'lkjsdf',
    name: 'Logos',
    email: 'mail@mail.com'
    
  }),
  new Client({
    id: 'lkjsdf',
    name: 'Etos',
    email: 'mail@mail.com'
    
  }),
];

