import { AUTHOR_NAME, CATEGORY, TITLE } from "./actionTypes";

const initialState: IPayload = {
  title: "",
  category: "",
  authorName: "",
};

const filterReducer = (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case TITLE:
      return {
        ...state,
        title: payload.title,
      };

    case CATEGORY:
      return {
        ...state,
        category: payload.category,
      };

    case AUTHOR_NAME:
      return {
        ...state,
        authorName: payload.authorName,
      };

    default:
      return state;
  }
};
export default filterReducer;
