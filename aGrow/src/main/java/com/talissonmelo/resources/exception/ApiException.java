package com.talissonmelo.resources.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.talissonmelo.service.exception.DataViolation;
import com.talissonmelo.service.exception.EntityNotFound;
import com.talissonmelo.service.exception.RuleException;

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
	
	@ExceptionHandler(RuleException.class)
	public ResponseEntity<StandardError> rule(RuleException e , HttpServletRequest request){
		
		StandardError error = StandardError.builder().message(e.getMessage()).status(HttpStatus.BAD_REQUEST.value()).build();
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
	}
	
	@ExceptionHandler(DataViolation.class)
	public ResponseEntity<StandardError> dataViolation(DataViolation e , HttpServletRequest request){
		
		StandardError error = StandardError.builder().message(e.getMessage()).status(HttpStatus.CONFLICT.value()).build();
		return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
	}
}

