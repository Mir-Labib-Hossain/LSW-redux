import { useState } from "react";
import { useDispatch } from "react-redux";
import deleteTodo from "../redux/todos/thunk/deleteTodo";
import updateColor from "../redux/todos/thunk/updateColor";
import updateStatus from "../redux/todos/thunk/updateStatus";
import updateText from "../redux/todos/thunk/updateText";

type Props = {
  todo: ITodo;
};

function Todo({ todo }: Props) {
  const { id, text, color, completed }: ITodo = todo;
  const [editing, setEditing] = useState<boolean>(false);
  const [input, setInput] = useState(text);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleStatus = () => {
    // ignore this error
    dispatch(updateStatus(id, completed));
  };

  const handleColor = (id: number, color: string) => {
    // ignore this error
    dispatch(updateColor(id, color));
  };

  const handleEdit = () => {
    setEditing(!editing);
    console.log("Lets Edit : ", editing);
  };

  const handleCancle = () => {
    setInput(text);
    setEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  const handleUpdate = (e: any) => {
    e.preventDefault();
    dispatch(updateText(id, input));
    setEditing(false);
  };
  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div className={`rounded-full bg-white border-2  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed ? "border-green-500" : "border-gray-400"} `}>
        <input type="checkbox" className="opacity-0 absolute rounded-full cursor-pointer" onClick={handleStatus} />
        {completed && (
          <svg className="fill-current w-3 h-3 text-green-500 pointer-events-none" viewBox="0 0 20 20">
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      {editing ? (
        <form className="flex-1" onSubmit={handleUpdate}>
          <input type="text" autoFocus className="h-8 shadow appearance-none border border-blue-500 rounded w-full px-2 py-2  text-gray-700  leading-tight focus:outline-none focus:shadow-outline" value={input} onChange={handleChange} />
        </form>
      ) : (
        <div className={`h-8 select-none flex-1 pt-1 ${!completed && "line-through"}`}>{input}</div>
      )}
      <div onClick={() => handleColor(id, "green")} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500  ${color === "green" && "bg-green-500"} `}></div>
      <div onClick={() => handleColor(id, "yellow")} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${color === "yellow" && "bg-yellow-500"} `}></div>
      <div onClick={() => handleColor(id, "red")} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${color === "red" && "bg-red-500"} `}></div>

      {editing ? <img src="/src/assets/images/cancel.png" className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer" alt="Cancel" onClick={handleCancle} /> : <img src="/src/assets/images/edit.png" className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer" alt="Edit" onClick={handleEdit} />}

      <img src="/src/assets/images/trash.png" className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer" alt="Cancel" onClick={handleDelete} />
    </div>
  );
}

export default Todo;
