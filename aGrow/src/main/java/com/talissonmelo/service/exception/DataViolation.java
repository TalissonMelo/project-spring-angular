package com.talissonmelo.service.exception;

public class DataViolation extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public DataViolation(String message) {
		super(message);
	}
}
