interface ITodosPayload {
  id?: number;
  text?: string;
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
