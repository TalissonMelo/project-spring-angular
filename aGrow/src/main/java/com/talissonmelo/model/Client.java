package com.talissonmelo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
@Entity
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "Campo Nome e Obrigatório.")
	private String name;
	
	@Email(message = "Digite um Email Valido")
	@NotBlank(message = "Digite seu melhor Email.")
	private String email;
	
	@NotBlank(message = "Telefone e Obrigatório.")
	private String phone;
	
	@JsonIgnore
	@NotBlank(message = "Campo senha e Obrigatório.")
	private String password;
}
