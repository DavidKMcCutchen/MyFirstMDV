import { Component, OnInit } from '@angular/core';
import { emptyCidade, Cidade } from '@cidades/api-interfaces';
import { CidadesService } from '@cidades/core-data';
import { Observable } from 'rxjs';


@Component({
  selector: 'cidades-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.scss']
})

export class CidadesComponent implements OnInit {
  cidades$: Observable<any>
  selectedCidade: Cidade;

  constructor(private cidadesService: CidadesService) { }

  ngOnInit() {
    this.getCidade()
    this.resetCidade()
  }

  getCidade() {
    this.cidades$ = this.cidadesService.all()
  }

  saveCidade(cidade) {
    if(! cidade.id) {
      this.createCidade(cidade);
    } else {
      this.updateCidade(cidade);
    }
  }

  selectCidade(cidade: Cidade) {
    this.selectedCidade = cidade;
  }

  createCidade(cidade: Cidade) {
    this.cidadesService.create(cidade).subscribe(() => {
      this.getCidade();
      this.resetCidade();
    });
  }

  updateCidade(cidade: Cidade) {
    this.cidadesService.update(cidade).subscribe(() => {
      this.getCidade();
      this.resetCidade();
    });
  }

  deleteCidade(cidade: Cidade){
    this.cidadesService.delete(cidade.id).subscribe(() => {
      this.getCidade();
      this.resetCidade();
    });
  }

  resetCidade() {
    this.selectCidade(emptyCidade);
  }

  cancel(){
    this.resetCidade();
  }



}
