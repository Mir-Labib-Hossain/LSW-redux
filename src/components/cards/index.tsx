import { useSelector } from "react-redux";
import data from "../../data";
import Card from "../card";

const Cards = () => {
  const blogs = data;
  const filteredTitle = useSelector((state: IState) => state.filterReducer.title);
  const filteredCategory = useSelector((state: IState) => state.filterReducer.category);
  const filteredAuthorName = useSelector((state: IState) => state.filterReducer.authorName);


  const filterByTitle = (blog: IBlog) => {
    return blog.title.includes(filteredTitle);
  };
  const filterByCategory = (blog: IBlog) => {
    return !filteredCategory ? true : blog.category === filteredCategory;
  };
  const filterByAuthor = (blog: IBlog) => {
    return !filteredAuthorName ? true : blog.author.name === filteredAuthorName;
  };
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {blogs
        .filter(filterByTitle)
        .filter(filterByCategory)
        .filter(filterByAuthor)
        .map((blog: IBlog, index: number) => (
          <Card blog={blog} key={index} />
        ))}
    </div>
  );
};

export default Cards;
