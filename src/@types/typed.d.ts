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

type IBlogs = IBlog[]