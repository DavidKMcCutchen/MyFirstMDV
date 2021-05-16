import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade } from '@cidades/api-interfaces'

const BASE_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class CidadesService {
model = 'cidades'

  constructor(private httpClient: HttpClient) { }

 
getUrl(){
  return `${BASE_URL}${this.model}`
}

all(){
  return this.httpClient.get(this.getUrl())
}

getUrlById(id){
  return `${this.getUrl()}/${id}`
}

create(cidades:Cidade){
  return this.httpClient.post(this.getUrl(), cidades)
}

update(cidades: Cidade){
  return this.httpClient.patch(this.getUrlById(cidades.id), cidades)
}

delete(cidadeId){
  return this.httpClient.delete(this.getUrlById(cidadeId))

}}