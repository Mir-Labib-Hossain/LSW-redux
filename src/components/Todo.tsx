import { useDispatch } from "react-redux";
import { colorSelected, deleted, toggled } from "../redux/todos/actions";

type Props = {
  todo: ITodo;
};

function Todo({ todo }: Props) {
  const { todoId, todoText, color, completed }: ITodo = todo;
  const dispatch = useDispatch();

  const handleStatus = (todoId: number) => {
    dispatch(toggled(todoId));
  };

  const handleColor = (todoId: number, color: string) => {
    dispatch(colorSelected(todoId, color));
  };

  const handleDelete = (todoId: number) => {
    dispatch(deleted(todoId));
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div className={`rounded-full bg-white border-2  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed ? "border-green-500" : "border-gray-400"} `}>
        <input type="checkbox" className="opacity-0 absolute rounded-full" onClick={() => handleStatus(todoId)} />
        {completed && (
          <svg className="fill-current w-3 h-3 text-green-500 pointer-events-none" viewBox="0 0 20 20">
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1 ${!completed && "line-through"}`}>{todoText}</div>

      <div onClick={() => handleColor(todoId, "green")} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500  ${color === "green" && "bg-green-500"} `}></div>
      <div onClick={() => handleColor(todoId, "yellow")} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${color === "yellow" && "bg-yellow-500"} `}></div>
      <div onClick={() => handleColor(todoId, "red")} className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${color === "red" && "bg-red-500"} `}></div>

      <img src="/src/assets/images/cancel.png" className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer" alt="Cancel" onClick={() => handleDelete(todoId)} />
    </div>
  );
}

export default Todo;
