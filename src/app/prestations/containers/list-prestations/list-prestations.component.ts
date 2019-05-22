import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  collection: Prestation[];

  entetes: string[];

  constructor(public prestationsService: PrestationsService) {}

  ngOnInit() {
    this.collection = this.prestationsService.collection;
    this.entetes = [
      'Type',
      'Client',
      'Durée',
      'Total HT',
      'Total TTC',
      'State',
      'Action'
    ];
  }


  change(param: {item: Prestation, state: State}) {

    this.prestationsService.update(param.item, param.state);
  }
}
