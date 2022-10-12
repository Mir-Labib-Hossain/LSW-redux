import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED } from "./actionTypes";

const initialState: ITodos = [];

const newId = (state: ITodos) => {
  return state.reduce((maxId: number, todo: ITodo) => {
    Math.max(maxId, todo.id);
  }, 0);
};

export const todosReducer = (state = initialState, { type, payload }: ITodosAction) => {
  switch (type) {
    case LOADED:
      return payload.todos;

    case ADDED:
      return [
        ...state,
        {
          id: newId(state),
          text: payload.text,
        },
      ];

    case TOGGLED:
      console.log(TOGGLED);

      return state.map((todo: ITodo) => {
        if (payload.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else return todo;
      });

    case COLORSELECTED:
      console.log(COLORSELECTED);

      return state.map((todo: ITodo) => {
        if (payload.id === todo.id) {
          return {
            ...todo,
            color: payload.color,
          };
        } else return todo;
      });

    case DELETED:
      console.log(DELETED);

      return state.filter((todo: ITodo) => todo.id !== payload.id);

    case ALLCOMPLETED:
      return state.map((todo: ITodo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((todo: ITodo) => todo.completed === false);

    default:
      return state;
  }
};

export default todosReducer;
