// action constants
export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';

// action creators: wrapper function so we don't have to write out the type and payload manually for every action
export class AddTodo {
  readonly type = ADD_TODO;

  constructor(private payload: any) {}
}

export class RemoveTodo {
  readonly type = REMOVE_TODO;

  constructor(private payload: any) {}
}