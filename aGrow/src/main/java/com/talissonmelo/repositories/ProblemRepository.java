package com.talissonmelo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.talissonmelo.model.Problem;

public interface ProblemRepository extends JpaRepository<Problem, Long> {

}
