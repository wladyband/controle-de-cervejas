import { FormControl } from '@angular/forms';
import { Cerveja } from './../../core/model';
import { ErroHandlerService } from './../../core/erro-handler.service';
import { EstiloService } from './../../estilos/estilo.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cevejas-cadastro',
  templateUrl: './cevejas-cadastro.component.html',
  styleUrls: ['./cevejas-cadastro.component.css']
})
export class CevejasCadastroComponent implements OnInit {

  origem: String = 'Nacional';

  sabor = [
    { label: 'Adocicada', value: 'ADOCICADA' },
    { label: 'Amarga', value: 'AMARGA' },
  ];

  estilos = [];
  cerveja = new Cerveja();

  display: Boolean = false;

  showDialog() {
      this.display = true;
  }

  hideDialog() {
      this.display = false;
  }

  constructor(
    private estiloService: EstiloService,
    private erroHandler: ErroHandlerService
   ) { }


  ngOnInit() {
   this.carregarEstilos();
  }

 salvar(form: FormControl) {
  console.log(this.cerveja);
 }

  carregarEstilos() {
    return this.estiloService.listarTodas()
      .then(estilos => {
        this.estilos = estilos.map(c => ({ label: c.nome, value: c.codigo }));

      })
      .catch(erro => this.erroHandler.handle(erro));
  }
}
