import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cevejas-cadastro',
  templateUrl: './cevejas-cadastro.component.html',
  styleUrls: ['./cevejas-cadastro.component.css']
})
export class CevejasCadastroComponent implements OnInit {
    // origemDoVinho: string = 'nacional' ;
    origem: string = 'Nacional';

  sabor = [
    { label: 'Adocicada', value: 'ADOCICADA' },
    { label: 'Amarga', value: 'AMARGA' },
  ];

  estilos = [
    { label: 'Vinho Torcell', value: 1 },
    { label: 'AlphaVino', value: 2 },
  ];

  constructor() { }

  ngOnInit() {
  }
}
