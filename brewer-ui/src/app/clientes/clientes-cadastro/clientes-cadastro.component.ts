import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { ClientesService } from './../clientes.service';
import { FormControl } from '@angular/forms';
import { CidadesService } from './../../cidades/cidades.service';
import { Estado, Cidade, Cliente } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.css']
})
export class ClientesCadastroComponent implements OnInit {

//variaveis globais para a lista de estados e cidades
uf: string;

cidades: Cidade[];
estados: Estado[];

//variaveis globais para o campo CPF e CNPJ
  tipo: string;
  fisica = false;
  juridica = false;
  statusCampo = true;
  cidade = new Cidade();

cliente = new Cliente();


  statusMask() {
    if (this.tipo === null) {
      this.statusCampo = true;
    } else  if (this.tipo === 'FISICA') {
      this.fisica = true;
      this.juridica = false;
      this.statusCampo = false;
  }
  if (this.tipo === 'JURIDICA') {
    this.juridica = true;
    this.fisica = false;
    this.statusCampo = false;
  }
}


  constructor(
    private cidadesService: CidadesService,
    private clientesService: ClientesService,
    private erroHandler: ErrorHandlerService,
    private toasty: ToastyService
  ) { }


  ngOnInit() {
    this.executarListar();

  }


executarListar() {
  this.cidadesService.listarTodosEstados().subscribe(estados => this.estados = estados);
}


  salvar(form: FormControl) {
    this.clientesService.adicionar(this.cliente)
      .then(() => {
        this.toasty.success('Cliente adicionado com sucesso!');

        form.reset();
        this.cliente = new Cliente();
      })
      .catch(erro => this.erroHandler.handle(erro));
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
              console.log('valores da cidade codigo estado é ' + cidade.codigoEstado);
              console.log(cidade);
              this.cidades.push(cidade);

          }
        }

      });

    }
  }




}
