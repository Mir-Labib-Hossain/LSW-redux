import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

const initialState = {
  status: "All",
  colors: [],
};

const filtersReducer = (state = initialState, { type, payload }: IFiltersAction) => {
  switch (type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: payload.status,
      };

    case COLORCHANGED:
      switch (payload.changeType) {
        case "ADD":
          console.log(COLORCHANGED);
          return {
            ...state,
            colors: [...state.colors, payload.color],
          };

        case "REMOVE":
          return {
            ...state,
            colors: state.colors.filter((color) => {
              return color !== payload.color;
            }),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};
export default filtersReducer;
