import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

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
    private todoService: TodoDataService
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

}
