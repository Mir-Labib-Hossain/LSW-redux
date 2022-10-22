import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompletedTodos from "./components/completedTodos";
import IncompleteTodos from "./components/incompleteTodos";
import fetchTodos from "./redux/todos/thunk/fetchTodos";

const App = () => {
  const dispatch = useDispatch();

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

  const todos = useSelector((state: any) => state.todosReducer)
    .filter(filterByStatus)
    .filter(filterByColors);

  useEffect(() => {
    // ignore this error
    dispatch(fetchTodos);
  }, [dispatch]);

  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar />

      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />
        <hr className="mt-4" />
        <IncompleteTodos todos={todos.filter((todo: ITodo) => !todo.completed)} />
        <hr className="mt-4" />
        <Footer />
      </div>

      <CompletedTodos todos={todos.filter((todo: ITodo) => todo.completed)} />
    </div>
  );
};

export default App;
