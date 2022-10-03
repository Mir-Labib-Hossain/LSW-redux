import { useSelector } from "react-redux";
import Todo from "./Todo";

type Props = {};

function Todos({}: Props) {
  const todos = useSelector((state: any) => state.todosReducer);
  const filters = useSelector((state: any) => state.filtersReducer);

  const { status, colors } = filters;

  const filterByColors = (todo: ITodo) => {
    return colors.length === 0 || colors.includes(todo.color);
  };

  const filterByStatus = (todo: ITodo) => {
    switch (status) {
      case "Complete":
        return todo.completed;
      case "Incomplete":
        return !todo.completed;
      default:
        return true;
    }
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo: ITodo) => (
          <Todo todo={todo} key={todo.todoId} />
        ))}
    </div>
  );
}

export default Todos;
