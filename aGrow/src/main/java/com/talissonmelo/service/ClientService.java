package com.talissonmelo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.talissonmelo.model.Client;
import com.talissonmelo.repositories.ClientRepository;
import com.talissonmelo.service.exception.EntityNotFound;
import com.talissonmelo.service.exception.ErrorAuthenticateException;

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
}
