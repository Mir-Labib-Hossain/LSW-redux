import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../redux/hooks";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";
type Props = {};

function Todos({}: Props) {
  const dispatch = useAppDispatch();
  const todos = useSelector((state: any) => state.todosReducer);
  const filters = useSelector((state: any) => state.filtersReducer);

  const { status, colors } = filters;

  const filterByColors = (todo: ITodo) => {
    return colors.length === 0 || colors.includes(todo.color);
  };

  useEffect(() => {
    // ignore this error
    dispatch(fetchTodos);
  }, [dispatch]);

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
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
}

export default Todos;
