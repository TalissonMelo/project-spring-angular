package com.talissonmelo.model.dto;

import com.talissonmelo.model.enums.ProblemStatus;

import lombok.Data;

@Data
public class UpdateStatusDTO {

	private ProblemStatus status;
}
