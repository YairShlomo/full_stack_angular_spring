import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[]

  message: string
  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos()
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('Yair144').subscribe(
      response => {
        this.todos = response;
      }
    )
  }
  deleteTodo(id) {
    this.todoService.deleteTodo('Yair144',id).subscribe(
      response => {
        this.message = `Successfuly deleted Todo number ${id}`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id) {
    this.message = `Successfuly updated Todo number ${id}`;
    this.router.navigate(['todos',id]);
  }

}
