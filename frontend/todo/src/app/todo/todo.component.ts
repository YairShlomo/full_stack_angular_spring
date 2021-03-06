import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    //subscribe is an asynchrony task so we should init todo meanwhile the request is on
    this.todo = new Todo(this.id,'',false,new Date())
    if(this.id!=-1) {
      this.todoService.retriveTodo('Yair144',this.id).subscribe(
        data => this.todo = data
      )
    }
  }

  saveTodo() {
    if(this.id == -1) {
      this.todoService.addTodo("Yair144",this.todo).subscribe(
        data => {
          this.router.navigate(["todos"])
        }
      )
    } else {
      this.todoService.updateTodo("Yair144",this.id,this.todo).subscribe(
        data => {
          this.router.navigate(["todos"])
        }
      )
    }
  }

}
