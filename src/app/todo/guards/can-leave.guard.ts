import { CanDeactivateFn } from '@angular/router';
import { TodoComponent } from '../todo/todo.component';

export const canLeaveGuard: CanDeactivateFn<TodoComponent> = (component, currentRoute, currentState, nextState) => {

  if(component.todo.name || component.todo.content) {
    return confirm('Are you sure you want to leave, the form is not empty');
  }

  return true;
};
