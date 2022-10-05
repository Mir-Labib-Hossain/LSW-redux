import data from "../../data";
import Card from "../card";

const Cards = () => {
  const blogs = data;
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {blogs.map((blog: IBlog, index: number) => (
        <Card blog={blog} key={index} />
      ))}
    </div>
  );
};

export default Cards;
