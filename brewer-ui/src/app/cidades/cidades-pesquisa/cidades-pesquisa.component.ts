import { Estado, Cidade } from './../../core/model';
import { CidadesService } from './../cidades.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-cidades-pesquisa',
  templateUrl: './cidades-pesquisa.component.html',
  styleUrls: ['./cidades-pesquisa.component.css']

})
export class CidadesPesquisaComponent implements OnInit {

  cidades: Cidade[];
  estados: Estado[] = [];


  constructor(private cidadesService: CidadesService) {
    this.cidades = this.cidadesService.listarTodasCidades;
   }

  ngOnInit() {
        this.carregarCidades();
        this.carregarEstados();
  }



  carregarCidades() {
    this.cidadesService.listarTodasCidades()
      .subscribe(dados => {
       this.cidades = dados;
      });
  }


  carregarEstados() {
    this.cidadesService.listarTodosEstados()
    .subscribe(dados => {
      this.estados = dados;
     });
  }

  onSelect(countryid) {
    this.estados = this.cidadesService.listarTodasCidades.filter((item)=> item.countryid == countryid);
  }

  onSelect(countryid) {
    this.states = this._dataService.getStates().filter((item)=> item.countryid == countryid);
  }


}




  /*carregarCidades() {
    return this.cidadesService.listarTodas()
      .then(() => null);

  }



  console.log(this.cidades.map((e) => <any>e.codigoEstado));


  */
