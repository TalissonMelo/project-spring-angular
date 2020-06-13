package com.talissonmelo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.stereotype.Service;

import com.talissonmelo.model.Client;
import com.talissonmelo.model.Problem;
import com.talissonmelo.model.dto.ProblemNewDTO;
import com.talissonmelo.model.dto.ProblemViewDTO;
import com.talissonmelo.model.dto.UpdateStatusDTO;
import com.talissonmelo.model.enums.ProblemStatus;
import com.talissonmelo.repositories.ProblemRepository;
import com.talissonmelo.service.exception.DataViolation;
import com.talissonmelo.service.exception.EntityNotFound;
import com.talissonmelo.service.exception.RuleException;

@Service
public class ProblemService {

	@Autowired
	private ProblemRepository repository;
	
	@Autowired 
	private ClientService service;
	
	private Problem fromDTO(ProblemNewDTO dto) {
		Client client = service.findById(dto.getClient());
		
		Problem problem = Problem.builder()
				.title(dto.getTitle()).
				description(dto.getDescription()).
				client(client).build();
		return problem;
	}
	
	public Problem insert(ProblemNewDTO problemDTO) {
		Problem problem = fromDTO(problemDTO);
		problem.setStatus(ProblemStatus.ABERTO);
		return repository.save(problem);
	}
	
	public List<Problem> findAll(Problem problemFilter) {
		Example<Problem> example = Example.of(problemFilter,
				ExampleMatcher.matching().withIgnoreCase().withStringMatcher(StringMatcher.CONTAINING));

		return repository.findAll(example);
	}
	
	public void delete(Long id) {
		try {
			
			Problem problem = findById(id);
			
			if(problem.getStatus() == ProblemStatus.ABERTO) {
				repository.deleteById(id);
			}else {
				throw new RuleException("Não pode ser Deletado pois estamos solucionando.");
			}
			
			
		}catch (EmptyResultDataAccessException e) {
			throw new EntityNotFound("ID : " + id + ", não encontrado.");
		}catch (DataIntegrityViolationException e) {
			throw new DataViolation("Objeto persistido em outra tabela. Deleção Negada.");
		}
	}
	
	public List<Problem> findAllProblem(){
		return repository.findAll();
	}
	
	public List<ProblemViewDTO> FindAllProblemView(List<Problem> list){
		List<ProblemViewDTO> view = toViewDTO(list);
		return view;
	}
	
	public List<ProblemViewDTO> toViewDTO(List<Problem> list) {
		List<ProblemViewDTO> listView = new ArrayList<>();
		
		for(Problem problem: list) {
			ProblemViewDTO view = new ProblemViewDTO();
			view.setId(problem.getId());
			view.setTitle(problem.getTitle());
			view.setDescription(problem.getDescription());
			view.setInsertProblem(problem.getInsertProblem());
			view.setName(problem.getClient().getName());
			view.setEmail(problem.getClient().getEmail());
			view.setPhone(problem.getClient().getPhone());
			view.setStatus(problem.getStatus());
			
			listView.add(view);
		}
		
		return listView;
	}
	
	public Problem update(Long id ,UpdateStatusDTO dto) {
		Problem entity = repository.getOne(id);
		entity.setStatus(dto.getStatus());
		return repository.save(entity);
	}
	
	public Problem findById(Long id) {
		return repository.findById(id)
				.orElseThrow(() -> new EntityNotFound("Cadastro não encontrado"));
	}

	public ProblemViewDTO fromViewDTO(Problem problem) {
		ProblemViewDTO problemViewDTO = new ProblemViewDTO();
		problemViewDTO.setId(problem.getId());
		problemViewDTO.setTitle(problem.getTitle());
		problemViewDTO.setDescription(problem.getDescription());
		problemViewDTO.setInsertProblem(problem.getInsertProblem());
		problemViewDTO.setName(problem.getClient().getName());
		problemViewDTO.setEmail(problem.getClient().getEmail());
		problemViewDTO.setPhone(problem.getClient().getPhone());
		problemViewDTO.setStatus(problem.getStatus());
		return problemViewDTO;
	}
}
