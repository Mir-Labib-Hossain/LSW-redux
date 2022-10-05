import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterTitle } from "../../redux/filter/actions";

const useDebounce = (fn: any, delay: number) => {
  let timeoutId: any;
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    fn();
  }, delay);
};

const SearchBox = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    useDebounce(() => {
      setInput(e.target.value);
    }, 500);
  };

  useEffect(() => {
    dispatch(filterTitle(input));
  }, [input]);

  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input className="outline-none border-none bg-gray-50 h-full w-full mr-2" type="search" name="search" placeholder="Search" onChange={handleChange} />
      <img className="inline h-6 cursor-pointer" src="../src/assets/search.svg" alt="Search" />
    </div>
  );
};

export default SearchBox;
