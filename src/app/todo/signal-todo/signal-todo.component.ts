import { Component, inject, Signal, signal } from "@angular/core";
import { SignalTodo } from "../model/signalTodo.model";
import { SignalTodoService } from "../service/signal-todo.service";
import { FormsModule } from "@angular/forms";
import { ListTodosComponent } from "../list-todos/list-todos.component";

@Component({
  selector: "app-signal-todo",
  templateUrl: "./signal-todo.component.html",
  styleUrl: "./signal-todo.component.css",
  standalone: true,
  imports: [FormsModule, ListTodosComponent],
})
export class SignalTodoComponent {
  todos: Signal<SignalTodo[]>;
  todo = signal(new SignalTodo());
  signalTodoService = inject(SignalTodoService);
  constructor() {
    this.todos = this.signalTodoService.todos;
  }
  addTodo() {
    this.signalTodoService.addTodo(this.todo());
  }
}
