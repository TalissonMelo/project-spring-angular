package com.talissonmelo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.talissonmelo.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long>{
 
	Optional<Client> findByEmail(String email);
	
	boolean existsByEmail(String email);
}
