export class Estilo {
  codigo: number;
}

export class Cerveja {
  codigo: number;
  sku: string;
  nome: string;
  descricao: string;
  valor: number;
  teorAlcoolico: number;
  comissao: number;
  quantidadeEstoque: number;
  origem = 'NACIONAL';
  sabor = 'ADOCICADA';
  estilo = new Estilo();
}
