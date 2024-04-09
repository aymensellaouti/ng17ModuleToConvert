export enum TodoStatusEnum {
  WAITING = "waiting",
  IN_PROGRESS = "in progress",
  DONE = "done",
}

export class SignalTodo {
  constructor(
    public id = 0,
    public name = "",
    public content = "",
    public status: TodoStatusEnum = TodoStatusEnum.WAITING
  ) {}
}
