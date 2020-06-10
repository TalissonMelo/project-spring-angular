package com.talissonmelo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.stereotype.Service;

import com.talissonmelo.model.Client;
import com.talissonmelo.model.Problem;
import com.talissonmelo.model.dto.ProblemNewDTO;
import com.talissonmelo.repositories.ProblemRepository;

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
		return repository.save(problem);
	}
	
	public List<Problem> findAll(Problem problemFilter) {
		Example<Problem> example = Example.of(problemFilter,
				ExampleMatcher.matching().withIgnoreCase().withStringMatcher(StringMatcher.CONTAINING));

		return repository.findAll(example);
	}
}
