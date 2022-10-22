import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, DELETED, LOADED, SETCOLOR, TOGGLED, UPDATED } from "./actionTypes";

export const loaded = (todos: ITodos) => {
  return {
    type: LOADED,
    payload: { todos },
  };
};

export const added = (todo: ITodo) => {
  return {
    type: ADDED,
    payload: { todo },
  };
};

export const updated = (id: number, text: string) => {
  return {
    type: UPDATED,
    payload: { id, text },
  };
};

export const toggled = (id: number) => {
  return {
    type: TOGGLED,
    payload: { id },
  };
};

export const setColor = (id: number, color: string) => {
  return {
    type: SETCOLOR,
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
