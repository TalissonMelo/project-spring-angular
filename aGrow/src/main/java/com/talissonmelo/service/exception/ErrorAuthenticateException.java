package com.talissonmelo.service.exception;

public class ErrorAuthenticateException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public ErrorAuthenticateException(String message) {
		super(message);
	}
}
