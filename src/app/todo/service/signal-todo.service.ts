import { Injectable, signal } from "@angular/core";
import { SignalTodo, TodoStatusEnum } from "../model/signalTodo.model";

@Injectable({
  providedIn: "root",
})
export class SignalTodoService {
  private todosSignal = signal<SignalTodo[]>([]);
  todos = this.todosSignal.asReadonly();
  constructor() {}

  addTodo(newTodo: SignalTodo) {
    this.todos().length
      ? (newTodo.id = this.todos()[this.todos().length - 1]?.id + 1)
      : (newTodo.id = 1);
    this.todosSignal.update((todos) => [...todos, newTodo]);
  }

  updateTodoStatus(id: number, newStatus: TodoStatusEnum) {
    this.todosSignal.update((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: newStatus };
        } else {
          return todo;
        }
      })
    );
  }
}
