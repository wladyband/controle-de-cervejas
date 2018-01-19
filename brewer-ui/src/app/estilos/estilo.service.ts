import { Estilo } from './../core/model';
import { Http, URLSearchParams, Headers } from '@angular/http';
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
  listarTodas(): Promise<any> {
    return this.http.get(this.estilosUrl)
      .toPromise()
      .then(response => response.json().content);
  }

  adicionar(estilo: Estilo): Promise<Estilo> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
        return this.http.post(this.estilosUrl,
        JSON.stringify(estilo),  { headers })
      .toPromise()
      .then(response =>  response.json())
      .catch( response => {
          if ( response.status === 400 ) {
              const responseJson = response.json();
              if ( responseJson[0].mensagemUsuario === 'Nome do estilo já cadastrado' ) {
                  return Promise.reject('Nome do estilo já cadastrado');
              }
          }
          return Promise.reject (response);
      });
   }


}
//.then(response => {
 // console.log(response.json());
 // });
//}


//.then(response => response.json().content);
