package com.talissonmelo.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ClientDTO {

	private Long id;
	private String name;
	private String email;
	private String phone;
}
