import { FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Cerveja, Estilo } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { EstilosService } from '../../estilos/estilos.service';
import { CervejasService } from '../cervejas.service';

@Component({
  selector: 'app-cervejas-cadastro',
  templateUrl: './cervejas-cadastro.component.html',
  styleUrls: ['./cervejas-cadastro.component.css']
})
export class CervejasCadastroComponent implements OnInit {

  estilos = [];
  cerveja = new Cerveja();
  estilo = new Estilo();

  origem: String = 'Nacional';

  sabor = [
    { label: 'Adocicada', value: 'ADOCICADA' },
    { label: 'Amarga', value: 'AMARGA' },
  ];

  display: Boolean = false;

  showDialog() {
      this.display = true;
  }

  hideDialog() {
      this.display = false;
  }

  constructor(
    private estiloService: EstilosService,
    private erroHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private cervejasService: CervejasService
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

   salvarEstilos(form: FormControl) {
    this.estiloService.adicionar(this.estilo)
    .then(() => {
      this.toasty.success('Estilo adicionado com sucesso!');
      form.reset();
      this.estilo = new Estilo();
      this.carregarEstilos();
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
