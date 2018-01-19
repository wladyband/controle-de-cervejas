	package com.algaworks.brewer.resource;

import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.algaworks.brewer.event.RecursoCriadoEvent;
import com.algaworks.brewer.exceptionhandler.BrewerExceptionHandler.Erro;
import com.algaworks.brewer.model.Estilo;
import com.algaworks.brewer.repository.EstiloRepository;
import com.algaworks.brewer.repository.filter.EstiloFilter;
import com.algaworks.brewer.service.EstiloService;
import com.algaworks.brewer.service.exception.NomeEstiloJaCadastradoException;

@RestController
@RequestMapping("/estilos")
public class EstiloResource {

	@Autowired
	private EstiloRepository estiloRepository;

	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@Autowired
	private EstiloService  estiloService;
	
	@Autowired
	private MessageSource messageSource;
	
	@GetMapping
	public Page<Estilo> pesquisar(EstiloFilter estiloFilter, Pageable pageable ) {
		return estiloRepository.filtrar(estiloFilter, pageable);
	}

	// código para salvar 201 create
	@PostMapping
	public ResponseEntity<Estilo> criar(@Valid @RequestBody Estilo estilo, HttpServletResponse response) {
		Estilo estiloSalvar = estiloService.salvar(estilo);

		// para disparar eventos
		publisher.publishEvent(new RecursoCriadoEvent(this, response, estiloSalvar.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(estiloSalvar);
		
	}
	
	@ExceptionHandler({ NomeEstiloJaCadastradoException.class })
	public ResponseEntity<Object> handleEstiloInexistenteException(NomeEstiloJaCadastradoException ex) {
		String mensagemUsuario = messageSource.getMessage("estilo.existente", null, LocaleContextHolder.getLocale());
		String mensagemDesenvolvedor = ex.toString();
		List<Erro> erros = Arrays.asList(new Erro(mensagemUsuario, mensagemDesenvolvedor));
		return ResponseEntity.badRequest().body(erros);
}

	// é quando for realizar uma busca por código, porém se o código não existir é pra dá erro 404
	@GetMapping("/{codigo}")
	public ResponseEntity<Estilo> buscarPeloCodigo(@PathVariable Long codigo) {
		Estilo estilo = estiloRepository.findOne(codigo);
		return estilo != null ? ResponseEntity.ok(estilo) : ResponseEntity.notFound().build();
	}
	
	
	
	
	@PutMapping("/{codigo}")
	public ResponseEntity<Estilo> atualizar(@PathVariable Long codigo, @Valid @RequestBody Estilo estilo) {
		Estilo estiloSalva = estiloService.atualizar(codigo, estilo);
		return ResponseEntity.ok(estiloSalva);
	}
}
