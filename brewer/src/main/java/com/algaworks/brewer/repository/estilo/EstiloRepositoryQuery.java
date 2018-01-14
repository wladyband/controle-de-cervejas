package com.algaworks.brewer.repository.estilo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.algaworks.brewer.model.Estilo;
import com.algaworks.brewer.repository.filter.EstiloFilter;

public interface EstiloRepositoryQuery {
	
	public Page<Estilo> filtrar(EstiloFilter estiloFilter, Pageable pageable);

}
