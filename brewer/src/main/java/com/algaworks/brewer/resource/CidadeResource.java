package com.algaworks.brewer.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.brewer.model.Cidade;
import com.algaworks.brewer.repository.CidadeRepository;
import com.algaworks.brewer.repository.filter.CidadeFilter;

@RestController
@RequestMapping("/cidades")
public class CidadeResource {
	
	@Autowired
	private CidadeRepository cidadeRepository;
	
	
	@RequestMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	private List<Cidade> pesquisarPorCodigoEstado (@RequestParam(name = "estado", defaultValue = "-1") Long codigoEstado){
		return cidadeRepository.findByEstadoCodigo(codigoEstado);
	}
	
	
	@GetMapping
	private List<Cidade> pesquisar(CidadeFilter cidadeFilter){
		return cidadeRepository.filtrar(cidadeFilter);
	}
	

}
