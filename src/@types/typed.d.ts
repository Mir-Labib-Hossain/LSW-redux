interface IAuthor {
  name: string;
  image: string;
}

interface IBlog {
  coverImg: string;
  category: string;
  title: string;
  author: IAuthor;
}

type IBlogs = IBlog[];

// filter-reducer
interface IPayload {
  title?: string;
  category?: string;
  authorName?: sting;
}

interface IAction {
  type: string;
  payload: IPayload;
}

interface IState {
  filterReducer: {
    title: string;
    category: string;
    authorName: sting;
  };
}
