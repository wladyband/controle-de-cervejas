package com.algaworks.brewer.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.algaworks.brewer.model.Cerveja;
import com.algaworks.brewer.repository.CervejaRepository;

@Service
public class CervejaService {

	@Autowired
	private CervejaRepository cervejaRepository;

	public Cerveja atualizar(Long codigo, Cerveja cerveja) {
		Cerveja cervejaSalva = cervejaRepository.findOne(codigo);
		if (cervejaSalva == null) {
			throw new EmptyResultDataAccessException(1);
		}

		BeanUtils.copyProperties(cerveja, cervejaSalva, "codigo");
		return cervejaRepository.save(cervejaSalva);
	}

}
