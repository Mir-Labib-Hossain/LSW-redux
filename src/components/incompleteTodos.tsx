import { useSelector } from "react-redux";
import Todo from "./Todo";

type Props = {
  todos:ITodos
};

const IncompleteTodos = ({todos}:Props) => {
  
  

 
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos.map((todo: ITodo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default IncompleteTodos;
