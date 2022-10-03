interface ITodosPayload {
  todoId?: number;
  todoText?: string;
  color?: string;
}

interface ITodosAction {
  type: string;
  payload: IPayload;
}

interface IFiltersPayload {
  color: string;
  changeType?: string;
  status: string;
}

interface IFiltersAction {
  type: string;
  payload: IFiltersPayload;
}
