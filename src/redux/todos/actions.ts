import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED } from "./actionTypes";

export const loaded = (todos: ITodos) => {
  return {
    type: LOADED,
    payload: { todos },
  };
};

export const added = (todo:ITodo) => {
  return {
    type: ADDED,
    payload: { todo },
  };
};

export const toggled = (id: number) => {
  return {
    type: TOGGLED,
    payload: { id },
  };
};

export const colorSelected = (id: number, color: string) => {
  return {
    type: COLORSELECTED,
    payload: { id, color },
  };
};

export const deleted = (id: number) => {
  return {
    type: DELETED,
    payload: { id },
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
