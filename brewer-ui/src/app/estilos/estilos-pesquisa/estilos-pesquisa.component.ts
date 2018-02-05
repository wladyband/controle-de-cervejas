import { EstilosService } from './../estilos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilos-pesquisa',
  templateUrl: './estilos-pesquisa.component.html',
  styleUrls: ['./estilos-pesquisa.component.css']
})
export class EstilosPesquisaComponent implements OnInit {

  constructor(
    private estilosService:   EstilosService
  ) { }

  ngOnInit() {
    this.pesquisarEstilos();
  }

  pesquisarEstilos() {
    this.estilosService.listarTodas()
    .then(() => null);
  }


}
