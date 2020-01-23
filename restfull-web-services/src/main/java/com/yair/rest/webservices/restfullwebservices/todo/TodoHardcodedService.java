package com.yair.rest.webservices.restfullwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	private static List<Todo> todos = new ArrayList();
	private static int idCounter = 0;
	static {
		todos.add(new Todo(++idCounter,"Yair144","Take swim lessons",new Date(),false));
		todos.add(new Todo(++idCounter,"Yair144","Become an angular expert",new Date(),false));
		todos.add(new Todo(++idCounter,"Yair144","Get a job",new Date(),false));

	}
	
	public List<Todo> findAll() {
		return todos;
	}
}