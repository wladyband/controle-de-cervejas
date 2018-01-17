import { FormControl } from '@angular/forms';
import { Estilo } from './../../core/model';
import { ToastyService } from 'ng2-toasty';
import { ErroHandlerService } from './../../core/erro-handler.service';
import { EstiloService } from './../estilo.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estilo-cadastro',
  templateUrl: './estilo-cadastro.component.html',
  styleUrls: ['./estilo-cadastro.component.css']
})
export class EstiloCadastroComponent implements OnInit {

  private estilo = new Estilo();

  constructor(
    private estiloService: EstiloService,
    private erroHandler: ErroHandlerService,
    private toasty: ToastyService

   ) { }

  ngOnInit() {

   }



  salvar(form: FormControl) {
    this.estiloService.adicionar(this.estilo)
    .then(() => {
      this.toasty.success('Cerveja adicionado com sucesso!');
      form.reset();
      this.estilo = new Estilo();
    })
    .catch(erro => this.erroHandler.handle(erro));
   }


}
