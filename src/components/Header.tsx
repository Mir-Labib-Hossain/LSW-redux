import { useState } from "react";
import { useDispatch } from "react-redux";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";

function Header() {
  const dispatch = useDispatch();

  const [inputedText, setInputedText] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputedText(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(added(inputedText));
  };

  const handleCompleteAll = () => {
    dispatch(allCompleted());
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={handleSubmit}>
        <img src="./src/assets/images/notes.png" className="w-6 h-6" alt="Add todo" />
        <input type="text" placeholder="Type your todo" className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500" value={inputedText} onChange={handleInput} />
        <button type="submit" className="appearance-none w-8 h-8 bg-[url('./src/assets/images/plus.png')] bg-no-repeat bg-contain"></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={handleCompleteAll}>
          <img className="w-4 h-4" src="./src/assets/images/double-tick.png" alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearCompleted}>Clear completed</li>
      </ul>
    </div>
  );
}

export default Header;
