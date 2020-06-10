package com.talissonmelo.resources.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.talissonmelo.service.exception.EntityNotFound;

@ControllerAdvice
public class ApiException {

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<StandardError> methodValidation(MethodArgumentNotValidException e , HttpServletRequest request){
		
		StandardError error = StandardError.builder().message(e.getMessage()).status(HttpStatus.BAD_REQUEST.value()).build();
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
	}
	
	@ExceptionHandler(EntityNotFound.class)
	public ResponseEntity<StandardError> entityNotFound(EntityNotFound e , HttpServletRequest request){
		
		StandardError error = StandardError.builder().message(e.getMessage()).status(HttpStatus.NOT_FOUND.value()).build();
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
	}
}

