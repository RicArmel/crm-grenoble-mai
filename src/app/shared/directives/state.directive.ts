import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
 selector: '[appState]'
})
export class StateDirective implements OnChanges {
 @Input() appState: any;
 @HostBinding('class') nomClass: string;
 constructor() {
 }

 ngOnChanges() {
   console.log(this.appState);
   this.nomClass = this.formatClass(this.appState);
   console.log(this.nomClass);
 }

 private formatClass(state: any): string {

   return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
 }

}
// appState vaut Annulé => state-annule
// appState vaut Option => state-option
// appState vaut Confirmé => state-confirme
// res fn donner cette value à l'attribut class de mon host element