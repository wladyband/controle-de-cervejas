import { EstiloService, EstiloFiltro } from './../estilo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/api';



@Component({
  selector: 'app-estilo-pesquisa',
  templateUrl: './estilo-pesquisa.component.html',
  styleUrls: ['./estilo-pesquisa.component.css']
})

export class EstiloPesquisaComponent implements OnInit {

totalRegistros = 0;
filtro = new EstiloFiltro();
estilos = [];
@ViewChild('tabela') grid;

constructor(
  private estiloService: EstiloService
) { }

ngOnInit() {
     }
  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

     this.estiloService.pesquisar(this.filtro)
       .then(resultado => {
         this.totalRegistros = resultado.total;
        this.estilos = resultado.estilos;
      });
   }

   aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }



}

 //.then(estilos => this.estilos = estilos);
