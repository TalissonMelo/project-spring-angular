package com.talissonmelo.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.talissonmelo.model.Client;
import com.talissonmelo.model.dto.ClientLogonDTO;
import com.talissonmelo.service.ClientService;
import com.talissonmelo.service.exception.ErrorAuthenticateException;

@RestController
@RequestMapping(value = "/client")
public class ClientResource {

	@Autowired
	private ClientService service;

	@PostMapping
	public ResponseEntity<Client> insert(@Valid @RequestBody Client client) {
		client = service.insertClient(client);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(client.getId()).toUri();
		return ResponseEntity.created(uri).body(client);
	}

	@PostMapping("/logon")
	public ResponseEntity<?> authenticate(@RequestBody ClientLogonDTO objDTO) {
		try {
			Client client = service.authenticate(objDTO.getEmail(), objDTO.getPassword());
			return ResponseEntity.ok().body(client);
		} catch (ErrorAuthenticateException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}

	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id){
		Client client = service.findById(id);
		return ResponseEntity.ok().body(client);
	}
}
