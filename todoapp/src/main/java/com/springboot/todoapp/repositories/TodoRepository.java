package com.springboot.todoapp.repositories;

import com.springboot.todoapp.models.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends MongoRepository<Todo, Long> {
}
