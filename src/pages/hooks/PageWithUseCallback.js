import { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "../../components/Todos";

const PageWithUseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  // Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default PageWithUseCallback;