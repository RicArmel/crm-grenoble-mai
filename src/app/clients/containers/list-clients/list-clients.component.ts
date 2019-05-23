import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from 'src/app/prestations/services/clients.service';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  collection: Client[];

  entetes: string[];

  constructor(public clientsService: ClientsService) { }

  ngOnInit() {
    this.collection = this.clientsService.collection;
    this.entetes = [
      'Name',
      'Email',
      'State',
      'Action'
    ];

  }

  change(param: {item: Client, state: StateClient}) {

    this.clientsService.update(param.item, param.state);

  }

}
