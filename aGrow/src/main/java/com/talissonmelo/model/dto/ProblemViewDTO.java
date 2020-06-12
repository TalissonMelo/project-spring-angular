package com.talissonmelo.model.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.talissonmelo.model.enums.ProblemStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProblemViewDTO {

	private Long id;
	private String title;
	private String description;
	
	@JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss", timezone = "America/Sao_Paulo")
	private LocalDateTime insertProblem;
	private String name;
	private String email;
	private String phone;
	private ProblemStatus status;
}
