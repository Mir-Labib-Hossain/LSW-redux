import { useDispatch, useSelector } from "react-redux";
import { filterAuthorName, filterCategory } from "../../redux/filter/actions";
import Cards from "../cards";

const Body = () => {
  const filteredCategory = useSelector((state: IState) => state.filterReducer.category);
  const filteredAuthorName = useSelector((state: IState) => state.filterReducer.authorName);
  const dispatch = useDispatch();
  const removeCategoryFilter = () => {
    dispatch(filterCategory(""));
  };
  const removeAuthorFilter = () => {
    dispatch(filterAuthorName(""));
  };
  return (
    <>
      <div className="text-center flex justify-center mt-5">
        {filteredCategory && (
          <p className="text-sm font-medium text-indigo-600">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {filteredCategory}
              <img className="h-3 ml-2 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/59/59836.png" alt="" onClick={removeCategoryFilter} />
            </span>
          </p>
        )}

        {filteredAuthorName && (
          <p className="text-sm font-medium text-yellow-300	ml-3">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              {filteredAuthorName}
              <img className="h-3 ml-2 cursor-pointer " src="https://cdn-icons-png.flaticon.com/512/59/59836.png" alt="" onClick={removeAuthorFilter} />
            </span>
          </p>
        )}
      </div>
      <section className="relative bg-gray-50 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">ALL BLOGS ARE HERE</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p>
          </div>
          <Cards />
        </div>
      </section>
    </>
  );
};

export default Body;
