import { Estado, Cidade} from './../../core/model';
import { CidadesService } from './../cidades.service';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';



@Component({
  selector: 'app-cidades-pesquisa',
  templateUrl: './cidades-pesquisa.component.html',
  styleUrls: ['./cidades-pesquisa.component.css']

})
export class CidadesPesquisaComponent implements OnInit {

  uf: string;

  cidades: Cidade[];
  estados: Estado[];

  constructor(private cidadesService: CidadesService) { }

  ngOnInit() {
    this.cidadesService.listarTodosEstados()
    .subscribe(estados => this.estados = estados);
  }

  buscarCidades() {
    console.log("Estado: " + this.uf);
      this.cidades = [];

     if(this.uf) {
        this.cidadesService.listarTodasCidades()
        .subscribe(cidades => {
          if (cidades.length > 0) {
            console.log("Qtd total de cidades: " + cidades.length);
          }
          for (let cidade of cidades) {
            if ( parseInt( cidade.codigoEstado) == parseInt(this.uf)) {
              console.log(cidade);
              this.cidades.push(cidade);
          }
        }
      });
    }
  }

}




  /*carregarCidades() {
    return this.cidadesService.listarTodas()
      .then(() => null);

  }

carregarCidades() {
    this.cidadesService.listarTodasCidades()
      .subscribe(dados => {
       console.log(this.cidades = dados);
      });
  }


  carregarEstados() {
    this.cidadesService.listarTodosEstados()
    .subscribe(dados => {
      this.estados = dados;
     });
  }


  console.log(this.cidades.map((e) => <any>e.codigoEstado));


  */
