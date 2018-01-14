import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CervejaService {

  categoriasUrl = 'http://localhost:8080/estilos';



  constructor(private http: Http) { }
  listarTodas(): Promise<any> {

    return this.http.get(this.categoriasUrl)
      .toPromise()
      .then(response => response.json());
  }

}
