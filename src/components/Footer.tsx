import { useDispatch, useSelector } from "react-redux";
import { setColor, statusChanged } from "../redux/filters/actions";

type Props = {};

const tasksLeft = (num: number) => {
  switch (num) {
    case 0:
      return "No task remaining";

    case 1:
      return "1 task left";

    default:
      return num + " tasks left";
  }
};

function Footer({}: Props) {
  const dispatch = useDispatch();

  const todos = useSelector((state: any) => state.todosReducer);
  const remainingTasks = todos.filter((todo: ITodo) => !todo.completed);

  const filters = useSelector((state: any) => state.filtersReducer);
  const { status, colors } = filters;

  const checkColorIncludes = (color: string) => {
    return colors.includes(color);
  };

  const handleStatusChange = (status: string) => {
    dispatch(statusChanged(status));
  };

  const handleColorChange = (color: string) => {
    const changeType = checkColorIncludes(color) ? "REMOVE" : "ADD";
    dispatch(setColor(color, changeType));
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{tasksLeft(remainingTasks.length)}</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li className={`cursor-pointer ${status === "All" && "font-bold"}`} onClick={() => handleStatusChange("All")}>
          All
        </li>
        <li>|</li>
        <li className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`} onClick={() => handleStatusChange("Incomplete")}>
          Incomplete
        </li>
        <li>|</li>
        <li className={`cursor-pointer ${status === "Complete" && "font-bold"}`} onClick={() => handleStatusChange("Complete")}>
          Complete
        </li>
        <li></li>
        <li></li>
        <li className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${checkColorIncludes("green") && "bg-green-500"} `} onClick={() => handleColorChange("green")}></li>
        <li className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${checkColorIncludes("red") && "bg-red-500"} `} onClick={() => handleColorChange("red")}></li>
        <li className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${checkColorIncludes("yellow") && "bg-yellow-500"} `} onClick={() => handleColorChange("yellow")}></li>
      </ul>
    </div>
  );
}

export default Footer;
