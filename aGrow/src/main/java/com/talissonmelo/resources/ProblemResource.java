package com.talissonmelo.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.talissonmelo.model.Client;
import com.talissonmelo.model.Problem;
import com.talissonmelo.model.dto.ProblemNewDTO;
import com.talissonmelo.model.dto.ProblemViewDTO;
import com.talissonmelo.service.ClientService;
import com.talissonmelo.service.ProblemService;

@RestController
@RequestMapping(value = "/problem")
public class ProblemResource {

	@Autowired
	private ProblemService service;

	@Autowired
	private ClientService clientService;

	@PostMapping
	public ResponseEntity<Problem> insert(@RequestBody ProblemNewDTO problemNewDTO) {
		Problem problem = service.insert(problemNewDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(problem.getId())
				.toUri();
		return ResponseEntity.created(uri).body(problem);

	}

	@GetMapping
	public ResponseEntity<?> findAll(@RequestParam("client") Long client) {

		Problem problemFilter = new Problem();

		Client clientNew = clientService.findById(client);
		if (clientNew == null) {
			return ResponseEntity.badRequest().body("Usuário não encontrado com Id " + client);
		} else {
			problemFilter.setClient(clientNew);
		}

		List<Problem> list = service.findAll(problemFilter);
		return ResponseEntity.ok().body(list);

	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

	@GetMapping(value = "/admin")
	public ResponseEntity<List<ProblemViewDTO>> findAllProblem(){
		List<Problem> list = service.findAllProblem();
		List<ProblemViewDTO> listView = service.FindAllProblemView(list);
		return ResponseEntity.ok().body(listView);
	}
}
