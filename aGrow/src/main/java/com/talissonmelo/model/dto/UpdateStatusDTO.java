package com.talissonmelo.model.dto;

import com.talissonmelo.model.enums.ProblemStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UpdateStatusDTO {

	private ProblemStatus status;
}
