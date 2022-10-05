import { AUTHOR_NAME, CATEGORY, TITLE } from "./actionTypes";

export const filterTitle = (title: string) => {
  return {
    type: TITLE,
    payload: {
      title,
    },
  };
};

export const filterCategory = (category: string) => {
  return {
    type: CATEGORY,
    payload: {
      category,
    },
  };
};

export const filterAuthorName = (authorName: string) => {
  return {
    type: AUTHOR_NAME,
    payload: {
      authorName,
    },
  };
};


  