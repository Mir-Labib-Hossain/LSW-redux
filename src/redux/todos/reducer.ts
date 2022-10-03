import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes";

const initialState: ITodos = [
  {
    todoId: 1,
    todoText: "Learn React",
    completed: true,
  },
  {
    todoId: 2,
    todoText: "Learn Redux",
    completed: false,
  },
];

const newId = (state: ITodos) => {
  return state.reduce((maxId: number, todo: ITodo) => {
    Math.max(maxId, todo.todoId);
  }, 0);
};

export const todosReducer = (state = initialState, { type, payload }: ITodosAction) => {
  switch (type) {
    case ADDED:
      return [
        ...state,
        {
          todoId: newId(state),
          todoText: payload.todoText,
        },
      ];

    case TOGGLED:
      console.log(TOGGLED);

      return state.map((todo: ITodo) => {
        if (payload.todoId === todo.todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else return todo;
      });

    case COLORSELECTED:
      console.log(COLORSELECTED);

      return state.map((todo: ITodo) => {
        if (payload.todoId === todo.todoId) {
          return {
            ...todo,
            color: payload.color,
          };
        } else return todo;
      });

    case DELETED:
      console.log(DELETED);

      return state.filter((todo: ITodo) => todo.todoId !== payload.todoId);

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
