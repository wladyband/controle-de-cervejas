package com.algaworks.brewer.repository.cidade;

import java.util.List;

import com.algaworks.brewer.model.Cidade;
import com.algaworks.brewer.repository.filter.CidadeFilter;

public interface CidadeRepositoryQuery {
	
		public List<Cidade> filtrar(CidadeFilter cidadeFilter);
}
