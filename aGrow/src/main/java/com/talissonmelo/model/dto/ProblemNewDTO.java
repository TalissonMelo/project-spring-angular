package com.talissonmelo.model.dto;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProblemNewDTO {

	private Long id;
	
	@NotBlank(message = "Titúlo e Obrigatório.")
	private String title;
	
	@NotBlank(message = "Descrição e Obrigatório.")
	private String description;
	private Long client;
}
