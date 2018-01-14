import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

export class EstiloFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class EstiloService {

  estilosUrl = 'http://localhost:8080/estilos';


  constructor(private http: Http) { }

  pesquisar(filtro: EstiloFiltro): Promise<any> {

    const params = new URLSearchParams();
    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());


    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.estilosUrl}`, { search: params })
    .toPromise()
    .then(response => {
      const responseJson = response.json();
      const estilos = responseJson.content;

      const resultado = {
        estilos,
        total: responseJson.totalElements
      };

      return resultado;
    });
  }



}
//.then(response => {
 // console.log(response.json());
 // });
//}


//.then(response => response.json().content);
