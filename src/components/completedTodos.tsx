import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

type Props = {
  todos: ITodos;
};

const CompletedTodos = ({ todos }: Props) => {
 
 

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos.map((todo: ITodo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default CompletedTodos;
