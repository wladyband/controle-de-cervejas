package com.algaworks.brewer.service;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.algaworks.brewer.model.Estilo;
import com.algaworks.brewer.repository.EstiloRepository;
import com.algaworks.brewer.service.exception.NomeEstiloJaCadastradoException;

@Service
public class EstiloService {

	@Autowired
	private EstiloRepository estiloRepository;
	
	public Estilo salvar(Estilo estilo) {
		Optional<Estilo> estiloOptional = estiloRepository.findByNomeIgnoreCase(estilo.getNome());
		if(estiloOptional.isPresent()) {
			throw new NomeEstiloJaCadastradoException();
		}
		return estiloRepository.save(estilo);
	}
	
	public Estilo atualizar(Long codigo, Estilo estilo) {
		Estilo estiloSalva = estiloRepository.findOne(codigo);
		Optional<Estilo> estiloOptional = estiloRepository.findByNomeIgnoreCase(estilo.getNome());
		if (estiloSalva == null) {
			throw new EmptyResultDataAccessException(1);
		}
		if(estiloOptional.isPresent()) {
			throw new NomeEstiloJaCadastradoException();
		}
		
		BeanUtils.copyProperties(estilo, estiloSalva, "codigo");
		return estiloRepository.save(estiloSalva);
	}

}
