export class Estilo {
  codigo: number;
  nome: string;
}

export class Cerveja {
  codigo: number;
  sku: string;
  nome_cerveja: string;
  descricao: string;
  valor: number;
  teorAlcoolico: number;
  comissao: number;
  quantidadeEstoque: number;
  origem = 'NACIONAL';
  sabor = 'ADOCICADA';
  estilo = new Estilo();
}
