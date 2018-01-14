package com.algaworks.brewer.repository.estilo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.StringUtils;

import com.algaworks.brewer.model.Estilo;
import com.algaworks.brewer.model.Estilo_;
import com.algaworks.brewer.repository.filter.EstiloFilter;

public class EstiloRepositoryImpl implements EstiloRepositoryQuery {

	@PersistenceContext
	private EntityManager manager;

	@Override
	public Page<Estilo> filtrar(EstiloFilter estiloFilter, Pageable pageable) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Estilo> criteria = builder.createQuery(Estilo.class);
		Root<Estilo> root = criteria.from(Estilo.class);

		Predicate[] predicates = criarRestricoes(estiloFilter, builder, root);
		criteria.where(predicates);

		TypedQuery<Estilo> query = manager.createQuery(criteria);
		adicionarRestricoesDePaginacao(query, pageable);
		
		return new PageImpl<>(query.getResultList(), pageable, total(estiloFilter));
	}

	

	private Predicate[] criarRestricoes(EstiloFilter estiloFilter, CriteriaBuilder builder,
			Root<Estilo> root) {
		List<Predicate> predicates = new ArrayList<>();
		
		
		if (!StringUtils.isEmpty(estiloFilter.getNome())) {
			predicates.add(builder.like(
					builder.lower(root.get(Estilo_.nome)), "%" + estiloFilter.getNome().toLowerCase() + "%"));
		}
		
		
		
		return predicates.toArray(new Predicate[predicates.size()]);
	}

	
	private void adicionarRestricoesDePaginacao(TypedQuery<Estilo> query, Pageable pageable) {
		int paginaAtual = pageable.getPageNumber();
		int totalRegistrosPorPagina = pageable.getPageSize();
		int primeiroRegistroDaPagina = paginaAtual * totalRegistrosPorPagina;
		
		query.setFirstResult(primeiroRegistroDaPagina);
		query.setMaxResults(totalRegistrosPorPagina);
		
	}
	
	private Long total(EstiloFilter estiloFilter) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
		Root<Estilo> root = criteria.from(Estilo.class);
		
		Predicate[] predicates = criarRestricoes(estiloFilter, builder, root);
		criteria.where(predicates);
		
		criteria.select(builder.count(root));
		return manager.createQuery(criteria).getSingleResult();
	}
	
	
}
