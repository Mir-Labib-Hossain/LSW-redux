import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes";

export const added = (todoText: string) => {
  return {
    type: ADDED,
    payload: {todoText},
  };
};

export const toggled = (todoId: number) => {
  return {
    type: TOGGLED,
    payload: {todoId},
  };
};

export const colorSelected = (todoId: number, color: string) => {
  return {
    type: COLORSELECTED,
    payload: { todoId, color },
  };
};

export const deleted = (todoId: number) => {
  return {
    type: DELETED,
    payload: { todoId },
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
