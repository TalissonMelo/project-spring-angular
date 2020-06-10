package com.talissonmelo.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProblemNewDTO {

	private String title;
	private String description;
	private Long client;
}
