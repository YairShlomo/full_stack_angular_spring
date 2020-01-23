import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todo:Todo
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    //subscribe is an asynchrony task so we should init todo meanwhile the request is on
    this.todo = new Todo(1,'',false,new Date())
    this.todoService.retriveTodo('Yair144',this.id).subscribe(
      data => this.todo = data
    )

  }

  saveTodo() {

  }

}
