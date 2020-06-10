package com.talissonmelo.model.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ClientNewDTO {

	@NotBlank(message = "Campo Nome e Obrigatório.")
	private String name;
	
	@Email(message = "Digite um Email Valido")
	@NotBlank(message = "Digite seu melhor Email.")
	private String email;
	
	@NotBlank(message = "Telefone e Obrigatório.")
	private String phone;
	
	@NotBlank(message = "Campo senha e Obrigatório.")
	private String password;
}
