import { State } from '../enums/state.enum';

export interface PrestationI {
  id: string;
  client: string;
  typePresta: string;
  nbJours: number;
  tjmHt: number;
  tauxTva: number;
  state: State;
  comment: string;
  totalHt(): number;
  totalTtc(): number;

}
