import { CervejaService } from './../cerveja.service';
import { ToastyService } from 'ng2-toasty';
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
    private erroHandler: ErroHandlerService,
    private toasty: ToastyService,
    private cervejasService: CervejaService
   ) { }


  ngOnInit() {
   this.carregarEstilos();
  }

  salvar(form: FormControl) {
    this.cervejasService.adicionar(this.cerveja)
    .then(() => {
      this.toasty.success('Cerveja adicionado com sucesso!');
      form.reset();
      this.cerveja = new Cerveja();
    })
    .catch(erro => this.erroHandler.handle(erro));
   }

  carregarEstilos() {
    return this.estiloService.listarTodas()
      .then(estilos => {
        this.estilos = estilos.map(c => ({ label: c.nome, value: c.codigo }));

      })
      .catch(erro => this.erroHandler.handle(erro));
  }
}
