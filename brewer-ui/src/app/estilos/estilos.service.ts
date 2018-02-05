import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';


@Injectable()
export class EstilosService {
  estilosUrl = 'http://localhost:8080/estilos';

  constructor(private http: Http) { }

  listarTodas(): Promise<any> {
    return this.http.get(this.estilosUrl)
      .toPromise()
      .then(response => {
        console.log(response.json().content);
      });
  }


}
