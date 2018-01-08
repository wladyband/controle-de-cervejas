CREATE TABLE estilo(
    codigo SERIAL,
    nome VARCHAR(50) NOT NULL,
	PRIMARY KEY(codigo)
); 

INSERT INTO estilo (nome) VALUES ('Amber Lager');
INSERT INTO estilo (nome) VALUES ('Dark Lager');
INSERT INTO estilo (nome) VALUES ('Pale Lager');
INSERT INTO estilo (nome) VALUES ('Pilsner');



CREATE TABLE cerveja(
    codigo serial,
    sku VARCHAR(50) NOT NULL,
    nome VARCHAR(80) NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    teor_alcoolico DECIMAL(10, 2) NOT NULL,
    comissao DECIMAL(10, 2) NOT NULL,
	quantidade_estoque DECIMAL(10, 2) NOT NULL,
    sabor VARCHAR(50) NOT NULL,
    origem VARCHAR(50) NOT NULL,
    codigo_estilo int NOT NULL,
	foto VARCHAR(100),
	content_type VARCHAR(100),
    FOREIGN KEY (codigo_estilo) REFERENCES estilo(codigo),
	primary key (codigo)
);


INSERT INTO cerveja( sku, nome, descricao, valor, teor_alcoolico, comissao, quantidade_estoque, sabor, origem, codigo_estilo, foto, content_type) values ( 'XX1234', 'wladimir', 'veio de Recife', 35.00, 0.5, 15.0, 10.0, 'ADOCICADA', 'NACIONAL', 1, null, null);
INSERT INTO cerveja( sku, nome, descricao, valor, teor_alcoolico, comissao, quantidade_estoque, sabor, origem, codigo_estilo, foto, content_type) values ( 'JJ7895', 'Marcelo', 'veio de Minas', 35.00, 0.5, 15.0, 10.0, 'ADOCICADA', 'NACIONAL', 2, null, null);
INSERT INTO cerveja( sku, nome, descricao, valor, teor_alcoolico, comissao, quantidade_estoque, sabor, origem, codigo_estilo, foto, content_type) values ( 'JY1265', 'Douglas', 'veio de Rio Grande do Norte', 20.00, 0.5, 10.0, 15.0, 'ADOCICADA', 'NACIONAL', 3, null, null);
INSERT INTO cerveja( sku, nome, descricao, valor, teor_alcoolico, comissao, quantidade_estoque, sabor, origem, codigo_estilo, foto, content_type) values ( 'VG9887', 'John', 'Direto do EUA', 35.00, 0.5, 15.0, 10.0, 'ADOCICADA', 'NACIONAL', 4, null, null);