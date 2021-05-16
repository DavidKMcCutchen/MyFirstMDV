import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cidade } from '@cidades/api-interfaces';

@Component({
  selector: 'cidades-cidades-details',
  templateUrl: './cidades-details.component.html',
  styleUrls: ['./cidades-details.component.scss']
})
export class CidadesDetailsComponent {
  currentCidade: Cidade;
  originalTitle: string;


@Output() saved = new EventEmitter()
@Output() cancelled = new EventEmitter()
@Input() set cidade(value) {
  if(value) this.originalTitle = value.title;
  this.currentCidade = Object.assign({}, value)

}

save(cidade){
  this.saved.emit(cidade);
}

cancel(){
  this.cancelled.emit();
}
}