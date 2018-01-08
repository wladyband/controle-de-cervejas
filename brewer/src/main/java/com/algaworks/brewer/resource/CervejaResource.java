package com.algaworks.brewer.resource;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.brewer.event.RecursoCriadoEvent;
import com.algaworks.brewer.model.Cerveja;
import com.algaworks.brewer.repository.CervejaRepository;
import com.algaworks.brewer.service.CervejaService;

@RestController
@RequestMapping("/cervejas")
public class CervejaResource {

	@Autowired
	private CervejaRepository cervejaRepository;

	@Autowired
	private ApplicationEventPublisher publisher;

	@Autowired
	private CervejaService cervejaService;

	@GetMapping
	public List<Cerveja> listar() {
		return cervejaRepository.findAll();
	}

	@GetMapping("/{codigo}")
	public ResponseEntity<Cerveja> buscarPeloCodigo(@PathVariable Long codigo) {
		Cerveja cerveja = cervejaRepository.findOne(codigo);
		return cerveja != null ? ResponseEntity.ok(cerveja) : ResponseEntity.notFound().build();
	}

	@PostMapping
	public ResponseEntity<Cerveja> criar(@Valid @RequestBody Cerveja cerveja, HttpServletResponse response) {
		Cerveja cervejaSalvo = cervejaRepository.save(cerveja);
		publisher.publishEvent(new RecursoCriadoEvent(this, response, cervejaSalvo.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(cervejaSalvo);
	}

	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		cervejaRepository.delete(codigo);
	}

	@PutMapping("/{codigo}")
	public ResponseEntity<Cerveja> atualizar(@PathVariable Long codigo, @Valid @RequestBody Cerveja cerveja) {
		Cerveja cervejaSalvo = cervejaService.atualizar(codigo, cerveja);
		return ResponseEntity.ok(cervejaSalvo);
	}

}
