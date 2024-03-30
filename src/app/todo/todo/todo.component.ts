import { Component, inject } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent {
  // Quels mes attributs d'états ?
  /**
   * Représente la liste des todos existants à afficher
   */
  todos: Todo[];

  /**
   * Le Todo à ajouter (à partir des champs du formulaire)
   */
  todo: Todo = new Todo();
  // J'injecte mon service
  // Donne moi une instance de TodoService
  todoService = inject(TodoService);
  constructor() {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
