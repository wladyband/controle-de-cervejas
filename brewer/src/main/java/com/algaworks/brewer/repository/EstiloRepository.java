package com.algaworks.brewer.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.algaworks.brewer.model.Estilo;
import com.algaworks.brewer.repository.estilo.EstiloRepositoryQuery;

public interface EstiloRepository extends JpaRepository<Estilo, Long>, EstiloRepositoryQuery {

	public Optional<Estilo> findByNomeIgnoreCase(String nome);
	
}
