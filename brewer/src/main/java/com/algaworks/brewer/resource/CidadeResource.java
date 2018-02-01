package com.algaworks.brewer.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.brewer.model.Cidade;
import com.algaworks.brewer.model.Estado;
import com.algaworks.brewer.repository.CidadeRepository;
import com.algaworks.brewer.repository.EstadoRepository;
import com.algaworks.brewer.repository.filter.CidadeFilter;

@RestController
@RequestMapping("/cidades")
public class CidadeResource {
	
	
	@Autowired
	private  CidadeRepository cidadeRepository;
	
	@Autowired
	private  EstadoRepository estadoRepository;
	
	
	@GetMapping
	public List<Cidade> pesquisarPorCidade(CidadeFilter cidadeFilter){
		return cidadeRepository.filtrar(cidadeFilter);
	}
	
	@GetMapping("/estados")
	public List<Estado> pesquisarPorEstado(){
		return estadoRepository.findAll();
	}
	

}
