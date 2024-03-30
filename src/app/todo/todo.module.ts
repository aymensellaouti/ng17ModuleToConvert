import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { WeekTodoComponent } from "./week-todo/week-todo.component";
import { TodoRoutingModule } from "./todo.routing";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [TodoComponent, WeekTodoComponent],
  imports: [
    TodoRoutingModule,
    FormsModule
  ],
})
export class TodoModule {}
