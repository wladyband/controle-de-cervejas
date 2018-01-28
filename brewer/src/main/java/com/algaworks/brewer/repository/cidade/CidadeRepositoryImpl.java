package com.algaworks.brewer.repository.cidade;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.util.StringUtils;

import com.algaworks.brewer.model.Cidade;
import com.algaworks.brewer.model.Cidade_;
import com.algaworks.brewer.repository.filter.CidadeFilter;

public class CidadeRepositoryImpl implements CidadeRepositoryQuery{

	@PersistenceContext
	private EntityManager manager;
	
	
	
	@Override
	public List<Cidade> filtrar(CidadeFilter cidadeFilter) {
		
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		
		CriteriaQuery<Cidade> criteria = builder.createQuery(Cidade.class);
		
		
		Root<Cidade> root = criteria.from(Cidade.class);
		
		Predicate[] predicates = criarRestricoes(cidadeFilter, builder, root);
		criteria.where(predicates);

		TypedQuery<Cidade> query = manager.createQuery(criteria);
		return query.getResultList();
	}
	
	
	private Predicate[] criarRestricoes(CidadeFilter cidadeFilter, CriteriaBuilder builder,
			Root<Cidade> root) {
		
		List<Predicate> predicates = new ArrayList<>();
		
		if (!StringUtils.isEmpty(cidadeFilter.getEstado())) {
				if (cidadeFilter.getEstado() != null) {
				predicates.add(	builder.like(builder.upper(root.get(Cidade_.estado)),
						"%" + cidadeFilter.getEstado().getNome().toUpperCase() + "%"));
			}
		}
		
		if (!StringUtils.isEmpty(cidadeFilter.getNome())) {
			predicates.add(builder.like(
					builder.lower(root.get(Cidade_.nome)),
					"%" + cidadeFilter.getNome().toLowerCase() + "%"
					));
					
		}
		
		return predicates.toArray(new Predicate[predicates.size()]);
	}
	
	
	
//	private void adicionarFiltro(CidadeFilter filtro, Criteria criteria) {
//		if (filtro != null) {
//			if (filtro.getEstado() != null) {
//				criteria.add(Restrictions.eq("estado", filtro.getEstado()));
//			}
//			
//			if (!StringUtils.isEmpty(filtro.getNome())) {
//				criteria.add(Restrictions.ilike("nome", filtro.getNome(), MatchMode.ANYWHERE));
//			}
//		}
//	}


}
