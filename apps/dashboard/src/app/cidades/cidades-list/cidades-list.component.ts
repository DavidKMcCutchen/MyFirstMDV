import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cidade } from '@cidades/api-interfaces';

@Component({
  selector: 'cidades-cidades-list',
  templateUrl: './cidades-list.component.html',
  styleUrls: ['./cidades-list.component.scss']
})
export class CidadesListComponent {
  @Input() cidades: Cidade[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
