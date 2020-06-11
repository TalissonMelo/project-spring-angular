package com.talissonmelo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.talissonmelo.model.Client;
import com.talissonmelo.model.dto.ClientDTO;
import com.talissonmelo.repositories.ClientRepository;
import com.talissonmelo.service.exception.EntityNotFound;
import com.talissonmelo.service.exception.ErrorAuthenticateException;
import com.talissonmelo.service.exception.RuleException;

@Service
public class ClientService {

	@Autowired
	private ClientRepository repository;

	public Client insertClient(Client client) {
		return repository.save(client);
	}

	public Client authenticate(String email, String password) {
		Optional<Client> client = repository.findByEmail(email);

		if (!client.isPresent()) {
			throw new ErrorAuthenticateException("Usuário não encontrado!.");
		}

		if (!client.get().getPassword().equals(password)) {
			throw new ErrorAuthenticateException("Senha inválida!.");
		}
		return client.get();
	}

	public Client findById(Long id) {
		return repository.findById(id)
				.orElseThrow(() -> new EntityNotFound("Cliente não encontrado"));
	}

	public void existEmail(String email) {
		Boolean exist = repository.existsByEmail(email);
		if (exist) {
			throw new RuleException("Email já cadastrado.");
		}
		
	}

	public ClientDTO toClientDTO(Client client) {
		ClientDTO clientDTO = new ClientDTO();
		clientDTO.setName(client.getName());
		clientDTO.setEmail(client.getEmail());
		clientDTO.setPhone(client.getPhone());
		clientDTO.setId(client.getId());
		return clientDTO;
	}
}
