import { ClientI } from '../interfaces/client-i';
import { StateClient } from '../enums/state-client.enum';

export class Client implements ClientI {
  id: string;
  name: string;
  email: string;
  state = StateClient.ACTIF;



  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  // totalHt(): number {
  //   return this.tjmHt * this.nbJours;
  // }
  // totalTtc(tva?: number): number {
  //   if (tva) {
  //     if (tva <= 0) {
  //       return this.totalHt();
  //     }
  //     return this.totalHt() * (1 + tva / 100);
  //   }
  //   return this.totalHt() * (1 + this.tauxTva / 100);
  // }
}
