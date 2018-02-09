import { Cidade, Estado, Cliente } from './../core/model';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientesService {


  cidadesUrl = 'http://localhost:8080/cidades';
  estadosUrl = 'http://localhost:8080/cidades/estados';
  clienteUrl = 'http://localhost:8080/clientes';

  constructor(private http: Http) { }

  listarTodasCidades(): Observable<Cidade[]> {
    return this.http.get(`${this.cidadesUrl}`)
    .map(response => response.json());
    }

    listarTodosEstados(): Observable<Estado[]> {
    return this.http.get(`${this.estadosUrl}`)
    .map(response => response.json());
    }


    adicionar(cliente: Cliente): Promise<Cliente> {
      const headers = new Headers();

      headers.append('Content-Type', 'application/json');

      return this.http.post(this.clienteUrl,
          JSON.stringify(cliente), { headers })
        .toPromise()
        .then(response => response.json());

    }


}
