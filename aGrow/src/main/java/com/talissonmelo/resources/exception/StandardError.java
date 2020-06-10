package com.talissonmelo.resources.exception;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class StandardError {

	private String message;
	private Integer status;
}
