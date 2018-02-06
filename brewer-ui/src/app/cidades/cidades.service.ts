import { Cidade, Estado} from './../core/model';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class CidadesService {

 cidadesUrl = 'http://localhost:8080/cidades';
 estadosUrl = 'http://localhost:8080/cidades/estados';



  constructor(private http: Http) { }

  listarTodasCidades(): Observable<Cidade[]> {
    return this.http.get(`${this.cidadesUrl}`)
    .map(response => response.json());
    }

    listarTodosEstados(): Observable<Estado[]> {
    return this.http.get(`${this.estadosUrl}`)
    .map(response => response.json());
    }


}




 /* listarTodas(): Promise<any> {
    return this.http.get(this.cidadesUrl)
      .toPromise()
      .then(response => console.log(response.json()));
  }



   listarTodasCidades() {
    return this.http.get<any[]>(`${this.cidadesUrl}`);
  }

  listarTodosEstados() {
    return this.http.get<any[]>(`${this.estadosUrl}`);
  }




getCountries(): Observable<any> {
    return Observable.of([
     this.getTodosEstados()
    ]);
  }

  getTodosEstados() {
    return this.http.get<any[]>(`${this.estadosUrl}`);
  }




  */

