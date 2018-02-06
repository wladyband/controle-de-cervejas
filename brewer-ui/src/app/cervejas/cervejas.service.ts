import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Cerveja } from './../core/model';
import { Injectable } from '@angular/core';

@Injectable()
export class CervejasService {

  cervejasUrl = 'http://localhost:8080/cervejas';

  constructor(private http: Http) { }
    adicionar(cerveja: Cerveja): Promise<Cerveja> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
        return this.http.post(this.cervejasUrl,
        JSON.stringify(cerveja),  { HttpHeaders })
      .toPromise()
      .then(response =>  response.json())
      .catch( response => {
        if ( response.status === 400 ) {
            const responseJson = response.json();
            if (responseJson[0].mensagemUsuario === 'O sabor é obrigatório' ) {
              return Promise.reject('O sabor é obrigatório');
            }
            if (responseJson[0].mensagemUsuario === 'O estilo é obrigatório' ) {
              return Promise.reject('O estilo é obrigatório');
            }
            if (responseJson[0].mensagemUsuario === 'A origem é obrigatória' ) {
              return Promise.reject('A origem é obrigatória');
            }
            if ( responseJson[0].mensagemUsuario === 'A comissão é obrigatória' ) {
              return Promise.reject('A comissão é obrigatória');
            }
            if ( responseJson[0].mensagemUsuario === 'A comissão deve ser igual ou menor que 100' ) {
              return Promise.reject('A comissão deve ser igual ou menor que 100');
            }
            if (responseJson[0].mensagemUsuario === 'O teor alcóolico é obrigatório' ) {
              return Promise.reject('O teor alcóolico é obrigatório');
            }
            if (responseJson[0].mensagemUsuario === 'O valor do teor alcóolico deve ser menor que 100' ) {
              return Promise.reject('O valor do teor alcóolico deve ser menor que 100');
            }
            if (responseJson[0].mensagemUsuario === 'Valor é obrigatório' ) {
              return Promise.reject('Valor é obrigatório');
            }
            if (responseJson[0].mensagemUsuario === 'O valor da cerveja deve ser maior que R$0,50' ) {
              return Promise.reject('O valor da cerveja deve ser maior que R$0,50');
            }
            if (responseJson[0].mensagemUsuario === 'O valor da cerveja deve ser menor que R$9.999.999,99' ) {
              return Promise.reject('O valor da cerveja deve ser menor que R$9.999.999,99');
            }
            if (responseJson[0].mensagemUsuario === 'A quantidade em estoque é obrigatória' ) {
              return Promise.reject('A quantidade em estoque é obrigatória');
            }
            if (responseJson[0].mensagemUsuario === 'A quantidade em estoque deve ser menor que 9.999' ) {
              return Promise.reject('A quantidade em estoque deve ser menor que 9.999');
            }
            if (responseJson[0].mensagemUsuario === 'SKU deve seguir o padrão XX9999' ) {
              return Promise.reject('SKU deve seguir o padrão XX9999');
            }
        }
        return Promise.reject (response);
    });
  }

}
