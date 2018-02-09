
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


export class Estado {
  codigo: number;
  nome: string;
  sigla: string;

}


export class Cidade {
    codigo: number;
    nome: string;
    codigoEstado: string;
    estado = new Estado();
}





export class Cliente {
  codigo: number;
  nome: string;
  tipoPessoa: 'Física';
  cpfOuCnpj: string;
  telefone: string;
  email: string;
  endereco = new Endereco();

}

export class Endereco {
  logradouro: string;
  numero: number;
  complemento: string;
  cep: string;
  cidade = new Cidade();

}
