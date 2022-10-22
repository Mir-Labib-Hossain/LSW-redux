import Todo from "./Todo";

type Props = {
  todos: ITodos;
};

const CompletedTodos = ({ todos }: Props) => {
  return (
    <>
      {todos.length !== 0 && (
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
          {todos.map((todo: ITodo) => (
            <Todo todo={todo} key={todo.id} />
            ))}
        </div>
            </div>
      )}
    </>
  );
};

export default CompletedTodos;
