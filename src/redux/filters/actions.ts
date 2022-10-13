import { SETCOLOR, STATUSCHANGED } from "./actionTypes";

export const setColor = (color: string, changeType: string) => {
  return {
    type: SETCOLOR,
    payload: {
      color,
      changeType,
    },
  };
};

export const statusChanged = (status: string) => {
  return {
    type: STATUSCHANGED,
    payload: { status },
  };
};
