import { Http, Headers } from '@angular/http';
import { Cerveja } from './../core/model';
import { Injectable } from '@angular/core';


@Injectable()
export class CervejaService {

  cervejasUrl = 'http://localhost:8080/cervejas';

  constructor(private http: Http) { }
    adicionar(cerveja: Cerveja): Promise<Cerveja> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
        return this.http.post(this.cervejasUrl,
        JSON.stringify(cerveja),  { headers })
      .toPromise()
      .then(response =>  response.json());
  }
}
