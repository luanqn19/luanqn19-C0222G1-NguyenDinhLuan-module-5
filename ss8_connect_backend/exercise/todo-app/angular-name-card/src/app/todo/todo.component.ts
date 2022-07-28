import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  todos: Todo[] = [];
  todo !: Todo;
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.findAll().subscribe(value => {
      console.log(value);
      this.todos = value;
    });
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.save(todo).subscribe(() => {
        this.ngOnInit();
      });
      this.content.reset();
    }
  }

  remove (id:number | undefined) {
    this.todoService.delete(id).subscribe();
    this.ngOnInit();
  }

  edit(id:number | undefined) {
    console.log(id);
  }
}
