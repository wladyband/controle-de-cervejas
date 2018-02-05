import { Cidade, Estado } from './../core/model';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CidadesService {

  cidadesUrl = 'http://localhost:8080/cidades';
  estadosUrl = 'http://localhost:8080/cidades/estados';

  constructor(private http: HttpClient) { }


  listarTodasCidades() {
    return this.http.get<any[]>(`${this.cidadesUrl}`);
  }

  listarTodosEstados() {
    return this.http.get<any[]>(`${this.estadosUrl}`);
  }

}




 /* listarTodas(): Promise<any> {
    return this.http.get(this.cidadesUrl)
      .toPromise()
      .then(response => console.log(response.json()));
  }*/

