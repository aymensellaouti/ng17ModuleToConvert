import { Component, EventEmitter, input, Output } from "@angular/core";
import { SignalTodo, TodoStatusEnum } from "../model/signalTodo.model";
import { NgForOf } from "@angular/common";

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrl: "./list-todos.component.css",
  standalone: true,
  imports: [NgForOf],
})
export class ListTodosComponent {
  status = Object.values(TodoStatusEnum);
}
